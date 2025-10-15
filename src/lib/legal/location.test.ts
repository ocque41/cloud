import { describe, expect, it } from "vitest";

import { legalMeta } from "./data";
import { resolveLocaleForCountry, spanishPreferredCountryCodes } from "./location";

const defaultLocale = legalMeta.legal.defaultLanguage;

describe("resolveLocaleForCountry", () => {
  it("returns the default locale when no country is provided", () => {
    expect(resolveLocaleForCountry(null)).toBe(defaultLocale);
    expect(resolveLocaleForCountry(undefined)).toBe(defaultLocale);
    expect(resolveLocaleForCountry("   ")).toBe(defaultLocale);
  });

  it("routes Spanish-preferred countries to the Spanish locale", () => {
    for (const countryCode of spanishPreferredCountryCodes) {
      expect(resolveLocaleForCountry(countryCode)).toBe("es");
      expect(resolveLocaleForCountry(countryCode.toLowerCase())).toBe("es");
    }
  });

  it("routes all other countries to English when available", () => {
    expect(resolveLocaleForCountry("US")).toBe("en");
    expect(resolveLocaleForCountry("de")).toBe("en");
  });
});
