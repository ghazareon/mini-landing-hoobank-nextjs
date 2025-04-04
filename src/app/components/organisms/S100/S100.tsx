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
									Header}    from "@/src/app/components/electrons";

import type { IObj, s, IPost } from "@/src/shared/types";

import SlotCounter from "react-slot-counter";

import React, { useEffect, useState } from "react";
import Link from "@/npm/next/link";
import { MainNav } from "../../molecules";

export interface IS100 {}

export const S100: FC<IS100> = () => {
 return (
  <>
   <Header className="s-100">
    <Div className="s-100__fix fix">
     <Div className="grid-100">
      <Link
       href="#"
       className="logo logo--1"
       aria-label="Logo Hoobank Payment Method"
      >
       <Img src="assets/svg/logo.svg" width="116.95" height="32" alt="" />
      </Link>

      <MainNav />
     </Div>
    </Div>
   </Header>
  </>
 );
};
