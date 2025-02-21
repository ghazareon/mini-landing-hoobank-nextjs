/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import type { IObjNest, n } from "../../types";

/* prettier-ignore */
export const layoutGridBase = {

	/* ----- xl ----- */
 xl: {
  width:     1204,
  gutters:   24,
  sides:     32,
  breakPointSpace:  0
 },

 xlx: {
  width:     1104,
  gutters:   16,
  sides:     32,
  breakPointSpace:  0
 },

/* ----- lg ----- */
 lg: {
  width:     1024,
  gutters:   24,
  sides:     32,
  breakPointSpace:  0
 },

 lgx: {
  width:     924,
  gutters:   24,
  sides:     24,
  breakPointSpace: 0
 },

 lgxx: {
  width:     824,
  gutters:   24,
  sides:     22,
  breakPointSpace: 0
 },

/* ----- md ----- */
 md: {
  width:     768,
  gutters:   20,
  sides:     22,
  breakPointSpace: 0
 },

 mdx: {
  width:     668,
  gutters:   20,
  sides:     20,
  breakPointSpace: 0
 },

 mdxx: {
  width:     568,
  gutters:   12,
  sides:     20,
  breakPointSpace: 0
 },

 mdxxx: {
  width:     468,
  gutters:   12,
  sides:     18,
  breakPointSpace: 0
 },

 mdxxxx: {
  width:     368,
  gutters:   12,
  sides:     16,
  breakPointSpace: 0
 },

	/* ----- sm ----- */
 sm: {
  width:     320,
  gutters:   12,
  sides:     16,
  breakPointSpace:  0
 },
};

export const layoutGrid = ((data: IObjNest<n>) =>
 Object.keys(data).reduce(
  (acc, curr, i) => ({
   ...acc,
   [curr]: {
    ...data[curr],
    ...((itData) => ({
     id: i,
     widthPure: itData.width - 2 * itData.sides,
     breakPoint: itData.width + 2 * itData.breakPointSpace
    }))(data[curr])
   }
  }),
  {}
 ))(layoutGridBase);
