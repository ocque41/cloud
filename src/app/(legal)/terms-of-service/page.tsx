import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { resolveLocaleForCountry } from "@/lib/legal/location";

export const dynamic = "force-dynamic";

export default function TermsOfServiceRedirect() {
  const requestHeaders = headers();
  const country =
    requestHeaders.get("x-vercel-ip-country") ??
    requestHeaders.get("x-vercel-edge-country") ??
    requestHeaders.get("cf-ipcountry");
  const locale = resolveLocaleForCountry(country);

  return redirect(`/${locale}/terms-of-service`);
}
