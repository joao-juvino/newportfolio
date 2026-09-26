import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

const html = readFileSync("out/index.html", "utf8");
const ids = new Set(
  [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]),
);
const anchors = [...html.matchAll(/href="#([^"]+)"/g)].map((match) => match[1]);
for (const target of anchors)
  assert(ids.has(target), `Missing anchor: ${target}`);
assert.equal([...html.matchAll(/<h1\b/g)].length, 1, "Expected exactly one h1");
assert(!html.includes("<canvas"), "The redesign must not depend on WebGL");
for (const match of html.matchAll(/<img\b[^>]*>/g)) {
  assert(/\balt="[^"]+"/.test(match[0]), "Missing descriptive image alt");
  const source = match[0].match(/\bsrc="([^"]+)"/)?.[1];
  if (source?.startsWith("/"))
    assert(existsSync(path.join("out", source)), `Missing image: ${source}`);
}
for (const url of [
  "https://github.com/joao-juvino/piicheck",
  "https://github.com/joao-juvino/ObraSync",
  "https://github.com/joao-juvino/companages",
  "https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=joao.santoss75180@gmail.com",
  "https://www.linkedin.com/in/joao-juvino",
])
  assert(html.includes(url), `Existing link lost: ${url}`);
assert(
  existsSync("out/curriculo-joao-santos.pdf"),
  "Missing original resume PDF",
);
assert(existsSync("out/.nojekyll"), "Missing GitHub Pages marker");
assert.equal(
  [...html.matchAll(/class="[^"]*project-card/g)].length,
  3,
  "Expected exactly three project cards",
);
assert(html.includes("ObraSync") && html.indexOf("ObraSync") < html.indexOf("Companages") && html.indexOf("Companages") < html.indexOf("PiiCheck"), "Incorrect project order");
assert(html.includes("/media/rebeca-luana-lopes.jpeg"));
assert(html.includes("/media/jamiris-santos.jpeg"));
assert.equal(
  [...html.matchAll(/<details/g)].length,
  2,
  "Expected two complete testimonials",
);
for (const id of [
  "inicio",
  "projetos",
  "experiencia",
  "competencias",
  "sobre",
  "contato",
])
  assert(ids.has(id));
const css = readFileSync("app/globals.css", "utf8");
assert(
  css.includes("prefers-reduced-motion: reduce"),
  "Missing reduced motion styles",
);
assert(
  readFileSync("app/components/Reveal.tsx", "utf8").includes(
    "useReducedMotion",
  ),
);
console.log(
  `Static export checks passed: ${anchors.length} anchors, assets, alt text, preserved links and reduced-motion guards.`,
);
