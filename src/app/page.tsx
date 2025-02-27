/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import type { ElementType, FC, HTMLAttributes, JSX, ReactNode } from "react";
import Link from "@/npm/next/link";
import { clsx } from "clsx";

import type { s, IObj, IObjNest } from "@/src/shared/types";
import type { CoreUiProps } from "@/src/app/components/electrons";

/* prettier-ignore */
import {
 CoreUi, Div, Main, Header, Footer, Section, Img, H1, P,
 H2, H3, Svg, Use, Span, Input, Form, Button, H4, Nav, Ul,
	Li, Figure, Figcaption, Article, Br, I, Label, Picture,
	Select, Source } from "@/src/app/components/electrons";

import { CoreEntity, SvgSprite } from "@/src/app/components/molecules";

import {
 SocLinks,
 SocLinksData,
 Testimonials
} from "@/src/app/components/organisms";
import { Logo, Logo1Date } from "@/src/app/components/organisms";

import { Fonts } from "@/src/app/nextFonts";

import "@/src/shared/ui/assets/css/transpiled/tw-out.css";

export default function Home() {
 return (
  <Div className="wrap">
   <Header className="s-100 !hidden">
    <Div className="s-100__fix fix"></Div>
   </Header>
   <Main>
    {/*  */}
    <Section className="s-500">
     <Div className="s-500__fix fix">
      {/*  */}
      <Div className="grid-500">
       <Div className="grid-500__it">
        <H2 className="s__t">You do the business, we’ll handle the money.</H2>
        <P className="s__d">
         With the right credit card, you can improve your financial life by
         building credit, earning rewards and saving money. But with hundreds of
         credit cards on the market.
        </P>
        <Link href="#" className="btn btn--v1">
         Get Started
        </Link>
       </Div>
       <Div className="grid-500__it">
        {/*  */}
        <Div className="box-500">
         <Div className="box-500__ic">
          <Div className="symbol">
           <SvgSprite width="32" height="30.4" svgName="star" />
          </Div>
         </Div>
         <Div className="box-500__in">
          <H3 className="box-500__t">Rewards</H3>
          <P className="box-500__d">
           The best credit cards offer some tantalizing combinations of
           promotions and prizes
          </P>
         </Div>
        </Div>
        {/*  */}

        {/*  */}
        <Div className="box-500">
         <Div className="box-500__ic">
          <Div className="symbol">
           <SvgSprite width="32" height="30.4" svgName="secure" />
          </Div>
         </Div>
         <Div className="box-500__in">
          <H3 className="box-500__t">100% Secured</H3>
          <P className="box-500__d">
           We take proactive steps make sure your information and transactions
           are secure.
          </P>
         </Div>
        </Div>
        {/*  */}

        {/*  */}
        <Div className="box-500">
         <Div className="box-500__ic">
          <Div className="symbol">
           <SvgSprite width="32" height="30.4" svgName="transfer" />
          </Div>
         </Div>
         <Div className="box-500__in">
          <H3 className="box-500__t">Balance Transfer</H3>
          <P className="box-500__d">
           A balance transfer credit card can save you a lot of money in
           interest charges.
          </P>
         </Div>
        </Div>
        {/*  */}
       </Div>
      </Div>
      {/*  */}
     </Div>
    </Section>
    {/*  */}

    <Section className="s-700">
     <Div className="s-700__fix fix">
      <Div className="group-700">
       <H2 className="s__t">What people are saying about us</H2>
       <P className="s__d">
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
       </P>
      </Div>

      <Testimonials />
     </Div>
    </Section>

    <Section className="s-800 !hidden">
     <Div className="s-800__fix fix"></Div>
    </Section>
    <Section className="s-900">
     <Div className="s-900__fix fix"></Div>
    </Section>
   </Main>

   <Footer className="main-footer !hidden">
    <Section className="s-1000">
     <Div className="fix s-1000__fix"></Div>
    </Section>
    <Section className="s-1100">
     <Div className="fix s-1100__fix"></Div>
    </Section>
   </Footer>
  </Div>
 );
}
