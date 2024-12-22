import { describe, it, expect } from "vitest";
import { hello } from "./index.ts";
describe("index", () => {
  it("should return hello", () => {
    expect(hello()).toBe("Hello, world!");
  });
});
