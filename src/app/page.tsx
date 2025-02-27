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
   <Header className="s-100">
    <Div className="s-100__fix fix"></Div>
   </Header>
   <Main>
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

    <Section className="s-800">
     <Div className="s-800__fix fix"></Div>
    </Section>
    <Section className="s-900">
     <Div className="s-900__fix fix"></Div>
    </Section>
   </Main>

   <Footer className="main-footer">
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
