/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import type { s, IObj, n, b } from "@/src/shared/types";

/* prettier-ignore */
export interface IPost {

	guid:                   IObj<s>;
 title:                  IObj<s>;
 content:                IObj<s | b>;
 excerpt:                IObj<s | b>;
 meta:                   IObj<s>;
	acf:                    IObj<s>;
 id:                     n;
	author:                 n;
 featured_media:         n;
	date:                   s;
 date_gmt:               s;
 modified:               s;
 modified_gmt:           s;
 slug:                   s;
 status:                 s;
 type:                   s;
 link:                   s;
 comment_status:         s;
 ping_status:            s;
 template:               s;
 format:                 s;
 sticky:                 b;
 categories:             n[];
 tags:                   any[];
 class_list:             s[];
 featured_media_src_url: s;
 _links:                 Links;
}

/* prettier-ignore */
interface Links {
 self:                  {
																									href: s;
																									targetHints: IObj<s[]>;
																								}[];
 collection:            IObj<s>[];
 about:                 IObj<s>[];
 author:                IObj<b | s>[];
 replies:               IObj<b | s>[];
 "version-history":     IObj<n | s>[];
 "predecessor-version": IObj<n | s>[];
 "wp:featuredmedia":    IObj<b | s>[];
 "wp:attachment":       IObj<s>[];
 "wp:term":             IObj<b | s>[];
 curies:                IObj<b | s>[];
}
