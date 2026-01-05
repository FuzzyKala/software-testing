import { divide } from "../src/calculator.js";

describe("divide function", () => {
  // Positive test: valid division
  test("should return correct result for valid division", () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(9, 3)).toBe(3);
    expect(divide(-10, 2)).toBe(-5);
    expect(divide(7, 2)).toBe(3.5);
  });

  // Negative test 1: first argument is not a number
  test("should throw TypeError when first argument is not a number", () => {
    expect(() => divide("10", 2)).toThrow(TypeError);
    expect(() => divide("10", 2)).toThrow("Both arguments must be numbers");
  });

  // Negative test 2: second argument is not a number
  test("should throw TypeError when second argument is not a number", () => {
    expect(() => divide(10, "2")).toThrow(TypeError);
    expect(() => divide(10, "2")).toThrow("Both arguments must be numbers");
  });

  // Negative test 3: NaN as argument
  test("should throw TypeError when argument is NaN", () => {
    expect(() => divide(NaN, 2)).toThrow(TypeError);
    expect(() => divide(2, NaN)).toThrow(TypeError);
    expect(() => divide(NaN, 2)).toThrow("Arguments cannot be NaN");
  });

  // Negative test 4: division by zero
  test("should throw RangeError when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow(RangeError);
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
  });
});
