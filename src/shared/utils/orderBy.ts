/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import type { s, n, IObj } from "../types";

export const orderBy = (arr: s[], pattern: { id: n; size: s }[] | any) =>
 arr.sort((a, b) => {
  const orderA = pattern.find((item: IObj<s>) => item.size === a).id;
  const orderB = pattern.find((item: IObj<s>) => item.size === b).id;
  return orderA - orderB;
 });
