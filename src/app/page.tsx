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

import "@/src/shared/ui/assets/css/transpiled/tw-out.css";

export default async function Home() {
 return (
  <Div className="wrap">
   <Main>
    <Section className="s-700">
     <Div className="s-700__fix fix">
      <Div className="grid-700">
       <H2 className="s__t s__t--s-700">What people are saying about us</H2>
       <P className="s__d s__d--s-700">
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
       </P>
      </Div>

      <Div className="grid-700-v2">
       <Article className="box-700">
        <SvgSprite
         name="quote"
         width="42.6"
         height="27.6"
         className="box-700__svg"
        />

        <Div className="s__d s__d--s-700">
         Money is only a tool. It will take you wherever you wish, but it will
         not replace you as the driver.
        </Div>

        <Div className="img-info">
         <Div className="img-info__c img-info__c--1"></Div>
         <Div className="img-info__c img-info__c--2">
          <H3 className="img-info__t">Herman Jensen</H3>
          <P className="img-info__d">Founder & Leader</P>
         </Div>
        </Div>
        {/*  */}
       </Article>
       <Article className="box-700">
        <SvgSprite
         name="quote"
         width="42.6"
         height="27.6"
         className="box-700__svg"
        />
        <Div className="s__d s__d--s-700">
         Money is only a tool. It will take you wherever you wish, but it will
         not replace you as the driver.
        </Div>

        <Div className="img-info">
         <Div className="img-info__c img-info__c--1"></Div>
         <Div className="img-info__c img-info__c--2">
          <H3 className="img-info__t">Herman Jensen</H3>
          <P className="img-info__d">Founder & Leader</P>
         </Div>
        </Div>
       </Article>
       <Article className="box-700">
        <SvgSprite
         name="quote"
         width="42.6"
         height="27.6"
         className="box-700__svg"
        />
        <Div className="s__d s__d--s-700">
         Money is only a tool. It will take you wherever you wish, but it will
         not replace you as the driver.
        </Div>

        <Div className="img-info">
         <Div className="img-info__c img-info__c--1"></Div>
         <Div className="img-info__c img-info__c--2">
          <H3 className="img-info__t">Herman Jensen</H3>
          <P className="img-info__d">Founder & Leader</P>
         </Div>
        </Div>
       </Article>
      </Div>
     </Div>
    </Section>

    <Section className="s-800">
     <Div className="s-800__fix fix">
      <Div className="grid-800">
       <Img
        src="assets/svg/logos/airbnb.svg"
        width="192.21"
        height="59.99"
        alt="logo airbnb"
        className="logo-it logo-it--airbnb"
       />
       <Img
        src="assets/svg/logos/binance.svg"
        width="192.24"
        height="38.63"
        alt="logo binance"
        className="logo-it logo-it--binance"
       />
       <Img
        src="assets/svg/logos/coinbase.svg"
        width="189.01"
        height="41.25"
        alt="logo coinbase"
        className="logo-it logo-it--coinbase"
       />
       <Img
        src="assets/svg/logos/dropbox.svg"
        width="192.25"
        height="37.86"
        alt="logo dropbox"
        className="logo-it logo-it--dropbox"
       />
      </Div>

      <Div className="pagination">
       <Div className="pagination__it pagination__it--current"></Div>
       <Div className="pagination__it"></Div>
       <Div className="pagination__it"></Div>
      </Div>
     </Div>
    </Section>

    <Section className="s-900">
     <Div className="s-900__fix fix">
      <Div className="box-900">
       <Div className="grid-900">
        <Div className="group-900">
         <H2 className="s__t s__t--s-900">Let’s try our service now!</H2>
         <P className="s__d s__d--s-900">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
         </P>
        </Div>

        <Link href="#" className="btn">
         Get Started
        </Link>
       </Div>
      </Div>
     </Div>
    </Section>

    <Section className="s-1000">
     <Div className="s-1000__fix fix">
      <I className="break-line"></I>

      <Div className="grid-1000">
       <Div className="grid-1000__it">
        <Link href="#" className="logo logo--2">
         <Img
          src="assets/svg/logo-2.svg"
          alt=""
          width="264.79"
          height="72.14"
         />
        </Link>

        <Div className="s-1000__txt">
         A new way to make the payments easy, reliable and secure.
        </Div>
       </Div>
       <Div className="grid-1000__it">
        <H4 className="h4-1000 h4-1000--s-1000">Usefull Links</H4>
        <Ul className="l-1000 l-1000--s-1000">
         <Li className="l-1000__li">
          <Link className="l-1000__a" href="#">
           Content
          </Link>
         </Li>
         <Li className="l-1000__li">
          <Link href="#" className="l-1000__a">
           How it Works
          </Link>
         </Li>
         <Li className="l-1000__li">
          <Link href="#" className="l-1000__a">
           Create
          </Link>
         </Li>
         <Li className="l-1000__li">
          <Link href="#" className="l-1000__a">
           Explore
          </Link>
         </Li>
         <Li className="l-1000__li">
          <Link href="#" className="l-1000__a">
           Terms & Services
          </Link>
         </Li>
        </Ul>
       </Div>
       <Div className="grid-1000__it">
        <H4 className="h4-1000 h4-1000--s-1000">Community</H4>

        <Ul className="l-1000 l-1000--s-1000">
         <Li className="l-1000__li">
          <Link href="#" className="l-1000__a">
           Help Center
          </Link>
         </Li>
         <Li className="l-1000__li">
          <Link href="#" className="l-1000__a">
           Partners
          </Link>
         </Li>
         <Li className="l-1000__li">
          <Link href="#" className="l-1000__a">
           Suggestions
          </Link>
         </Li>
         <Li className="l-1000__li">
          <Link href="#" className="l-1000__a">
           Blog
          </Link>
         </Li>
         <Li className="l-1000__li">
          <Link href="#" className="l-1000__a">
           Newsletters
          </Link>
         </Li>
        </Ul>
       </Div>
       <Div className="grid-1000__it">
        <H4 className="h4-1000 h4-1000--s-1000">Partner</H4>
        <Ul className="l-1000 l-1000--s-1000">
         <Li className="l-1000__li">
          <Link href="#" className="l-1000__a">
           Our Partner
          </Link>
         </Li>
         <Li className="l-1000__li">
          <Link href="#" className="l-1000__a">
           Become a Partner
          </Link>
         </Li>
        </Ul>
       </Div>
      </Div>
     </Div>
    </Section>

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
        <Link href="#" className="soc-page">
         <SvgSprite name="inst" width="21" height="21" />
        </Link>
        <Link href="#" className="soc-page">
         <SvgSprite name="fb" width="21" height="21" />
        </Link>
        <Link href="#" className="soc-page">
         <SvgSprite name="tw" width="23" height="19" />
        </Link>
        <Link href="#" className="soc-page">
         <SvgSprite name="in" width="20.99" height="20.99" />
        </Link>
       </Div>
      </Div>
     </Div>
    </Section>
   </Main>
  </Div>
 );
}
