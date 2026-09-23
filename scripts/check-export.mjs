import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

const html = readFileSync("out/index.html", "utf8");
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
const anchors = [...html.matchAll(/href="#([^"]+)"/g)].map(match => match[1]);
for (const target of anchors) assert(ids.has(target), `Missing anchor: ${target}`);
assert.equal([...html.matchAll(/<h1\b/g)].length, 1, "Expected exactly one h1");
assert(!html.includes("<canvas"), "The redesign must not depend on WebGL");
for (const match of html.matchAll(/<img\b[^>]*>/g)) {
  assert(/\balt="[^"]+"/.test(match[0]), "Missing descriptive image alt");
  const source = match[0].match(/\bsrc="([^"]+)"/)?.[1];
  if (source?.startsWith("/")) assert(existsSync(path.join("out", source)), `Missing image: ${source}`);
}
for (const url of [
  "https://github.com/joao-juvino/piicheck",
  "https://github.com/joao-juvino/juvinostore",
  "https://joao-juvino.github.io/FlappyBataman/",
  "https://joao-juvino.github.io/Portifolio/",
  "https://joao-juvino.github.io/SPA_Portifolio/",
  "https://blognodejs-a41d.onrender.com/",
  "mailto:joao.pedro.santos@ccc.ufcg.edu.br",
  "https://www.linkedin.com/in/joao-juvino",
]) assert(html.includes(url), `Existing link lost: ${url}`);
const css = readFileSync("app/globals.css", "utf8");
assert(css.includes("prefers-reduced-motion: reduce"), "Missing reduced motion styles");
assert(readFileSync("app/components/Reveal.tsx", "utf8").includes("useReducedMotion"));
console.log(`Static export checks passed: ${anchors.length} anchors, assets, alt text, preserved links and reduced-motion guards.`);
