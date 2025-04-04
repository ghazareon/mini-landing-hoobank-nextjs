"use client";
/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import type { FC } from "react";

import { Fragment } from "react";

/* prettier-ignore */
import { Div, Section, P,
									H2, H3, Article,
									Img,
									I}    from "@/src/app/components/electrons";

import type { IObj, s, IPost, ICat } from "@/src/shared/types";

import SlotCounter from "react-slot-counter";

import React, { useEffect, useState } from "react";

import { removeHtmlTagsFromStr } from "@/src/shared/utils/removeHtmlTagsFromStr";

export interface IS300 {
 data: {
  cat: ICat;
  posts: IPost[];
 };
}

export const S300: FC<IS300> = ({ data }) => {
 return (
  <Section className="s-300">
   <Div className="s-300__fix fix">
    <Div className="grid-300">
     {data.posts.map((it, i) => {
      return (
       <Fragment key={it.id}>
        <Div className="info-caption">
         <Div className="info-caption__i">
          {removeHtmlTagsFromStr(it.title.rendered)}
         </Div>

         <Div className="info-caption__c">
          {removeHtmlTagsFromStr(it.excerpt.rendered)}+
         </Div>
        </Div>
        {i < data.posts.length - 1 && <I className="breaker"></I>}
       </Fragment>
      );
     })}
    </Div>
   </Div>
  </Section>
 );
};
