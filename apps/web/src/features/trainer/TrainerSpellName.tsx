import type { TrainerSpell } from "@btc/guide-data";
import { Icon } from "../../components/Icon/index.ts";
import { WowLink } from "../../components/WowLink/index.ts";
import { spellInfo } from "./trainer.utils.ts";

export function TrainerSpellName({ spell }: { readonly spell: TrainerSpell }) {
  return (
    <>
      <WowLink path={`spell=${spell.spellId}`}>
        <Icon name={spellInfo(spell).icon} alt={spell.name} /> {spell.name}
      </WowLink>
      {spell.rank > 0 && <span className="rk"> rank {spell.rank}</span>}
    </>
  );
}
