/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */
"use client";

import Link from "@/npm/next/link";

/* prettier-ignore */
import { Div, Header, Img, Main, Section,
									Span, H1, Br, P, H2, H3, Footer,
									I, Ul, Li } from "@/src/app/components/electrons";

import { MainNav, SvgSprite } from "@/src/app/components/molecules";

/* prettier-ignore */
import { S100, S200, S300, S400, S500,
									S600, S700, S800, S900, S1000,
									S1100 } from "@/src/app/components/organisms";

import type { s, IObj, IObjNest, n, ICat, IPost } from "@/src/shared/types";

import type { FC } from "react";

export interface HomeClientProps {
 data: {
  testimonialsData: {
   cat: ICat;
   posts: IPost[];
  };

  countersData: {
   cat: ICat;
   posts: IPost[];
  };
 };
}

export const HomeClient: FC<HomeClientProps> = ({ data }) => {
 return (
  <>
   <Div className="wrap__front">
    <S100 />
    <Main>
     <S200 />
     <S300 data={data.countersData} />
     <S400 />
     <S500 />
     <S600 />
     <S700 data={data.testimonialsData} />
     <S800 />
     <S900 />
    </Main>

    <Footer>
     <S1000 />
     <S1100 />
    </Footer>
   </Div>
   {/* <Div className="wrap__back" aria-hidden="true">
    <Div className="lighting-500">
     <Img
      src="assets/svg/lighting/lighting-500__shape-1.svg"
      alt=""
      width="532"
      height="526"
      className="lighting-500__shape-1"
     />

     <Img
      src="assets/svg/lighting/lighting-500__shape-2.svg"
      alt=""
      width="530.85"
      height="524.32"
      className="lighting-500__shape-2"
     />
    </Div>

    <Div className="lighting-400">
     <Img
      src="assets/svg/lighting/lighting-400__shape-1.svg"
      alt=""
      width="532"
      height="526"
      className="lighting-400__shape-1"
     />

     <Img
      src="assets/svg/lighting/lighting-400__shape-2.svg"
      alt=""
      width="514"
      height="360"
      className="lighting-400__shape-2"
     />
    </Div>

    <Div className="lighting-300">
     <Img
      src="assets/svg/lighting/lighting-300__shape-1.svg"
      alt=""
      width="630.45"
      height="549.01"
      className="lighting-300__shape-1"
     />
     <Img
      src="assets/svg/lighting/lighting-300__shape-2.svg"
      alt=""
      width="412.2"
      height="500.2"
      className="lighting-300__shape-2"
     />
     <Img
      src="assets/svg/lighting/lighting-300__shape-3.svg"
      alt=""
      width="405.26"
      height="470.8"
      className="lighting-300__shape-3"
     />
    </Div>

    <Div className="lighting-100">
     <Img
      src="assets/svg/lighting/lighting-100__shape-1.svg"
      alt=""
      width="402.92"
      height="503.89"
      className="lighting-100__shape-1"
     />
     <Img
      src="assets/svg/lighting/lighting-100__shape-4.svg"
      alt=""
      width="630.46"
      height="559.12"
      className="lighting-100__shape-4"
     />

     <Img
      src="assets/svg/lighting/lighting-100__shape-3.svg"
      alt=""
      width="405"
      height="471"
      className="lighting-100__shape-3"
     />

     <Img
      src="assets/svg/lighting/lighting-100__shape-2.svg"
      alt=""
      width="578"
      height="571"
      className="lighting-100__shape-2"
     />
    </Div>
   </Div> */}
  </>
 );
};
