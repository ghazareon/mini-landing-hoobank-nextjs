/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import { removeSubStr } from "./removeSubStr.ts";
import type { s, IObj } from "../types";

export const removeSubStrObj = (
 data: IObj<s>,
 removeSubStrArr: s[] = ["/", "<alpha-value>"]
) =>
 Object.keys(data).reduce(
  (accum: IObj<s>, curr) => ({
   ...accum,
   [curr]: removeSubStr(data[curr], removeSubStrArr)
  }),
  {}
 );
