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

import type { IObj, s, IPosts } from "@/src/shared/types";

import SlotCounter from "react-slot-counter";

import React, { useEffect, useState } from "react";

export interface ICounter {
 // posts: IPosts[];
 // catInfo: IObj<s | null>;
}

export const Counter: FC<ICounter> = (
 {
  /* posts, catInfo */
 }
) => {
 return (
  <>
   <Section className="s-300">
    <Div className="s-300__fix fix">
     <Div className="grid-300">
      <Div className="info-caption">
       <Div className="info-caption__i">
        {/* <SlotCounter value={3800} duration={3} />+ */}
        3800+
       </Div>
       <Div className="info-caption__c">USER ACTIVE</Div>
      </Div>

      <I className="breaker"></I>
      <Div className="info-caption">
       <Div className="info-caption__i">
        {/* <SlotCounter value={230} duration={3} />+ */}
        230+
       </Div>
       <Div className="info-caption__c">TRUSTED BY COMPANY</Div>
      </Div>
      <I className="breaker"></I>
      <Div className="info-caption">
       <Div className="info-caption__i">
        {/* <SlotCounter value={230} duration={3} /> */}
        230M+
       </Div>
       <Div className="info-caption__c">TRANSACTION</Div>
      </Div>
     </Div>
    </Div>
   </Section>
  </>
 );
};
