import { LinkChecker } from "linkinator";

const base = process.env.LEGAL_LINK_BASE ?? "http://127.0.0.1:3000";
const routes = [
  `${base}/es/privacy-policy`,
  `${base}/en/privacy-policy`,
  `${base}/es/terms-of-service`,
  `${base}/en/terms-of-service`,
];

async function checkRoute(url) {
  const checker = new LinkChecker({
    concurrency: 6,
    retry: true,
    timeout: 15000,
  });

  const result = await checker.check({ path: url });
  const broken = result.links.filter((link) => link.state === "BROKEN");

  if (broken.length > 0) {
    console.error(`Broken links detected on ${url}:`);
    for (const issue of broken) {
      console.error(` - ${issue.url} (${issue.status})`);
    }
    throw new Error(`Broken links found on ${url}`);
  }

  console.log(`✔ Links healthy on ${url}`);
}

async function main() {
  for (const route of routes) {
    await checkRoute(route);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
