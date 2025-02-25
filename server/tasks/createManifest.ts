/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import fs from "node:fs/promises";
import prettier from "prettier";

import manifestDb from "@/src/shared/data/manifestDb.json";
import appDb from "@/src/shared/data/appDb.json";
import { manifestPaths } from "@/src/shared/config/const/paths";
import { getWhfromStr } from "@/src/shared/utils";

import type { s, IObj } from "@/src/shared/types";

export const createManifest = (
 manifestData: IObj<s | s[]>,
 appData: IObj<s>,
 paths: IObj<s>,
 func = getWhfromStr
) => {
 const {
  name,
  short_name,
  display,
  description,
  categories,
  lang,
  orientation,
  scope,
  direction: dir
 } = manifestData;

 const { appThemeColor: background_color, appThemeColor: theme_color } = appData;

 return JSON.stringify({
  name,
  short_name,
  display,
  description,
  categories,
  lang,
  orientation,
  scope,
  dir,
  background_color,
  theme_color,

  icons: Array.isArray(manifestData.picFiles)
   ? manifestData.picFiles.map((fileName: s) => ({
      src: `${paths.picDir}/${fileName}`,
      size: (() => func(fileName))(),
      type: "image/png"
     }))
   : null
 });
};

const writeToFile = async (result: s, pathToFile: s) => {
 fs.writeFile(pathToFile, await prettier.format(result, { parser: "json" }));
};

writeToFile(createManifest(manifestDb, appDb, manifestPaths), manifestPaths.outFile);
