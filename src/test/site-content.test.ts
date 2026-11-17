import { describe, expect, it } from "vitest";

import { products } from "@/lib/site-content";

describe("ORXU product links", () => {
  it("keeps BOWIS without a public website link", () => {
    const bowis = products.find((product) => product.id === "bowis");

    expect(bowis?.url).toBeNull();
  });
});