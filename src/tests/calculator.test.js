const {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  exponentiate,
  sqrt,
} = require("../calculator");

describe("add", () => {
  test("adds two positive numbers", () => expect(add(2, 3)).toBe(5));
  test("adds positive and negative number", () => expect(add(5, -3)).toBe(2));
  test("adds two negative numbers", () => expect(add(-4, -6)).toBe(-10));
  test("adds zero", () => expect(add(0, 5)).toBe(5));
  test("adds decimals", () => expect(add(1.5, 2.5)).toBe(4));
  test("adds large numbers", () => expect(add(1000000, 2000000)).toBe(3000000));
});

describe("subtract", () => {
  test("subtracts two positive numbers", () =>
    expect(subtract(10, 4)).toBe(6));
  test("subtracts resulting in negative", () =>
    expect(subtract(3, 7)).toBe(-4));
  test("subtracts negative number", () => expect(subtract(5, -3)).toBe(8));
  test("subtracts zero", () => expect(subtract(5, 0)).toBe(5));
  test("subtracts same numbers", () => expect(subtract(5, 5)).toBe(0));
  test("subtracts decimals", () => expect(subtract(3.5, 1.5)).toBe(2));
});

describe("multiply", () => {
  test("multiplies two positive numbers", () =>
    expect(multiply(45, 2)).toBe(90));
  test("multiplies by zero", () => expect(multiply(5, 0)).toBe(0));
  test("multiplies two negative numbers", () =>
    expect(multiply(-3, -4)).toBe(12));
  test("multiplies positive and negative", () =>
    expect(multiply(5, -3)).toBe(-15));
  test("multiplies decimals", () => expect(multiply(2.5, 4)).toBe(10));
  test("multiplies by one", () => expect(multiply(7, 1)).toBe(7));
});

describe("divide", () => {
  test("divides two positive numbers", () => expect(divide(20, 5)).toBe(4));
  test("divides resulting in decimal", () => expect(divide(10, 3)).toBeCloseTo(3.333));
  test("divides negative by positive", () => expect(divide(-15, 3)).toBe(-5));
  test("divides zero by number", () => expect(divide(0, 5)).toBe(0));
  test("returns error for division by zero", () =>
    expect(divide(5, 0)).toBe("Error: Division by zero is not allowed."));
  test("divides decimals", () => expect(divide(7.5, 2.5)).toBe(3));
  test("divides large numbers", () =>
    expect(divide(1000000, 1000)).toBe(1000));
});

describe("modulo", () => {
  test("returns remainder of positive numbers", () =>
    expect(modulo(10, 3)).toBe(1));
  test("returns 0 when evenly divisible", () =>
    expect(modulo(10, 5)).toBe(0));
  test("handles negative dividend", () =>
    expect(modulo(-10, 3)).toBe(-1));
  test("returns error for modulo by zero", () =>
    expect(modulo(5, 0)).toBe("Error: Modulo by zero is not allowed."));
  test("handles large numbers", () =>
    expect(modulo(1000000, 7)).toBe(1000000 % 7));
  test("handles decimals", () =>
    expect(modulo(10.5, 3)).toBeCloseTo(1.5));
});

describe("exponentiate", () => {
  test("raises to a positive power", () =>
    expect(exponentiate(2, 10)).toBe(1024));
  test("raises to power of zero", () =>
    expect(exponentiate(5, 0)).toBe(1));
  test("raises to power of one", () =>
    expect(exponentiate(7, 1)).toBe(7));
  test("handles negative exponent", () =>
    expect(exponentiate(2, -1)).toBe(0.5));
  test("raises zero to a power", () =>
    expect(exponentiate(0, 5)).toBe(0));
  test("handles fractional exponent (square root)", () =>
    expect(exponentiate(9, 0.5)).toBeCloseTo(3));
  test("raises negative base to odd power", () =>
    expect(exponentiate(-2, 3)).toBe(-8));
});

describe("sqrt", () => {
  test("returns square root of positive number", () =>
    expect(sqrt(9)).toBe(3));
  test("returns square root of zero", () =>
    expect(sqrt(0)).toBe(0));
  test("returns decimal square root", () =>
    expect(sqrt(2)).toBeCloseTo(1.414));
  test("returns error for negative number", () =>
    expect(sqrt(-1)).toBe(
      "Error: Square root of a negative number is not allowed."
    ));
  test("handles large number", () =>
    expect(sqrt(1000000)).toBe(1000));
  test("handles non-perfect square", () =>
    expect(sqrt(2)).toBeCloseTo(Math.sqrt(2)));
});
