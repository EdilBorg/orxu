import { describe, expect, it } from "vitest";

import { contactSchema } from "@/lib/contact-schema";

describe("contact form validation", () => {
  it("accepts an inquiry addressed with the official ORXU email", () => {
    const result = contactSchema.safeParse({
      name: "Ana Silva",
      email: "ana@example.com",
      category: "Website",
      message: "Pretendo conversar sobre um website para a minha organização.",
    });

    expect(result.success).toBe(true);
  });

  it("rejects an invalid email before preparing the contact email", () => {
    const result = contactSchema.safeParse({
      name: "Ana Silva",
      email: "endereco-invalido",
      category: "Website",
      message: "Pretendo conversar sobre um website para a minha organização.",
    });

    expect(result.success).toBe(false);
  });

  it("rejects messages that are too short to explain an inquiry", () => {
    const result = contactSchema.safeParse({
      name: "Ana Silva",
      email: "ana@example.com",
      category: "Website",
      message: "Olá",
    });

    expect(result.success).toBe(false);
  });
});