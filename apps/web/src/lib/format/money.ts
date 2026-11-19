/** Copper -> "1g 20s 5c". Zero gives "0c". */
export function formatMoney(copper: number): string {
  const gold = Math.floor(copper / 10000);
  const silver = Math.floor((copper % 10000) / 100);
  const rest = copper % 100;
  const parts = [gold ? `${gold}g` : "", silver ? `${silver}s` : "", rest || !copper ? `${rest}c` : ""];
  return parts.filter(Boolean).join(" ");
}
