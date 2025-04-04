"use client";
/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import { FC } from "@/npm/@types/react";

/* prettier-ignore */
import { Div, Section, P,
									H2, H3, Article,
									Img,
									I,
									Li,
									Ul}    from "@/src/app/components/electrons";

import type { IObj, s, IPost } from "@/src/shared/types";

import SlotCounter from "react-slot-counter";

import React, { useEffect, useState } from "react";
import Link from "@/npm/next/link";

export interface IS1000 {}

export const S1000: FC<IS1000> = () => {
 return (
  <Section className="s-1000">
   <Div className="s-1000__fix fix">
    <I className="break-line"></I>

    <Div className="grid-1000">
     <Div className="grid-1000__it">
      <Link
       href="#"
       className="logo logo--2"
       aria-label="Logo Hoobank Payment Method"
      >
       <Img src="assets/svg/logo-2.svg" alt="" width="264.79" height="72.14" />
      </Link>

      <Div className="s-1000__txt">
       A new way to make the payments easy, reliable and secure.
      </Div>
     </Div>
     <Div className="grid-1000__it">
      <H3 className="h4-1000 h4-1000--s-1000">Usefull Links</H3>
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
      <H3 className="h4-1000 h4-1000--s-1000">Community</H3>

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
      <H3 className="h4-1000 h4-1000--s-1000">Partner</H3>
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
 );
};
