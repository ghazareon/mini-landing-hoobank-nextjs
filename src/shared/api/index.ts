/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import type { s, IObj, IObjNest, n } from "@/src/shared/types";

export const fetchCats = async (name: s = "categories", quantity: n = 100) => {
 const res = await fetch(
  `${process.env.DB_HOST}/${process.env.DB_PATH}/${name}?per_page=${quantity}`,
  { cache: "no-store" }
 );
 return res.json();
};

export const fetchPostsByCatId = async (id: n, quantity: n = 100) => {
 const res = await fetch(
  `${process.env.DB_HOST}/${process.env.DB_PATH}/posts?categories=${id}&per_page=${quantity}`,
  { cache: "no-store" }
 );
 return res.json();
};
