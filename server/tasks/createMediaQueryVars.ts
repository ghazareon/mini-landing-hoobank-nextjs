/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import fs from "node:fs/promises";
import prettier from "prettier";

import { layoutGrid } from "@/src/shared/config/const";
import { toRem } from "@/src/shared/utils";
import { mediaQueryPaths } from "@/src/shared/config/const/paths";

import type { s } from "@/src/shared/types";

export const createMediaQueryVars = (data: typeof layoutGrid) =>
 JSON.stringify(
  Object.keys(data).reduce(
   (acc, curr) => ({
    ...acc,
    [`$${curr}`]: toRem(data[curr as keyof typeof data]["breakPoint"], true)
   }),
   {}
  )
 )
  .replace(/[{}'"]/g, "")
  .replaceAll(",", ";");

const writeToFile = async (result: s, pathToFile: s) => {
 fs.writeFile(pathToFile, await prettier.format(result, { parser: "scss" }));
};

writeToFile(createMediaQueryVars(layoutGrid), mediaQueryPaths.outFile);
