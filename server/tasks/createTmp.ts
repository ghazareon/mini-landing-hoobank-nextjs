/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import fs from "node:fs/promises";
import prettier from "prettier";

import sizeOf from "image-size";
import { tmpPaths } from "@/src/shared/config/const/paths";
import { removeDouble } from "@/src/shared/utils";
import { layoutGrid } from "@/src/shared/config/const";

fs
 .readdir(tmpPaths.inDir)
 .then((names) => {
  let fileContent = "";
  const resolutionsInFiles = removeDouble(
   names.map((it) => it.split("-")[1].split(".")[0])
  );
  const resolutionsInGrid = Object.keys(layoutGrid);
  const resolutionResult = resolutionsInGrid.filter((it, i) =>
   resolutionsInFiles.includes(it)
  );

  const sectionsQuan = removeDouble(names.map((it) => it.split("-")[0]))
   .map((it) => +it)
   .sort((a, b) => {
    return a - b;
   });

  sectionsQuan.forEach((sectionNumber) => {
   resolutionResult.forEach((resolution, resolutionIndex) => {
    fileContent = `${fileContent}.s${sectionNumber} {
			${
    resolutionIndex === 0
     ? `
					background: url(../../img/tmp/sections/${sectionNumber}-${resolution}.png) no-repeat center top;
					min-height: ${sizeOf(`${tmpPaths.inDir}/${sectionNumber}-${resolution}.png`).height}px;\n;
					`
     : `
					@media (max-width: $${resolutionResult[resolutionIndex - 1]}) {
							background: url(../../img/tmp/sections/${sectionNumber}-${resolution}.png) no-repeat center top;
							min-height: ${sizeOf(`${tmpPaths.inDir}/${sectionNumber}-${resolution}.png`).height}px;\n;
					}
					`
   }
			}\n\n`;
   });
  });

  return fileContent;
 })
 .then(async (result) => {
  fs.writeFile(tmpPaths.outFile, await prettier.format(`${result}`, { parser: "scss" }));
 });
