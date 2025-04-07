"use client";
/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import type { FC, MouseEvent } from "@/npm/@types/react";
import { useEffect, useRef, useState } from "react";

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

import type { IObj, s, IPost } from "@/src/shared/types";
import Link from "@/npm/next/link";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export interface MainNavProps {}

export const MainNav: FC<MainNavProps> = () => {
 //
 // const containerRef = useRef<HTMLElement>(null);
 // const menuRef = useRef<HTMLElement>(null);
 // const burgerRef = useRef<HTMLElement>(null);
 // const timelineRef = useRef<GSAPTimeline>(null);

 // let container: HTMLElement | null;
 // let burger: HTMLElement | null;
 // let menu: HTMLElement | null;

 // const { contextSafe } = useGSAP(
 //  () => {
 //   timelineRef.current = gsap
 //    .timeline({ paused: true })
 //    .from(menuRef.current, { x: "100%", duration: 0.4, ease: "power4.out" })
 //    .fromTo(
 //     ".main-nav__li",
 //     { duration: 0.45, opacity: 0, y: -10, stagger: 0.1, ease: "power1.inOut" },
 //     { duration: 0.45, opacity: 1, y: 0, stagger: 0.1, ease: "power1.inOut" }
 //    );
 //  },
 //  { scope: containerRef }
 // );

 // const [isOpenMenu, setIsOpenMenu] = useState(false);

 // const burgerHandle = () => {
 //  setIsOpenMenu(!isOpenMenu);
 //  console.log(isOpenMenu);
 //  !isOpenMenu ? timelineRef.current?.play() : timelineRef.current?.reverse();
 // };

 return (
  <>
   <Div className="scene-mobile-menu rel">
    {" "}
    {/* ref={containerRef} */}
    <Div className="burger-btn">
     {" "}
     {/* burger-btn--show */} {/* onClick={burgerHandle} ref={burgerRef} */}
     <SvgSprite
      name="burger"
      width="16.3"
      height="10.02"
      className="burger-btn__icon"
     />
    </Div>
    <Div className="for-mobile">
     {" "}
     {/* for-mobile--show */} {/* ref={menuRef} */}
     <Nav className="main-nav">
      <Ul className="main-nav__ul">
       <Li className="main-nav__li">
        <Link href="#about-us" className="main-nav__a" data-scroll-to>
         About Us
        </Link>
       </Li>
       <Li className="main-nav__li">
        <Link href="#features" className="main-nav__a" data-scroll-to>
         Features
        </Link>
       </Li>
       <Li className="main-nav__li">
        <Link href="#solution" className="main-nav__a" data-scroll-to>
         Solution
        </Link>
       </Li>
       <Li className="main-nav__li">
        <Link href="#testimonials" className="main-nav__a" data-scroll-to>
         Testimonials
        </Link>
       </Li>
       <Li className="main-nav__li">
        <Link href="#get-started" className="main-nav__a" data-scroll-to>
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
