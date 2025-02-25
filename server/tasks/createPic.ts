/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import { readFile } from "node:fs";
import sharp from "sharp";

import { picPaths } from "@/src/shared/config/const/paths";
import { picData } from "@/src/shared/data/picData";

import type { s } from "@/src/shared/types";

export const createPic = (data: typeof picData, fromDir: s, toDir: s) => {
 let index = 0;
 for (const key in data) {
  index++;
  data[key as keyof typeof data].forEach(({ name, size: { width, height } }) => {
   readFile(`./${fromDir}/${index}.png`, function (e, data) {
    sharp(data)
     .png({ compressionLevel: 5 })
     .resize({
      width,
      height
     })
     .toFile(`./${toDir}/${name}`);
   });
  });
 }
};

createPic(picData, picPaths.inDir, picPaths.outDir);
