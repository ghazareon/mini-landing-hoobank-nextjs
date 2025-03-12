import type { s } from "../types";

export const removeHtmlTagsFromStr = (str: s) => {
 const regex = /(<([^>]+)>)/gi;
 return str.replace(regex, "");
};
