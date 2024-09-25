import { describe, expect, test } from "@jest/globals";
import { soma } from "./soma";

describe("Modulo de soma", () => {
  test("soma 1 + 2 igual a 3", () => {
    expect(soma(1,2)).toBe(3);
  });
});
