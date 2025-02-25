/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import fs from "node:fs/promises";
import prettier from "prettier";

import { browserConfigPaths } from "@/src/shared/config/const";
import appDb from "@/src/shared/data/appDb.json";
import browserConfigDb from "@/src/shared/data/browserConfigDb.json";

import type { s } from "@/src/shared/types";

export const createBrowserConfig = (
 browserConfigData: typeof browserConfigDb,
 appData: typeof appDb
) => {
 const { tags } = browserConfigData;
 const { appThemeColor } = appData;
 const { picInDir } = browserConfigPaths;

 return `<?xml version="1.0" encoding="utf-8"?>
 <browserconfig>
  <msapplication>
   <tile>
     ${tags.reduce((acc, { name, fileName }) => acc + `<${name} src="${picInDir}/${fileName}" />`, "")}
    <TileColor>
 				${appThemeColor}
 			</TileColor>
   </tile>
  </msapplication>
 </browserconfig>`;
};

const writeToFile = async (result: s, pathToFile: s) => {
 fs.writeFile(
  pathToFile,
  await prettier.format(`${result}`, {
   parser: "html"
  })
 );
};

writeToFile(createBrowserConfig(browserConfigDb, appDb), browserConfigPaths.outFile);
