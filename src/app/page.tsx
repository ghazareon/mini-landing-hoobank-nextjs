/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import type { ElementType, FC, HTMLAttributes, JSX, ReactNode } from "react";
import { Fragment } from "react";
import Link from "@/npm/next/link";
import { clsx } from "clsx";

import type { s, IObj, IObjNest, n, ICats } from "@/src/shared/types";
import type { CoreUiProps } from "@/src/app/components/electrons";

/* prettier-ignore */
import {
 CoreUi, Div, Main, Header, Footer, Section, Img, H1, P,
 H2, H3, Svg, Use, Span, Input, Form, Button, H4, Nav, Ul,
	Li, Figure, Figcaption, Article, Br, I, Label, Picture,
	Select, Source } from "@/src/app/components/electrons";

import { CoreEntity, SvgSprite, MainNav } from "@/src/app/components/molecules";

import {
 SocPages,
 Testimonials,
 Counter
} from "@/src/app/components/organisms";

import { Logo, Logo1Date } from "@/src/app/components/organisms";

import "@/src/shared/ui/assets/css/transpiled/tw-out.css";

import { SocPagesData } from "@/src/app/components/organisms/SocPages/SocPagesData";

import { cats, fetcher } from "@/src/shared/api";

import useSWR from "swr";

import { HomeClient, PageWrapper } from "@/src/app/components";

export default function Home() {

const data = await fetch('http://13.38.24.201/wp-json/wp/v2/categories?per_page=100');
  const posts = await data.json();

 return (
  <PageWrapper>
   <HomeClient />
  </PageWrapper>
 );
}
