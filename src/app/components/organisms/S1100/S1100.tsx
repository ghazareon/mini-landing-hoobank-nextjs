/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

"use client";

import { FC } from "@/npm/@types/react";

/* prettier-ignore */
import { Div, Section, P,
									H2, H3, Article,
									Img,
									I,
									Li,
									Ul,
									Br,
									Span}    from "@/src/app/components/electrons";

import type { IObj, s, IPost } from "@/src/shared/types";

import SlotCounter from "react-slot-counter";

import React, { useEffect, useState } from "react";
import Link from "@/npm/next/link";

export interface IS1100 {}

export const S1100: FC<IS1100> = () => {
 return (
  <Section className="s-1100">
   <Div className="s-1100__fix fix">
    <I className="break-line"></I>
    <Div className="grid-1100">
     <Div className="s-1100__txt">
      © 2021-{new Date().getFullYear()}&nbsp;
      <Span className="logo-txt">
       <Span className="logo-txt__p1">Hoo</Span>
       <Span className="logo-txt__p2">Bank</Span>.
      </Span>
      <Br />
      All Rights Reserved.
     </Div>

     <Div className="soc-pages">
      <Link
       href="#"
       className="soc-page soc-page--inst"
       aria-label="instagram page company"
      >
       <Img
        src="assets/svg/icons/inst.svg"
        width="21"
        height="21"
        alt=""
        className="soc-page__ic soc-page__ic--inst"
       />
      </Link>

      <Link
       href="#"
       className="soc-page soc-page--fb"
       aria-label="facebook page company"
      >
       <Img
        src="assets/svg/icons/fb.svg"
        width="21"
        height="21"
        alt=""
        className="soc-page__ic soc-page__ic--fb"
       />
      </Link>

      <Link
       href="#"
       className="soc-page soc-page--tw"
       aria-label="twitter page company"
      >
       <Img
        src="assets/svg/icons/tw.svg"
        width="23"
        height="19"
        alt=""
        className="soc-page__ic soc-page__ic--tw"
       />
      </Link>

      <Link
       href="#"
       className="soc-page soc-page--tw"
       aria-label="facebook page linkedin"
      >
       <Img
        src="assets/svg/icons/in.svg"
        width="20.99"
        height="20.99"
        alt=""
        className="soc-page__ic soc-page__ic--in"
       />
      </Link>
     </Div>
    </Div>
   </Div>
  </Section>
 );
};
