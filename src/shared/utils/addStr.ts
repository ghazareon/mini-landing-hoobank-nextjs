/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import { unitNames } from "../config/const";
import type { s, n, b, f3o2 } from "../types";

export const addStr: f3o2<n | s, b, s, s> = (
 val,
 isEnd = true,
 str = unitNames.rem
) => (isEnd ? `${val}${str}` : `${str}${val}`);
