/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import { layoutGrid } from "../../config/const";
import { valPropsByAdaptive, addPrefixToKey } from "../../utils";

/* prettier-ignore */
export const spacing = Object.assign(
	addPrefixToKey(valPropsByAdaptive(layoutGrid, "width", true, false), "w"),
	addPrefixToKey(valPropsByAdaptive(layoutGrid, "widthPure", true, false), "w-pure"),
	addPrefixToKey(valPropsByAdaptive(layoutGrid, "gutters", true, false), "gutters"),
	addPrefixToKey(valPropsByAdaptive(layoutGrid, "sides", true, false), "sides"),
 {
  "m9":    "-0.9rem",
  "87_3":  "8.733rem",
  "55p":   "55%",
  "m55p":  "-55%",
  "m52p":  "-52%"
 }
);
