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
									Span}    from "@/src/app/components/electrons";

import type { IObj, s, IPost } from "@/src/shared/types";

import SlotCounter from "react-slot-counter";

import React, { useEffect, useState } from "react";
import Link from "@/npm/next/link";
import { SvgSprite } from "../../molecules";

export interface IS400 {}

export const S400: FC<IS400> = () => {
 return (
  <>
   <Section className="s-400" id="solution">
    <Div className="s-400__fix fix">
     <Div className="grid-400">
      <Div className="grid-400__it">
       {/*  */}
       <Div className="collage-400" aria-hidden="true">
        <Div className="msg" data-scroll data-scroll-speed="3">
         <SvgSprite
          name="check"
          width="24"
          height="24"
          className="msg__check"
         />
         <Span className="msg__txt">Great! Your Payment is succesfully.</Span>
        </Div>

        <Div className="card card--405" data-scroll data-scroll-speed="1">
         <Div className="card__r">
          <Div className="card__t pb-[3.4rem]">Last Transaction</Div>
         </Div>

         <Div className="card__r">
          <Div className="card__g">
           <Img
            src="assets/svg/logo-transaction/dribbble.svg"
            widtgh="40"
            height="39.95"
            alt="paypal"
            className="transaction-logo"
           />
           <Div className="card__i">
            <Div className="card__t">Dribbble Pro</Div>
            <Div className="card__d">15 Days ago</Div>
           </Div>
          </Div>

          <Div className="card__val">
           <SvgSprite
            name="arr-rounded-down"
            width="12.45"
            height="11.36"
            className="transaction-quot text-red-100"
           />
           -$250,93
          </Div>
         </Div>

         <Div className="card__r">
          <Div className="card__g">
           <Img
            src="assets/svg/logo-transaction/netflix.svg"
            widtgh="40"
            height="39.95"
            alt="netflix"
            className="transaction-logo"
           />
           <Div className="card__i">
            <Div className="card__t">Netflix</Div>
            <Div className="card__d">4 Days ago</Div>
           </Div>
          </Div>

          <Div className="card__val">
           <SvgSprite
            name="arr-rounded-down"
            width="12.45"
            height="11.36"
            className="transaction-quot text-red-100"
           />
           -$250,93
          </Div>
         </Div>

         <Div className="card__r">
          <Div className="card__g">
           <Img
            src="assets/svg/logo-transaction/manulife-cash.svg"
            widtgh="40"
            height="39.95"
            alt="netflix"
            className="transaction-logo"
           />
           <Div className="card__i">
            <Div className="card__t">Manulife Cash</Div>
            <Div className="card__d">4 Days ago</Div>
           </Div>
          </Div>

          <Div className="card__val">
           <SvgSprite
            name="arr-rounded-down"
            width="12.45"
            height="11.36"
            className="transaction-quot text-red-100"
           />
           -$250,93
          </Div>
         </Div>
        </Div>

        <Div className="card card--400" data-scroll data-scroll-speed="2">
         <Div className="card__r card__r--400 items-center pb-[2rem]">
          <Div className="card__rounded-logo">
           <Img
            src="assets/svg/logos-pay/paypal.svg"
            width="24.03"
            height="27.33"
            alt="paypal"
           />
          </Div>
          <Div className="group-card-400">
           <Div className="card__t">Paypal</Div>
           <Div className="card__d">Checkout</Div>
          </Div>
         </Div>

         <Div className="card__r pb-[2rem]">
          <Div className="group-card-405">
           <Div className="card__d">Total</Div>
           <Div className="card__t">$210</Div>
          </Div>
          <Link href="#" className="outline-btn">
           Change
          </Link>
         </Div>

         <Div className="card__r">
          <Link href="#" className="btn btn--long" aria-label="Make Payment">
           Make Payment
          </Link>
         </Div>
        </Div>
       </Div>
       {/*  */}
      </Div>
      <Div className="grid-400__it">
       <H2 className="s__t">Easily control your billing & invoicing.</H2>
      </Div>
      <Div className="grid-400__it">
       <P className="s__d">
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
       </P>
      </Div>
      <Div className="grid-400__it">
       <Div className="app-store-btns">
        <Link
         href="#"
         className="app-store-btn"
         target="_blank"
         aria-label="Link to download the application for installation on a mobile device from the App Store"
        >
         <Img
          src="assets/svg/logos/app-store.svg"
          width="108.75"
          height="27.53"
          alt=""
          className="btn-img btn-img--app-store"
         />
        </Link>
        <Link
         href="#"
         className="app-store-btn"
         target="_blank"
         aria-label="Link to download the application for installation on a mobile device from the Google Play"
        >
         <Img
          src="assets/svg/logos/google-play.svg"
          width="101.25"
          height="24.2"
          alt=""
          className="btn-img btn-img--google-play"
         />
        </Link>
       </Div>
      </Div>
      <Div className="grid-400__it"></Div>
     </Div>
    </Div>
   </Section>
  </>
 );
};
