import * as assert from "assert";
import { Buffer } from "buffer";
import { byteLength } from "../src";

const INPUTS = ["abc", "😀", "ｆｕｌｌｗｉｄｔｈ　ｃｈａｒａｃｔｅｒｓ", "¡hέlló wôrld!"];

describe("Byte-Length", () => {
  it("should produce equivalent output to Buffer.byteLength", () => {
    for (const input of INPUTS) {
      assert.ok(
        Buffer.byteLength(input) === byteLength(input),
        `Mismatch: ${JSON.stringify(input)}`
      );
    }
  });

  it("should return 0 for nullish values", () => {
    assert.equal(byteLength(undefined as any), 0);
  });
});
