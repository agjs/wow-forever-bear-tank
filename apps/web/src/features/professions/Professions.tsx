import { Segmented } from "../../components/Segmented/index.ts";
import { useLevel } from "../../lib/level/index.ts";
import { isNumber, isOneOf, type StoredValue, storedValue, useStored } from "../../lib/storage/index.ts";
import { useWowheadRefresh } from "../../lib/wowhead/index.ts";
import { Cooking } from "./Cooking.tsx";
import { Farming } from "./Farming.tsx";
import { Fishing } from "./Fishing.tsx";
import { Gold } from "./Gold.tsx";
import { Leatherworking } from "./Leatherworking.tsx";

const TABS = [
  ["lw", "Leatherworking"],
  ["farm", "Leather farming"],
  ["cook", "Cooking"],
  ["fish", "Fishing"],
  ["gold", "Gold"],
] as const;
type Tab = (typeof TABS)[number][0];

const tabStore = storedValue<Tab>("prof", "lw", isOneOf(TABS.map(([tab]) => tab)));

/** Skill per profession, saved as "skill:lw" etc. like the original site. Leatherworking starts at 150. */
const skillStore = (key: string, fallback = 1): StoredValue<number> => storedValue(`skill:${key}`, fallback, isNumber);
const SKILLS = {
  lw: skillStore("lw", 150),
  skin: skillStore("skin"),
  cook: skillStore("cook"),
  fish: skillStore("fish"),
} as const;

export function Professions() {
  const [level] = useLevel();
  const [tab, setTab] = useStored(tabStore);
  const [lw, setLw] = useStored(SKILLS.lw);
  const [skin, setSkin] = useStored(SKILLS.skin);
  const [cook, setCook] = useStored(SKILLS.cook);
  const [fish, setFish] = useStored(SKILLS.fish);
  useWowheadRefresh();

  return (
    <>
      <Segmented label="Profession" options={TABS} value={tab} onChange={setTab} />
      {tab === "lw" && <Leatherworking skill={lw} onSkill={setLw} />}
      {tab === "farm" && <Farming level={level} skill={skin} onSkill={setSkin} />}
      {tab === "cook" && <Cooking level={level} skill={cook} onSkill={setCook} />}
      {tab === "fish" && <Fishing skill={fish} onSkill={setFish} />}
      {tab === "gold" && <Gold level={level} />}
    </>
  );
}
