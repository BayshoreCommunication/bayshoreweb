/**
 * Writes the exact build/deploy timestamp into the .next build output so the
 * running server knows its true deploy time.
 *
 * mtime of build artifacts (BUILD_ID, manifests) cannot be trusted — FTP/file
 * copy deployments often preserve ancient mtimes from the source machine.
 *
 * Runs as part of `npm run build` (see package.json): next build && node scripts/write-deploy-date.js
 */
const fs = require("fs");
const path = require("path");

const distDir = process.env.NEXT_DIST_DIR || ".next";
const outDir = path.join(process.cwd(), distDir);

try {
  fs.mkdirSync(outDir, { recursive: true });
  const stamp = { deployedAt: new Date().toISOString() };
  fs.writeFileSync(
    path.join(outDir, "deploy-date.json"),
    JSON.stringify(stamp, null, 2) + "\n"
  );
  console.log(`[deploy-date] written: ${stamp.deployedAt} -> ${distDir}/deploy-date.json`);
} catch (error) {
  console.error("[deploy-date] failed to write deploy stamp:", error);
  process.exitCode = 1;
}
