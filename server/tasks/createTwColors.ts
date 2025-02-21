/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import fs from "node:fs/promises";
import prettier from "prettier";
import { hexRgb } from "@/src/shared/utils";
import { twColorPath } from "@/src/shared/config/const/paths";
import { colorsData, additive } from "@/src/shared/data/colorsData";

import type { IObj, s, n } from "@/src/shared/types";

const createTwColors = (data: IObj<{ [k: s]: n | s[] }>) => {
 let concatStr = "";
 Object.keys(data).forEach((colorName) => {
  const start = +data[colorName].start;
  const delta = +data[colorName].delta;
  const list = data[colorName].list;
  let steps = start;

  concatStr = `${concatStr},\n${
   Array.isArray(list)
    ? list.map(
       (hex, i) =>
        `
							/* ${hex} */ "${colorName}-${
        i === 0 ? steps : (steps = steps + delta)
       }": "rgba( ${hexRgb(hex)} / <alpha-value>)"
							`
      )
    : null
  }`;
 });
 return concatStr.replaceAll(",", ",\n").replace(",", "");
};

const writeToFile = async (result: s, additive: s, pathToFile: s) => {
 let formating = await prettier.format(
  `export const colors = {${result}\n,${additive}}`,
  { parser: "typescript" }
 );
 fs.writeFile(pathToFile, formating);
};

writeToFile(createTwColors(colorsData), additive, twColorPath.outFile);
