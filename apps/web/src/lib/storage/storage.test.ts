// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from "vitest";
import { isNumber, isOneOf, isRecordOf, storedValue } from "./storage.ts";

beforeEach(() => localStorage.clear());

describe("storedValue", () => {
  it("returns the fallback until something is saved, then the saved value", () => {
    const level = storedValue("level", 10, isNumber);
    expect(level.get()).toBe(10);
    level.set(42);
    expect(level.get()).toBe(42);
    expect(localStorage.getItem("btc:level")).toBe("42");
  });

  it("reads values saved by the original site and ignores invalid ones", () => {
    localStorage.setItem("btc:level", "50");
    expect(storedValue("level", 10, isNumber).get()).toBe(50);
    localStorage.setItem("btc:level", '"fifty"');
    expect(storedValue("level", 10, isNumber).get()).toBe(10);
    localStorage.setItem("btc:level", "{broken");
    expect(storedValue("level", 10, isNumber).get()).toBe(10);
  });

  it("keeps the same object between reads so React doesn't re-render for nothing", () => {
    const done = storedValue(
      "done",
      {},
      isRecordOf((v): v is boolean => typeof v === "boolean"),
    );
    done.set({ cp1: true });
    expect(done.get()).toBe(done.get());
  });

  it("notifies subscribers on change and stops after unsubscribe", () => {
    const tab = storedValue("prof", "lw", isOneOf(["lw", "cook"]));
    const listener = vi.fn();
    const unsubscribe = tab.subscribe(listener);
    tab.set("cook");
    unsubscribe();
    tab.set("lw");
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it("serves the fallback on the server", () => {
    const level = storedValue("level", 10, isNumber);
    level.set(30);
    expect(level.getServer()).toBe(10);
  });
});
