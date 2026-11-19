import { describe, expect, it } from "vitest";
import { formatMoney } from "./money.ts";

describe("formatMoney", () => {
  it("formats copper as gold, silver and copper", () => {
    expect(formatMoney(12005)).toBe("1g 20s 5c");
    expect(formatMoney(500)).toBe("5s");
    expect(formatMoney(0)).toBe("0c");
  });
});
