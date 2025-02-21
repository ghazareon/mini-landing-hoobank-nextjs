/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import fs from "node:fs/promises";
import prettier from "prettier";

import { svgPaths } from "@/src/shared/config/const";

const svgDirName = "icons";
// const svgDirName = "icons-brand";
// const svgDirName = "shapes";
const svgDirPath = `./${svgPaths.inDir}/${svgDirName}`;
const spriteFile = `./${svgPaths.inDir}/${svgDirName}/sprite-${svgDirName}.svg`;

const svgSpriteOpen = `<svg display="none"
																												aria-hidden="true"
																												role="presentation"
																												style="position: absolute; width: 0; height: 0; overflow: hidden"
																												version="1.1"
																												xmlns="http://www.w3.org/2000/svg"
																												xmlns:xlink="http://www.w3.org/1999/xlink">`;

const svgSpriteClose = `</svg>`;
let svgSpriteBody = "";

async function svgSprite() {
 const files = await fs.readdir(svgDirPath);
 const svgFiles = files.filter((it) => it.endsWith("svg"));
 const svgContents = await Promise.all(
  svgFiles.map((file) => fs.readFile(`${svgDirPath}/${file}`, "utf-8"))
 );
 let svgUse = "";

 const svgTwStart = `.${svgDirName} {`;
 let svgTwBody = ``;
 const svgTwEnd = `}`;

 const svgItemSizes = svgContents.map((it) =>
  it
   .match(/viewBox="(.*?)"/)![0]
   .replaceAll('"', "")
   .replaceAll("viewBox=", "")
   .replaceAll("0 0 ", "")
   .split(" ")
 );

 svgFiles.forEach((it, i) => {
  let itPure = it.replace(".svg", "");
  const w = svgItemSizes[i][0];
  const h = svgItemSizes[i][1];
  svgUse += `<svg role="presentation" class="${svgDirName} ${svgDirName}--${itPure}" width="${w}" height="${h}"><use xlink:href="<%=svgSprite %>#${itPure}"></use></svg>\n\n`;
  svgTwBody += `&--${itPure}{@apply aspect-[${w}/${h}] w-[${+w / 10}rem] h-auto;}\n\n`;
 });

 let formatingSvgTw = await prettier.format(`${svgTwStart} ${svgTwBody} ${svgTwEnd}`, {
  parser: "scss"
 });

 fs.writeFile(`${svgPaths.styleOutDir}/sprite-${svgDirName}.scss`, formatingSvgTw);

 let formatingUseSvg = await prettier.format(svgUse, {
  parser: "html"
 });

 fs.writeFile(`${svgPaths.outDir}/use-sprite-${svgDirName}.html`, formatingUseSvg);

 svgSpriteBody = svgContents
  .map((it, i) =>
   it
    .replaceAll("svg", "symbol")
    .replaceAll(`xmlns="http://www.w3.org/2000/symbol"`, "")
    .replaceAll(`  `, " ")
    .replaceAll(
     `<symbol`,
     `<symbol fill="currentColor" id="${svgFiles[i].replaceAll(".svg", "")}"`
    )
  )
  .join("");

 const fileContnet = `${svgSpriteOpen}${svgSpriteBody}${svgSpriteClose}`;

 let formating = await prettier.format(fileContnet, {
  parser: "html"
 });

 fs.writeFile(`${svgPaths.outDir}/sprite-${svgDirName}.svg`, formating);
}

svgSprite();
