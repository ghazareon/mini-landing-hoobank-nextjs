/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import type { ElementType, FC, HTMLAttributes, JSX, ReactNode } from "react";
import type { s, IObj, IObjNest } from "@/src/shared/types";
import type { CoreUiProps } from "@/src/app/components/electrons";

import Link from "@/npm/next/link";
import { clsx } from "clsx";

import {
 CoreUi,
 Div,
 Main,
 Header,
 Footer,
 Section,
 Img,
 H1,
 P,
 H2,
 H3,
 Svg,
 Use,
 Span,
 Input,
 Form,
 Button,
 H4,
 Nav,
 Ul,
 Li,
 Figure,
 Figcaption
} from "@/src/app/components/electrons";
import { SvgSprite } from "@/src/app/components/molecules";

import "../shared/ui/assets/css/transpiled/tw-out.css";

import {
 Article,
 Br,
 Label,
 Picture,
 Select,
 Source
} from "./components/electrons/tags";

export interface INestedData {
 tagName: keyof JSX.IntrinsicElements | s;
 tagNest: INestedData | INestedData[] | s;
 tagAttrs?: Record<s, any>;
}

export interface CoreEntityProps {
 data: INestedData;
}

export const CoreEntity: FC<CoreEntityProps> = ({ data }) => {
 const { tagName, tagAttrs, tagNest } = data;

 if (typeof tagNest === "string") {
  return (
   <CoreUi as={tagName} {...tagAttrs}>
    {tagNest}
   </CoreUi>
  );
 } else if (Array.isArray(tagNest)) {
  return (
   <CoreUi as={tagName} {...tagAttrs}>
    {tagNest.map((it, index) => (
     <CoreEntity key={index} data={it} />
    ))}
   </CoreUi>
  );
 } else if (typeof tagNest === "object") {
  return (
   <CoreUi as={tagName} {...tagAttrs}>
    <CoreEntity data={tagNest} />
   </CoreUi>
  );
 }
 return "null";
};

export default function Home() {
 return (
  <Div className="wrap">
   <Header className="main-header">
    <Div className="fix main-header__fix">
     <Link href="#" className="logo logo--1">
      <Img
       src="assets/svg/logo.svg"
       alt=""
       title=""
       width="116.95"
       height="32"
       className="logo__img"
      />
     </Link>

     <Nav className="nav">
      <Ul className="nav__ul">
       <Li className="nav__li nav__li--current">
        <Link className="nav__a" href="#">
         About Us
        </Link>
       </Li>
       <Li className="nav__li">
        <Link className="nav__a" href="#">
         Features
        </Link>
       </Li>
       <Li className="nav__li">
        <Link className="nav__a" href="#">
         Solution
        </Link>
       </Li>
       <Li className="nav__li">
        <Link className="nav__a" href="#">
         Testimonials
        </Link>
       </Li>
       <Li className="nav__li">
        <Link className="nav__a" href="#">
         Get Started
        </Link>
       </Li>
      </Ul>
     </Nav>
    </Div>
   </Header>
   <Main className="main">
    {/* <H1 className="">The Next Generation Payment Method.</H1> */}
   </Main>

   <Footer className="main-footer">
    <Div className="fix main-footer__fix">
     <Span className="cr">
      Copyright © 2021-{new Date().getFullYear()}
      <span className="brand-txt">
       <span className="text-white">Hoo</span>
       <span className="text-aqua-275">Bank</span>.
      </span>
      <Br />
      All Rights Reserved.
     </Span>

     <Div className="soc-links">
      <Link href="#" className="soc-links__it">
       <SvgSprite
        className="icons icons--inst"
        svgName="inst"
        width="21"
        height="21"
       />
      </Link>

      <Link href="#" className="soc-links__it">
       <SvgSprite
        className="icons icons--fb"
        svgName="fb"
        width="21"
        height="21"
       />
      </Link>

      <Link href="#" className="soc-links__it">
       <SvgSprite
        className="icons icons--tw"
        svgName="tw"
        width="21"
        height="21"
       />
      </Link>

      <Link href="#" className="soc-links__it">
       <SvgSprite
        className="icons icons--in"
        svgName="in"
        width="20.99"
        height="20.99"
       />
      </Link>
     </Div>
    </Div>
   </Footer>
  </Div>
 );
}
