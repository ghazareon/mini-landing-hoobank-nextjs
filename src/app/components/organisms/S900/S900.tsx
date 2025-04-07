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
									I}    from "@/src/app/components/electrons";

import type { IObj, s, IPost } from "@/src/shared/types";

import SlotCounter from "react-slot-counter";

import React, { useEffect, useState } from "react";
import Link from "@/npm/next/link";

export interface IS900 {}

export const S900: FC<IS900> = () => {
 return (
  <>
   <Section className="s-900" id="get-started">
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

       <Link href="#" className="btn" aria-label="get started button">
        Get Started
       </Link>
      </Div>
     </Div>
    </Div>
   </Section>
  </>
 );
};
