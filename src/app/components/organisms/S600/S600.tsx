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

export interface IS600 {}

export const S600: FC<IS600> = () => {
 return (
  <>
   <Section className="s-600">
    <Div className="s-600__fix fix">
     <Div className="grid-600">
      <Div className="grid-600__it">
       <H2 className="s__t">Find a better card deal in few easy steps.</H2>
      </Div>
      <Div className="grid-600__it">
       <P className="s__d">
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor. Aliquet ultrices ac, ametau.
       </P>
      </Div>
      <Div className="grid-600__it">
       <Link
        href="#"
        className="btn btn--s-200"
        aria-label="get started button"
       >
        Get Started
       </Link>
      </Div>
      <Div className="grid-600__it"></Div>
      <Div className="grid-600__it">
       <Div className="collage-600" aria-hidden="true">
        <Div className="card card--600">
         <Span className="symbol-600">
          <SvgSprite className="scan" name="scan" width="22" height="18.01" />
         </Span>
         <H3 className="card__t">Scan Credit Cards</H3>
         <P className="card__d">Scan yourcredit card in 4 minutes.</P>
        </Div>

        <Div className="card card--605">
         <Div className="card__r">
          <H3 className="card__t">Online Analysis</H3>
          <P className="card__d">
           1 Month
           <SvgSprite
            name="arr-down"
            width="5.83"
            height="2.92"
            className="arr-down"
           />
          </P>
         </Div>

         <Div className="card__r">
          <Div className="present-info text-green-100">
           <Span className="present-info__t">$ 2,334,67</Span>
           <Span className="present-info__d">Income</Span>
          </Div>

          <Div className="present-info text-aqua-300">
           <Span className="present-info__t">$ 5.31M</Span>
           <Span className="present-info__d">Expenses</Span>
          </Div>
         </Div>

         <Div className="py-[1.7rem]">
          <Img
           src="assets/svg/diagram.svg"
           width="215.02"
           height="64.5"
           alt=""
           className="diagram"
          />
         </Div>

         <Div className="list-605">
          <Span className="list-605__it">Jan</Span>
          <Span className="list-605__it">Feb</Span>
          <Span className="list-605__it">Mar</Span>
          <Span className="list-605__it">Apr</Span>
          <Span className="list-605__it">May</Span>
          <Span className="list-605__it">Jun</Span>
          <Span className="list-605__it">Jul</Span>
         </Div>
        </Div>

        <Div className="card card--610">
         <Div className="card__r">
          <H3 className="card__t">Pay Method</H3>
          <SvgSprite
           name="arr-down"
           width="10"
           height="5"
           className="arr-down"
          />
         </Div>

         <Div className="list-logos-610">
          <Div className="box-logo">
           <Img
            src="assets/svg/logos-pay/paypal.svg"
            alt="paypal"
            width="24"
            height="27.32"
           />
          </Div>
          <Div className="box-logo">
           <Img
            src="assets/svg/logos-pay/apple.svg"
            alt="apple"
            width="20.49"
            height="24.01"
           />
          </Div>
          <Div className="box-logo">
           <Img
            src="assets/svg/logos-pay/visa.svg"
            alt="visa"
            width="32"
            height="9.7"
           />
          </Div>
          <Div className="box-logo">
           <Img
            src="assets/svg/logos-pay/shopify.svg"
            alt="shopify"
            width="36.92"
            height="10.53"
           />
          </Div>
         </Div>
        </Div>

        <Img
         src="assets/svg/rings-bg.svg"
         width="535"
         height="454"
         className="rings"
        />
       </Div>
      </Div>
     </Div>
    </Div>
   </Section>
  </>
 );
};
