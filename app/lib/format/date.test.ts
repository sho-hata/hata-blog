import { describe, expect, test } from "vitest";
import { formatDate } from "./date";

describe("formatDate", () => {
  test("yyyy-mm-dd", () => {
    const result = "2021-01-01";
    expect(formatDate(result)).toBe("2021/01/01");
  });
  test("invalid date", () => {
    const result = "invalid";
    expect(formatDate(result)).toBe("Invalid Date");
  });
});
