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
									I}    from "@/src/app/components/electrons";

import type { IObj, s, IPost } from "@/src/shared/types";

import SlotCounter from "react-slot-counter";

import React, { useEffect, useState } from "react";

export interface IS800 {}

export const S800: FC<IS800> = () => {
 return (
  <>
   <Section className="s-800">
    <Div className="s-800__fix fix">
     <Div className="grid-800">
      <Img
       src="assets/svg/logos/airbnb.svg"
       width="192.21"
       height="59.99"
       alt="airbnb"
       className="logo-it logo-it--airbnb"
      />
      <Img
       src="assets/svg/logos/binance.svg"
       width="192.24"
       height="38.63"
       alt="binance"
       className="logo-it logo-it--binance"
      />
      <Img
       src="assets/svg/logos/coinbase.svg"
       width="189.01"
       height="41.25"
       alt="coinbase"
       className="logo-it logo-it--coinbase"
      />
      <Img
       src="assets/svg/logos/dropbox.svg"
       width="192.25"
       height="37.86"
       alt="dropbox"
       className="logo-it logo-it--dropbox"
      />
     </Div>

     {/* <Div className="pagination">
        <Div className="pagination__it pagination__it--current"></Div>
        <Div className="pagination__it"></Div>
        <Div className="pagination__it"></Div>
       </Div> */}
    </Div>
   </Section>
  </>
 );
};
