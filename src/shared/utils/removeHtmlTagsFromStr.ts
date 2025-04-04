import type { s, b } from "../types";

export const removeHtmlTagsFromStr = (str: s | b) => {
 const regex = /(<([^>]+)>)/gi;
 return String(str).replace(regex, "");
};
