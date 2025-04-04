/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import type { ICat, IPost, s, IObj, IObjNest, n } from "@/src/shared/types";

/* prettier-ignore */
const { DB_HOST, DB_PATH,
								DB_ENTITY_CATEGORIES,
								DB_ENTITY_POSTS } = process.env;

export const rootUrl = `${DB_HOST}/${DB_PATH}`;
export const catsUrl = `${DB_HOST}/${DB_PATH}/${DB_ENTITY_CATEGORIES}`;
export const postsUrl = `${DB_HOST}/${DB_PATH}/${DB_ENTITY_POSTS}`;

export const fetchCatBySlug = async (url: s, slug: s, perPage: n = 100) => {
 const data = await (await fetch(`${url}?per_page=${perPage}`)).json();
 return selectCatBySlug(data, slug);
};

export const fetchPostsByCatId = async (
 url: s,
 catId: n,
 extPath: s = "categories",
 perPage: n = 100
) => {
 const fetchPath = `${url}?${extPath}=${catId}&per_page=${perPage}`;
 return await (await fetch(fetchPath)).json();
};

export const selectCatBySlug = (data: ICat[], slug: s) =>
 data.filter((it: ICat) => it.slug === slug)[0];
