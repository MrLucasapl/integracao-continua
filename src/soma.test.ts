import { describe, expect, test } from "@jest/globals";
import { divide, multiplica, resto, soma, subtrai } from "./soma";

describe("Modulo de soma", () => {
  test("soma 1 + 2 igual a 3", () => {
    expect(soma(1,2)).toBe(3);
  });

  test("soma 1 - 2 igual a -1", () => {
    expect(subtrai(1,2)).toBe(-1);
  });

  test("soma 10 / 2 igual a 5", () => {
    expect(divide(10,2)).toBe(5);
  });

  test("soma 10 * 2 igual a 20", () => {
    expect(multiplica(10,2)).toBe(20);
  });

  test("soma 10 % 2 igual a 0", () => {
    expect(resto(10,2)).toBe(0);
  });
});