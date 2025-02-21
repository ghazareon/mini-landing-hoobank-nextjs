/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import { toRem } from "./toRem";
import type { s, n, b, IObjNest, f2o1 } from "@/src/shared/types";

/**
 * Description placeholder
 *
 * @param {IObjNest<n>} data
 * @param {s} propName
 * @param {b} [isRun=true]
 * @param {b} [isMedia=true]
 * @param {f2o1<n, b, s>} [convertFunc=toRem]
 * @returns {*}
 */
export const valPropsByAdaptive = (
 data: IObjNest<n>,
 propName: s,
 isRun: b = true,
 isMedia: b = true,
 convertFunc: f2o1<n, b, s> = toRem
) =>
 Object.keys(data).reduce(
  (acc, curr) => ({
   ...acc,
   [curr]: isRun
    ? convertFunc(data[curr][propName], (isMedia = isMedia))
    : data[curr][propName]
  }),
  {}
 );
