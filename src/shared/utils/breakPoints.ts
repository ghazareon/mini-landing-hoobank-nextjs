/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import { toRem } from "./toRem";
import type { s, n, IObj, IObjNest } from "../types";

export const breakPoints = (data: IObjNest<n>, propName: s = "breakPoint") =>
 Object.keys(data).reduce(
  (acc: IObj<s>, curr: s) => ({
   ...acc,
   [curr]: toRem(data[curr as keyof typeof data][propName], true)
  }),
  {}
 );
