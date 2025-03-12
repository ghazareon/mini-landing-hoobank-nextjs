import type { s, n } from "../types";

export const truncateStr = (str: s, num: n) => {
 if (str.length > num) {
  return str.slice(0, num) + "...";
 } else {
  return str;
 }
};
