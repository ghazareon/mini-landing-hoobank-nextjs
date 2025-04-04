/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import type { ElementType, FC, HTMLAttributes, JSX, ReactNode } from "react";
import { Fragment } from "react";
import Link from "@/npm/next/link";
import { clsx } from "clsx";

import type { s, IObj, IObjNest, n, ICat, IPost } from "@/src/shared/types";
import type { CoreUiProps } from "@/src/app/components/electrons";

/* prettier-ignore */
import {
 CoreUi, Div, Main, Header, Footer, Section, Img, H1, P,
 H2, H3, Svg, Use, Span, Input, Form, Button, H4, Nav, Ul,
	Li, Figure, Figcaption, Article, Br, I, Label, Picture,
	Select, Source } from "@/src/app/components/electrons";

import { CoreEntity, SvgSprite, MainNav } from "@/src/app/components/molecules";

import { SocPages, S700, S300 } from "@/src/app/components/organisms";

import { Logo, Logo1Date } from "@/src/app/components/organisms";

import "@/src/shared/ui/assets/css/transpiled/tw-out.css";

import { SocPagesData } from "@/src/app/components/organisms/SocPages/SocPagesData";

import {
 catsUrl,
 postsUrl,
 rootUrl,
 selectCatBySlug,
 fetchCatBySlug,
 fetchPostsByCatId
} from "@/src/shared/api";

import { HomeClient, PageWrapper } from "@/src/app/components";

export default async function Home() {

 const testimonialsData = async () => {
  const cat = await fetchCatBySlug(catsUrl, "testimonials");
  const posts = await fetchPostsByCatId(postsUrl, cat.id);

  return {
   cat,
   posts
  };
 };

 const countersData = async () => {
  const cat = await fetchCatBySlug(catsUrl, "counter");
  const posts = await fetchPostsByCatId(postsUrl, cat.id);

  return {
   cat,
   posts
  };
 };


 return (
  <PageWrapper>
   <HomeClient
    data={{
     testimonialsData: await testimonialsData(),
     countersData: await countersData()
    }}
   />
  </PageWrapper>
 );
}
