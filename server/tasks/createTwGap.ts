/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import fs from "node:fs/promises";
import prettier from "prettier";

import { layoutGrid } from "@/src/shared/config/const";
import { valPropsByAdaptive, addPrefixToKey } from "@/src/shared/utils";
import { gapPaths } from "@/src/shared/config/const/paths";

import type { s, n } from "@/src/shared/types";

export const createTwGap = (data: typeof layoutGrid) => {
 let fileContnet = "";
 const utilityList = ["gap", "gap-x", "gap-y"];
 const preffix = "gutters";
 const gapList = Object.keys(
  addPrefixToKey(valPropsByAdaptive(data, "gutters"), preffix)
 );
 const listSizes = Object.keys(data);

 utilityList.forEach((it) => {
  const gapGroup = listSizes.reduce(
   (acc: s[], curr: s, i: n) => [...acc, `@apply ${curr}:${it}-${gapList[i + 1]}`],
   []
  );

  fileContnet += `.${it} {
		@apply ${it}-${preffix}-${listSizes[0]};
		${String(gapGroup.slice(0, gapGroup.length - 1)).replaceAll(",", ";")}
	}\n`;
 });

 return fileContnet;
};

const writeToFile = async (result: s, pathToFile: s) => {
 fs.writeFile(pathToFile, await prettier.format(result, { parser: "scss" }));
};

writeToFile(createTwGap(layoutGrid), gapPaths.outFile);
