/**
 * Small typed wrapper around localStorage for per-browser settings (your level, ticked boxes, ...).
 * Keys keep the "btc:" prefix and JSON format of the original site, so saved settings carry over.
 * Every read and write is guarded: private windows and blocked storage fall back to memory.
 */
const PREFIX = "btc:";

export interface StoredValue<T> {
  /** Current value in the browser (stable reference until it changes). */
  readonly get: () => T;
  /** Value used while rendering on the server, before the browser's value is known. */
  readonly getServer: () => T;
  readonly set: (value: T) => void;
  readonly subscribe: (listener: () => void) => () => void;
}

export function storedValue<T>(key: string, fallback: T, isValid: (value: unknown) => value is T): StoredValue<T> {
  const fullKey = PREFIX + key;
  const listeners = new Set<() => void>();
  let cachedRaw: string | null | undefined;
  let cached = fallback;
  let memoryOnly = false;

  const parse = (raw: string | null): T => {
    if (raw === null) return fallback;
    try {
      const value: unknown = JSON.parse(raw);
      return isValid(value) ? value : fallback;
    } catch {
      return fallback;
    }
  };

  const get = (): T => {
    if (memoryOnly) return cached;
    let raw: string | null;
    try {
      raw = localStorage.getItem(fullKey);
    } catch {
      return cached;
    }
    if (raw !== cachedRaw) {
      cachedRaw = raw;
      cached = parse(raw);
    }
    return cached;
  };

  const notify = () => {
    for (const listener of listeners) listener();
  };

  const onStorage = (event: StorageEvent) => {
    if (event.key === fullKey) notify();
  };

  return {
    get,
    getServer: () => fallback,
    set(value) {
      const raw = JSON.stringify(value);
      cached = value;
      cachedRaw = raw;
      try {
        localStorage.setItem(fullKey, raw);
      } catch {
        memoryOnly = true;
      }
      notify();
    },
    subscribe(listener) {
      if (listeners.size === 0) window.addEventListener("storage", onStorage);
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
        if (listeners.size === 0) window.removeEventListener("storage", onStorage);
      };
    },
  };
}

// ---------- guards ----------

export const isNumber = (value: unknown): value is number => typeof value === "number" && Number.isFinite(value);
export const isString = (value: unknown): value is string => typeof value === "string";

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

export const isRecordOf =
  <T>(isValue: (value: unknown) => value is T) =>
  (value: unknown): value is Record<string, T> =>
    isRecord(value) && Object.values(value).every(isValue);

export const isOneOf =
  <const T extends string>(options: readonly T[]) =>
  (value: unknown): value is T =>
    options.some((option) => option === value);
