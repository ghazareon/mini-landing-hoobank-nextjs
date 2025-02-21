/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import type { s } from "../types";

export const removeSubStr = (str: s, subStr: s[]) =>
 subStr.reduce((acc, curr) => acc.replace(new RegExp(curr, "gi"), ""), str);
