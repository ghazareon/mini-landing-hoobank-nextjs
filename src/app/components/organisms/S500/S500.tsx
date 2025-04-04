"use client";
/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import { FC } from "@/npm/@types/react";

/* prettier-ignore */
import { Div, Section, P,
									H2, H3, Article,
									Img,
									I}    from "@/src/app/components/electrons";

import type { IObj, s, IPost } from "@/src/shared/types";

import SlotCounter from "react-slot-counter";

import React, { useEffect, useState } from "react";
import Link from "@/npm/next/link";

export interface IS500 {}

export const S500: FC<IS500> = () => {
 return (
  <>
   <Section className="s-500">
    <Div className="s-500__fix fix">
     <Div className="grid-500">
      <Div className="grid-500__it">
       <H2 className="s__t s__t--s-500">
        You do the business, we’ll handle the money.
       </H2>
      </Div>

      <Div className="grid-500__it">
       <P className="s__d s__d--s-500">
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
       </P>
      </Div>

      <Div className="grid-500__it">
       <Link
        href="#"
        className="btn btn--s-500"
        aria-label="get started button"
       >
        Get Started
       </Link>
      </Div>
      <Div className="grid-500__it">
       <Div className="group-500">
        <Div className="box-500">
         <Div className="box-500__c box-500__c--1">
          <Div className="icon-box">
           <Img
            src="assets/svg/icons/star.svg"
            width="32"
            height="30.4"
            alt=""
            className="icon-box__img"
           />
          </Div>
         </Div>
         <Div className="box-500__c box-500__c--2">
          <H3 className="box-500__t">Rewards</H3>
          <P className="box-500__d">
           The best credit cards offer some tantalizing combinations of
           promotions and prizes
          </P>
         </Div>
        </Div>

        <Div className="box-500">
         <Div className="box-500__c box-500__c--1">
          <Div className="icon-box">
           <Img
            src="assets/svg/icons/transfer.svg"
            width="32"
            height="32"
            alt=""
            className="icon-box__img"
           />
          </Div>
         </Div>
         <Div className="box-500__c box-500__c--2">
          <H3 className="box-500__t">100% Secured</H3>
          <P className="box-500__d">
           We take proactive steps make sure your information and transactions
           are secure.
          </P>
         </Div>
        </Div>

        <Div className="box-500">
         <Div className="box-500__c box-500__c--1">
          <Div className="icon-box">
           <Img
            src="assets/svg/icons/secure.svg"
            width="27.19"
            height="32"
            alt=""
            className="icon-box__img"
           />
          </Div>
         </Div>
         <Div className="box-500__c box-500__c--2">
          <H3 className="box-500__t">Balance Transfer</H3>
          <P className="box-500__d">
           A balance transfer credit card can save you a lot of money in
           interest charges.
          </P>
         </Div>
        </Div>
       </Div>
      </Div>
     </Div>
    </Div>
   </Section>
  </>
 );
};
