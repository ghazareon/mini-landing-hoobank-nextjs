/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */
"use client";

import type { FC, ReactNode } from "@/npm/@types/react";
import { useEffect, useState } from "react";

/* prettier-ignore */
import { Div, Section, P,
									H2, H3, Article,
									Img,
									I}    from "@/src/app/components/electrons";

import type { IObj, s, IPost } from "@/src/shared/types";

export interface PageWrapperProps {
 children?: ReactNode;
}

export const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
 useEffect(() => {
  let scroll: import("locomotive-scroll");
  import("locomotive-scroll").then((locomotiveModule) => {
   scroll = new locomotiveModule.default({
    el: document.querySelector("[data-scroll-container]") as HTMLElement,
    smooth: true,
    resetNativeScroll: true
   });
  });

  return () => {
   if (scroll) scroll.destroy();
  };
 });

 return (
  <Div className="wrap" data-scroll-container>
   {children}
  </Div>
 );
};
