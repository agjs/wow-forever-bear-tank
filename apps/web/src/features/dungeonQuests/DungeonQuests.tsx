import {
  type DungeonQuest,
  type DungeonQuestList,
  dungeonQuests,
  type QuestStop,
  questStops,
  wayCommand,
} from "@btc/guide-data";
import { CopyButton } from "../../components/CopyButton/index.ts";
import { Rich } from "../../components/Rich/index.ts";
import { WowLink } from "../../components/WowLink/index.ts";
import { formatRange, plural, useLevel } from "../../lib/level/index.ts";
import { isRecordOf, isString, storedValue, useStored } from "../../lib/storage/index.ts";
import { useWowheadRefresh, wowheadUrl } from "../../lib/wowhead/index.ts";
import {
  isQuestStatus,
  nextStep,
  pickDungeon,
  progress,
  type QuestStatus,
  type QuestStatuses,
  STATUS_LABELS,
  statusOf,
  withStatus,
} from "./dungeonQuests.utils.ts";

const statusStore = storedValue<QuestStatuses>("dqst", {}, isRecordOf(isQuestStatus));
const selectedStore = storedValue<string | null>("dqsel", null, (v): v is string | null => v === null || isString(v));

interface QuestRowProps {
  readonly quest: DungeonQuest;
  readonly level: number;
  readonly status: QuestStatus;
  readonly inside: boolean;
  readonly onStatus: (status: QuestStatus) => void;
}

function QuestRow({ quest, level, status, inside, onStatus }: QuestRowProps) {
  return (
    <li className={`dqq s${status}`}>
      <div className="dqtop">
        <a className="dqn" href={wowheadUrl(`quest=${quest.id}`)} target="_blank" rel="noopener">
          {quest.name}
        </a>{" "}
        <span className="muted small">#{quest.id}</span>{" "}
        {quest.faction === "horde" && <span className="tag q">Horde</span>}
        {quest.requiredLevel > level && <span className="tag c"> level {quest.requiredLevel}</span>}
      </div>
      <div className="dqmeta">
        Talk to {quest.npcId ? <WowLink path={`npc=${quest.npcId}`}>{quest.giver}</WowLink> : quest.giver}
        {inside && ` (${quest.where})`}.{quest.note && " "}
        <Rich text={quest.note} />
      </div>
      <div className="dqact">
        <fieldset className="seg3" aria-label={`Status of ${quest.name}`}>
          {STATUS_LABELS.map(([value, label]) => (
            <button
              key={value}
              type="button"
              aria-pressed={status === value}
              data-v={value}
              className={status === value ? "on" : ""}
              onClick={() => onStatus(value)}
            >
              {label}
            </button>
          ))}
        </fieldset>
      </div>
    </li>
  );
}

function NextStepText({
  list,
  stops,
  statuses,
}: {
  readonly list: DungeonQuestList;
  readonly stops: readonly QuestStop[];
  readonly statuses: QuestStatuses;
}) {
  const next = nextStep(list, stops, statuses);
  if (next.kind === "finished") return <>All {next.total} quests done. Pick the next dungeon above.</>;
  if (next.kind === "run")
    return (
      <>
        You have everything you can pick up outside. Run {list.name} and finish the {next.inLog}{" "}
        {plural(next.inLog, "quest")} in your log.
      </>
    );
  return (
    <>
      Go to <b>{next.stop.title}</b> and pick up{" "}
      {next.questNames.map((name, index) => (
        <span key={name}>
          {index > 0 && ", "}
          <b>{name}</b>
        </span>
      ))}
      .{next.moreStops > 0 && ` Then ${next.moreStops} more ${plural(next.moreStops, "stop")} below.`}
    </>
  );
}

export function DungeonQuests() {
  const [level] = useLevel();
  const [statuses, setStatuses] = useStored(statusStore);
  const [saved, setSaved] = useStored(selectedStore);
  const list = pickDungeon(dungeonQuests, level, statuses, saved);
  useWowheadRefresh();
  if (!list) return null;

  const stops = questStops(list);
  const [notPicked, inLog, done] = progress(list, statuses);
  const total = list.quests.length;
  const open = dungeonQuests.filter((d) => d.levels.max >= level);
  const outleveled = dungeonQuests.filter((d) => d.levels.max < level);
  const setStatus = (questId: number, status: QuestStatus) => setStatuses(withStatus(statuses, questId, status));

  const chip = (d: DungeonQuestList) => (
    <button
      key={d.key}
      type="button"
      className={`chip${d.key === list.key ? " on" : ""}${d.levels.max < level ? " past" : ""}`}
      aria-pressed={d.key === list.key}
      onClick={() => setSaved(d.key)}
    >
      {d.name}{" "}
      <small>
        {progress(d, statuses)[2]}/{d.quests.length}
      </small>
    </button>
  );

  return (
    <>
      <div className="chips dqchips">
        {open.map(chip)}
        {outleveled.length > 0 && (
          <details className="dqpast">
            <summary>Lower level</summary>
            {outleveled.map(chip)}
          </details>
        )}
      </div>
      <div className="card dqhead">
        <div className="dqh">
          <b>{list.name}</b>
          <span className="muted small">
            Levels {formatRange(list.levels)}
            {list.newInForever && " · new in Forever"} ·{" "}
            <a href={wowheadUrl(`guide/${list.guideId}`)} target="_blank" rel="noopener">
              Wowhead guide
            </a>
          </span>
        </div>
        <div className="dqbar">
          <i className="d" style={{ width: `${(done / total) * 100}%` }} />
          <i className="l" style={{ width: `${(inLog / total) * 100}%` }} />
        </div>
        <div className="dqcount">
          <span>
            <i className="dot d" />
            {done} done
          </span>
          <span>
            <i className="dot l" />
            {inLog} in your log
          </span>
          <span>
            <i className="dot n" />
            {notPicked} not picked up
          </span>
        </div>
        <div className="dqnext">
          <span className="label">Next step</span>
          <p>
            <NextStepText list={list} stops={stops} statuses={statuses} />
          </p>
        </div>
        <div className="dqsync">
          <span className="small muted">
            <b>In game:</b> the Bear Tank Codex addon shows this same list with your real quest status, updating as you
            play. Type <code>/btq</code> to open it. <a href="#addon">How to install</a>
          </span>
        </div>
      </div>
      {stops.map((stop, index) => {
        const left = stop.quests.filter((q) => statusOf(statuses, q.id) === 0).length;
        const way = wayCommand(stop.pickup);
        return (
          <div key={stop.key} className={`dqstop${left ? "" : " clear"}`}>
            <div className="dqsh">
              <span className="num">{stop.pickup.inside ? "★" : index + 1}</span>
              <div>
                <b>{stop.title}</b>
                <small>
                  {stop.pickup.inside
                    ? "Picked up or dropped inside the dungeon."
                    : left
                      ? `${left} to pick up here`
                      : "Nothing left to pick up here"}
                </small>
              </div>
              {way && <CopyButton text={way} label="Copy /way" title="Needs the TomTom addon" />}
            </div>
            <ul className="dqql">
              {stop.quests.map((quest) => (
                <QuestRow
                  key={quest.id}
                  quest={quest}
                  level={level}
                  status={statusOf(statuses, quest.id)}
                  inside={stop.pickup.inside}
                  onStatus={(status) => setStatus(quest.id, status)}
                />
              ))}
            </ul>
          </div>
        );
      })}
      <p className="small muted psrc">
        "Copy /way" puts a map arrow on the spot if you use the TomTom addon. Quests come from Wowhead's Forever dungeon
        guides, with faction and level checked in the Wowhead Forever database. Class-only and Blacksmith-only quests
        are left out.
      </p>
    </>
  );
}
