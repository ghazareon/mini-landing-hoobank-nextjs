/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import { valPropsByAdaptive } from "./valPropsByAdaptive";
import type { s, n, IObjNest } from "../types";

export const maxItem = (data: IObjNest<n>, propName: s = "width") =>
 Math.max(
  ...Object.values(valPropsByAdaptive(data, propName, false)).map((it) =>
   Number(it)
  )
 );
