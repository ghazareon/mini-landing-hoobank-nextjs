/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import { layoutGrid } from "../../config/const";
import { valPropsByAdaptive } from "../../utils";

export const maxWidth = Object.assign(
 valPropsByAdaptive(layoutGrid, "width", true, false),
 {
  "200": "20rem",
  "296": "29.6rem",
  "300": "30rem",
  "320": "32rem",
  "340": "34rem",
  "600": "60rem",
  "630": "63rem",
  "733": "73.3rem"
 }
);
