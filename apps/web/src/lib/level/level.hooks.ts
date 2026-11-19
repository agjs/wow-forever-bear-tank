import { useCallback } from "react";
import { useStored } from "../storage/index.ts";
import { levelStore } from "./level.store.ts";
import { clampLevel } from "./level.utils.ts";

export function useLevel(): readonly [number, (level: number) => void] {
  const [stored, setStored] = useStored(levelStore);
  const setLevel = useCallback((next: number) => setStored(clampLevel(next)), [setStored]);
  return [clampLevel(stored), setLevel];
}
