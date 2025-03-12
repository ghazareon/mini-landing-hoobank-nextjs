/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import type { s, IObj, n, b } from "@/src/shared/types";

/* prettier-ignore */
export interface ICat700 {

 description:    s;
 link:           s;
 name:           s;
 slug:           s;
 taxonomy:       s;

 id:             n;
 count:          n;
	parent:         n;
 meta:           any[];
 acf:            IObj<s>;
 _links:         Links;
}

/* prettier-ignore */
interface Links {
 self: {
  href:          s;
  targetHints:   IObj<s[]>;
 }[];
 collection:     IObj<s>;
 about:          IObj<s>[];
 "wp:post_type": IObj<s>[];
 curies:         IObj<s | b>[];
}
