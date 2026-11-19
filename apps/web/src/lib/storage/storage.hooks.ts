import { useCallback, useSyncExternalStore } from "react";
import type { StoredValue } from "./storage.ts";

/** Reads a stored value and re-renders when it changes (in this tab or another one). */
export function useStored<T>(stored: StoredValue<T>): readonly [T, (value: T) => void] {
  const value = useSyncExternalStore(stored.subscribe, stored.get, stored.getServer);
  const set = useCallback((next: T) => stored.set(next), [stored]);
  return [value, set];
}
