/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import { layoutGrid } from "../../config/const";
import { valPropsByAdaptive } from "../../utils";

export const width = Object.assign(
 valPropsByAdaptive(layoutGrid, "width", true, false),
 {
  "50p": "50%",
  "60p": "60%",
  "70p": "70%",
  "80p": "80%",
  "90p": "90%",
  "100p": "100%"
 }
);
