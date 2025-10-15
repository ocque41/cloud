import { legalMeta } from "./data";
import { supportedLocales } from "./schema";
import type { SupportedLocale } from "./schema";

export const spanishPreferredCountryCodes = [
  "AR",
  "BO",
  "BR",
  "CL",
  "CO",
  "CR",
  "CU",
  "DO",
  "EC",
  "ES",
  "GT",
  "HN",
  "HT",
  "MX",
  "NI",
  "PA",
  "PE",
  "PR",
  "PY",
  "SV",
  "UY",
  "VE",
] as const;

const spanishPreferredCountrySet = new Set(spanishPreferredCountryCodes);

const hasSpanish = supportedLocales.includes("es");
const hasEnglish = supportedLocales.includes("en");

export function resolveLocaleForCountry(countryCode: string | null | undefined): SupportedLocale {
  const fallbackLocale = legalMeta.legal.defaultLanguage;

  if (!countryCode) {
    return fallbackLocale;
  }

  const normalizedCountry = countryCode.trim().toUpperCase();

  if (!normalizedCountry) {
    return fallbackLocale;
  }

  if (spanishPreferredCountrySet.has(normalizedCountry) && hasSpanish) {
    return "es";
  }

  if (hasEnglish) {
    return "en";
  }

  return fallbackLocale;
}
