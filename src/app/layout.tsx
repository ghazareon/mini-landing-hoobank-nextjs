/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import type { CoreUiProps } from "@/src/app/components/electrons";
import type { n, s } from "@/src/shared/types";

import { clsx } from "clsx";

import {
 Html,
 Head,
 Body,
 Title,
 Noscript
} from "@/src/app/components/electrons";

import { MetaHead } from "@/src/app/components/templates";
import { metaTagsNext } from "@/src/shared/data/headMeta";
import appDb from "@/src/shared/data/appDb.json";
import { Fonts } from "@/src/app/nextFonts";

// import { Scrollbar } from "smooth-scrollbar-react";

export const metadata: Metadata = {
 title: "",
 description: ""
};

export const viewport: Viewport = {
 width: "device-width",
 height: "device-height",
 initialScale: 1,
 minimumScale: 1,
 maximumScale: 1,
 userScalable: false,
 themeColor: appDb.appThemeColor,
 colorScheme: "light"
};

export default function RootLayout({
 children
}: Readonly<{
 children: ReactNode;
}>) {
 return (
  <Html lang="en">
   <Head>
    <MetaHead data={metaTagsNext} />
    <Title>{appDb.appName}</Title>
   </Head>
   <Body className={Fonts.variable}>
    <Noscript></Noscript>
    {children}
   </Body>
  </Html>
 );
}
