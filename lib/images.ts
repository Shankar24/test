import fs from "node:fs";
import path from "node:path";

const IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".avif",
  ".svg",
]);

// next/image with `unoptimized` uses the src as-is, so the GitHub Pages base
// path must be baked into the URLs here (it matches basePath in next.config).
const BASE_PATH = process.env.GITHUB_PAGES === "true" ? "/test" : "";

/**
 * Enumerates images in a folder under public/assets at build time.
 * The site is statically exported, so adding/removing files in these folders
 * and redeploying is all that's needed to update the galleries.
 */
export function listAssetImages(folder: "gallery" | "research-models"): string[] {
  const dir = path.join(process.cwd(), "public", "assets", folder);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()))
    .sort()
    .map((f) => `${BASE_PATH}/assets/${folder}/${f}`);
}

/** "pls-sem-path-model.svg" -> "Pls Sem Path Model" */
export function titleFromFilename(src: string): string {
  const base = src.split("/").pop() ?? src;
  const stem = base.replace(/\.[^.]+$/, "");
  return stem
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}
