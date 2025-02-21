/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import type { s } from "../types";

export const getWhfromStr = (str: s, isStr = true) => {
 const requiredStr = str.match(/(\d+x\d+)/)![0];
 let arr = requiredStr?.split("x")!;
 return isStr
  ? requiredStr
  : {
     width: +arr[0],
     height: +arr[1]
    };
};
