/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import { remSizes } from "../config/const";
import { addStr } from "./addStr";

import type { n } from "../types";

export const toRem = (val: n, isMedia = false) =>
 addStr(val / (!isMedia ? remSizes.current : remSizes.defaultBrowser));
