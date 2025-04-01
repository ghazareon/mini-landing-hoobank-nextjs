/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import type { s, IObj, IObjNest, n } from "@/src/shared/types";
const { DB_HOST, DB_PATH, DB_ENTITY_CATEGORIES, DB_ENTITY_POSTS } = process.env;

export const cats = `${DB_HOST}/${DB_PATH}/${DB_ENTITY_CATEGORIES}`;

export const fetcher = (url: s) =>
 fetch(url).then((res) => {
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
 });
