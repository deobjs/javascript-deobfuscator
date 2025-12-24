import { describe, expect, test } from "bun:test";
import { deobfuscate } from "../src";
import * as fs from "node:fs";
import * as path from "node:path";

function loadFixture(name: string): string {
  return fs.readFileSync(path.join(import.meta.dir, "fixtures", name, "input.js"), "utf-8");
}

describe("deobfuscate", () => {
  test("example", () => {
    const input = loadFixture("example");
    const result = deobfuscate(input);
    expect(result).toMatchSnapshot();
  });

  test("jsfuck-123", () => {
    const input = loadFixture("jsfuck-123");
    const result = deobfuscate(input);
    expect(result).toMatchSnapshot();
  });
});
