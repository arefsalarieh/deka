import { describe, it, expect } from "vitest";

import { authValidationSchema } from "../auth.validation";

describe("authValidationSchema", () => {
  it("should validate correct Iran phone numbers", () => {
    const validPhoneNumbers = [
      "+989123456789",
      "00989123456789",
      "09123456789",
      "09312345678",
    ];

    validPhoneNumbers.forEach((phoneNumber) => {
      const result = authValidationSchema.safeParse({ phoneNumber });
      expect(result.success).toBe(true);
    });
  });

  it("should reject invalid phone numbers", () => {
    const invalidPhoneNumbers = [
      "1234567890",
      "+989423456789",
      "0912345678",
      "091234567890",
      "abc",
      "+98123456789",
    ];

    invalidPhoneNumbers.forEach((phoneNumber) => {
      const result = authValidationSchema.safeParse({ phoneNumber });
      expect(result.success).toBe(false);
    });
  });

  it("should return error message for invalid phone number", () => {
    const result = authValidationSchema.safeParse({
      phoneNumber: "1234567890",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe("Invalid");
    }
  });
});
