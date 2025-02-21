/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import type { s, n, IObj } from "../types";

export const addPrefixToKey = (data: IObj<n>, prefix: s) =>
 Object.keys(data).reduce(
  (acc, curr) => ({
   ...acc,
   [`${prefix}-${curr}`]: data[curr]
  }),
  {}
 );
