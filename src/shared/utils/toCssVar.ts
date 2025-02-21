/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import type { s, IObj } from "../types";

export const toCssVar = (data: IObj<s>, key: s) =>
 Object.keys(data).reduce(
  (accum: IObj<s>, curr) => ({
   ...accum,
   [curr]: `var(--${key}-${curr})`
  }),
  {}
 );
