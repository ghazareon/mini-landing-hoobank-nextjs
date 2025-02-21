/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import type { s, IObjNest } from "../types";

export const postcssMediaQuery = (data: IObjNest<s>) =>
 Object.keys(data).reduce(
  (accum, curr) => ({
   ...accum,
   [curr]: data[curr]["max"] ? data[curr]["max"] : data[curr]
  }),
  {}
 );
