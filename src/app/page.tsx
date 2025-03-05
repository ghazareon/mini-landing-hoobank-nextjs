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
    <Section className="s-1000">
     <Div className="s-1000__fix fix">
      <Div className="grid-1000">
       <Div className="__it">
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
       <Div className="__it">
        <H4 className="h4-1000">Usefull Links</H4>

        <Ul className="l-1000">
         <Li>
          <Link href="#">Content</Link>
         </Li>
         <Li>
          <Link href="#">How it Works</Link>
         </Li>
         <Li>
          <Link href="#">Create</Link>
         </Li>
         <Li>
          <Link href="#">Explore</Link>
         </Li>
         <Li>
          <Link href="#">Terms & Services</Link>
         </Li>
        </Ul>
       </Div>
       <Div className="__it">
        <H4 className="h4-1000">Community</H4>

        <Ul className="l-1000">
         <Li>
          <Link href="#">Help Center</Link>
         </Li>
         <Li>
          <Link href="#">Partners</Link>
         </Li>
         <Li>
          <Link href="#">Suggestions</Link>
         </Li>
         <Li>
          <Link href="#">Blog</Link>
         </Li>
         <Li>
          <Link href="#">Newsletters</Link>
         </Li>
        </Ul>
       </Div>
       <Div className="__it">
        <H4 className="h4-1000">Partner</H4>
        <Ul className="l-1000">
         <Li>
          <Link href="#">Our Partner</Link>
         </Li>
         <Li>
          <Link href="#">Become a Partner</Link>
         </Li>
        </Ul>
       </Div>
      </Div>
     </Div>
    </Section>

    <Section className="s-1100">
     <Div className="s-1100__fix fix">
      <Div className="grid-1100">
       <Div className="s-1100__txt">
        Copyright © 2021-{new Date().getFullYear()}&nbsp;
        <Span className="logo-txt">
         <Span>Hoo</Span>
         <Span>Bank</Span>.
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
