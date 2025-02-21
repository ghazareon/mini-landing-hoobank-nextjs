/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import type { s } from "../types";

export const removeDouble = (arr: s[]) =>
 arr.filter((it, i) => arr.indexOf(it) === i);
