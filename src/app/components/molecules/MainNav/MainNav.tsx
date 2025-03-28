"use client";
/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import type { FC, MouseEvent } from "@/npm/@types/react";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { removeHtmlTagsFromStr } from "@/src/shared/utils/removeHtmlTagsFromStr";
import { truncateStr } from "@/src/shared/utils/truncateStr";
import { SvgSprite } from "@/src/app/components/molecules";

/* prettier-ignore */
import { Div, Section, P,
									H2, H3, Article,
									Img,
									Li,
									Ul, Nav}    from "@/src/app/components/electrons";

import type { IObj, s, IPosts700 } from "@/src/shared/types";
import Link from "@/npm/next/link";

export interface MainNavProps {}

export const MainNav: FC<MainNavProps> = () => {
 return (
  <>
   <Div className="scene-mobile-menu">
    <Div className="for-mobile for-mobile--menu js-mobile-menu">
     <Div className="burger-btn">
      <SvgSprite
       name="burger"
       width="16.3"
       height="10.02"
       className="burger-btn__icon"
      />
     </Div>

     <Nav className="main-nav">
      <Ul className="main-nav__ul">
       <Li className="main-nav__li">
        <Link href="#" className="main-nav__a">
         About Us
        </Link>
       </Li>
       <Li className="main-nav__li">
        <Link href="#" className="main-nav__a">
         Features
        </Link>
       </Li>
       <Li className="main-nav__li">
        <Link href="#" className="main-nav__a">
         Solution
        </Link>
       </Li>
       <Li className="main-nav__li">
        <Link href="#" className="main-nav__a">
         Testimonials
        </Link>
       </Li>
       <Li className="main-nav__li">
        <Link href="#" className="main-nav__a">
         Get Started
        </Link>
       </Li>
      </Ul>
     </Nav>
    </Div>
   </Div>
  </>
 );
};
