/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import fs from "node:fs/promises";
import prettier from "prettier";

import { layoutGrid } from "@/src/shared/config/const";
import { valPropsByAdaptive, addPrefixToKey } from "@/src/shared/utils";
import { sidesPaths, fixGenerate } from "@/src/shared/config/const/paths";

import type { s, n } from "@/src/shared/types";

export const createTwSides = (data: typeof layoutGrid) => {
 let fileContnet = "";
 const utilityList = ["px", "pl", "pr", "mx", "ml", "mr"];
 const preffix = "sides";

 const sidesList = Object.keys(
  addPrefixToKey(valPropsByAdaptive(data, preffix), preffix)
 );
 const listSizes = Object.keys(data);

 utilityList.forEach((it) => {
  const sidesGroup = listSizes.reduce(
   (acc: s[], curr: s, i: n) => [...acc, `@apply ${curr}:${it}-${sidesList[i + 1]}`],
   []
  );

  fileContnet += `.${it} {
			@apply ${it}-${preffix}-${listSizes[0]};
			${String(sidesGroup.slice(0, sidesGroup.length - 1)).replaceAll(",", ";")}
		}\n`;
 });

 return fileContnet;
};

const writeToFile = async (result: s, pathToFile: s) => {
 fs.writeFile(pathToFile, await prettier.format(result, { parser: "scss" }));
};

const writeToFileFixSelector = async (result: s, pathToFile: s) => {
 fs.writeFile(pathToFile, await prettier.format(result, { parser: "scss" }));
};

writeToFile(createTwSides(layoutGrid), sidesPaths.outFile);

writeToFileFixSelector(
 `.fix-generate { @apply px max-w-${Object.keys(layoutGrid)[0]}}`,
 fixGenerate.outFile
);
