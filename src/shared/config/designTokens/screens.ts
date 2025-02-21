/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import { layoutGridBase } from "../const/layoutGrid";
import { toRem } from "../../utils";

import type { IObjNest, s } from "../../types";

export const screens = Object.keys(layoutGridBase).reduce(
 (acc: IObjNest<s>, curr: s) => ({
  ...acc,
  [curr]: {
   max: toRem(layoutGridBase[curr as keyof typeof layoutGridBase].width, true)
  }
 }),
 {}
);
