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
									Br,
									H1,
									Span}    from "@/src/app/components/electrons";

import type { IObj, s, IPost } from "@/src/shared/types";

import SlotCounter from "react-slot-counter";

import React, { useEffect, useState } from "react";
import Link from "@/npm/next/link";
import { SvgSprite } from "../../molecules";

export interface IS200 {}

export const S200: FC<IS200> = () => {
 return (
  <>
   <Section className="s-200" id="about-us">
    <Div className="s-200__fix fix">
     <Div className="grid-200">
      <Div className="grid-200__it">
       <Div className="badge" data-scroll data-scroll-speed="2">
        <Div className="symbol" aria-hidden="true">
         <SvgSprite
          name="percent"
          width="9.19"
          height="9.19"
          className="symbol__front"
         />
         <SvgSprite
          name="shape-stamp"
          width="26.67"
          height="26.68"
          className="symbol__back"
         />
        </Div>
        <Div className="badge__txt">
         <Span className="text-white">20%</Span>&nbsp;DISCOUNT FOR
         <Span className="text-white">&nbsp;1 MONTH</Span> ACCOUNT
        </Div>
       </Div>
      </Div>
      <Div className="grid-200__it">
       <H1 className="main-title">
        <Img
         src="assets/svg/lighting/lighting-100__shape-1.svg"
         widrth="402.92"
         height="503.89"
         alt=""
         className="lighting-200"
        />
        The Next <Span>Generation</Span> Payment Method.
        <Link href="#" className="unique-btn" aria-label="Get Started button">
         <Span className="unique-btn__txt">
          Get
          <Br />
          Started
          <SvgSprite
           name="arrow-top-right"
           width="12.45"
           height="11.36"
           className="unique-btn__ic"
          />
         </Span>
        </Link>
       </H1>
      </Div>
      <Div className="grid-200__it">
       <P className="main-descr">
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
       </P>

       <Div className="btn-cell">
        <Link
         href="#"
         className="btn btn--s-200"
         aria-label="get started button"
        >
         Get Started
        </Link>
       </Div>
      </Div>
      <Div className="grid-200__it">
       <Div className="collage-200" aria-hidden="true">
        <Div className="ball ball--1" data-scroll data-scroll-speed="-1"></Div>
        <Div className="ball ball--2" data-scroll data-scroll-speed="-1"></Div>
        <Div className="ball ball--3" data-scroll data-scroll-speed="-3"></Div>

        <Img
         src="assets/svg/collage/1.svg"
         className="collage-200__img-1"
         width="386.32"
         height="223.24"
         loading="lazy"
         decoding="async"
         aria-hidden="true"
         alt=""
         data-scroll
         data-scroll-speed="-1"
        />

        <Img
         src="assets/svg/collage/2.svg"
         className="collage-200__img-2"
         width="386.16"
         height="223.24"
         loading="lazy"
         decoding="async"
         aria-hidden="true"
         alt=""
         data-scroll
         data-scroll-speed="0"
        />

        <Img
         src="assets/svg/collage/3.svg"
         className="collage-200__img-3"
         width="379.81"
         height="219.58"
         loading="lazy"
         decoding="async"
         aria-hidden="true"
         alt=""
         data-scroll
         data-scroll-speed="1"
        />

        <Img
         alt=""
         loading="lazy"
         decoding="async"
         height="318"
         src="assets/img/hand/hand-1x.png"
         width="256"
         className="collage-200__img-4"
         aria-hidden="true"
         data-scroll
         data-scroll-speed="2"
         srcSet="assets/img/hand/hand-1x.webp,
																	assets/img/hand/hand-2x.webp 2x,
																	assets/img/hand/hand-3x.webp 3x,
																	assets/img/hand/hand-4x.webp 4x"
        />
       </Div>
      </Div>
     </Div>
    </Div>
   </Section>
  </>
 );
};
