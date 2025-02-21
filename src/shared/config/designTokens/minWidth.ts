/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import { layoutGrid } from "../../config/const";
import { valPropsByAdaptive } from "../../utils";

export const minWidth = Object.assign(
 valPropsByAdaptive(layoutGrid, "width", true, false),
 {
  "200": "20rem",
  "300": "30rem"
 }
);
