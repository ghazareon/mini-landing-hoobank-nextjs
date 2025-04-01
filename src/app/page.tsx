/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */
"use client";

import type { ElementType, FC, HTMLAttributes, JSX, ReactNode } from "react";
import { useEffect } from "react";
import Link from "@/npm/next/link";
import { clsx } from "clsx";

import type { s, IObj, IObjNest, n, ICat700 } from "@/src/shared/types";
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

import { fetchCats, fetchPostsByCatId } from "@/src/shared/api";

export default function Home() {
 //
 // 	interface IGetCatBySlug {
 //   <T extends { slug: U }, U>(data: T[], slug: U): T;
 // }

 //  const getCatBySlug: IGetCatBySlug = async (data, slug) => data.filter((it) => it.slug === slug)[0];

 //  const catBySlug = await getCatBySlug<ICat700, s>(await fetchCats(), "testimonials");

 // console.log(catBySlug);

 // const catBySlug = (
 //  await getCatBySlug<ICat700, s>(await fetchCats(), "testimonials")
 // )[0];

 // console.log(catBySlug);

 /*  const cat = catBySlug;
 const catId = +cat.id;

 const catInfo = {
  title: cat.acf.long_title,
  descr: cat.description
 };

 const postsDataS700 = await fetchPostsByCatId(catId);

	*/

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
   <Div className="wrap__front">
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

    <Main>
     <Section className="s-200">
      <Div className="s-200__fix fix">
       <Div className="grid-200">
        <Div className="grid-200__it">
         <Div className="badge">
          <Div className="symbol" aria-hidden="true">
           <SvgSprite
            name="percent"
            width="9.19"
            height="9.19"
            className="symbol__front"
           />
           <SvgSprite
            name="shape-stamp"
            width="26.67"
            height="26.68"
            className="symbol__back"
           />
          </Div>
          <Div className="badge__txt">
           <Span className="text-white">20%</Span>&nbsp;DISCOUNT FOR
           <Span className="text-white">&nbsp;1 MONTH</Span> ACCOUNT
          </Div>
         </Div>
        </Div>
        <Div className="grid-200__it">
         <H1 className="main-title">
          <Img
           src="assets/svg/lighting/lighting-100__shape-1.svg"
           widrth="402.92"
           height="503.89"
           alt=""
           className="lighting-200"
          />
          The Next <Span>Generation</Span> Payment Method.
          <Link href="#" className="unique-btn" aria-label="Get Started button">
           <Span className="unique-btn__txt">
            Get
            <Br />
            Started
            <SvgSprite
             name="arrow-top-right"
             width="12.45"
             height="11.36"
             className="unique-btn__ic"
            />
           </Span>
          </Link>
         </H1>
        </Div>
        <Div className="grid-200__it">
         <P className="main-descr">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
         </P>

         <Div className="btn-cell">
          <Link
           href="#"
           className="btn btn--s-200"
           aria-label="get started button"
          >
           Get Started
          </Link>
         </Div>
        </Div>
        <Div className="grid-200__it">
         <Div className="collage-200" aria-hidden="true">
          <Div className="ball ball--1"></Div>
          <Div className="ball ball--2"></Div>
          <Div className="ball ball--3"></Div>

          <Img
           src="assets/svg/collage/1.svg"
           className="collage-200__img-1"
           width="386.32"
           height="223.24"
           loading="lazy"
           decoding="async"
           aria-hidden="true"
           alt=""
          />

          <Img
           src="assets/svg/collage/2.svg"
           className="collage-200__img-2"
           width="386.16"
           height="223.24"
           loading="lazy"
           decoding="async"
           aria-hidden="true"
           alt=""
          />

          <Img
           src="assets/svg/collage/3.svg"
           className="collage-200__img-3"
           width="379.81"
           height="219.58"
           loading="lazy"
           decoding="async"
           aria-hidden="true"
           alt=""
          />

          <Img
           alt=""
           loading="lazy"
           decoding="async"
           height="318"
           src="assets/img/hand/hand-1x.png"
           width="256"
           className="collage-200__img-4"
           aria-hidden="true"
           srcSet="assets/img/hand/hand-1x.webp,
																			assets/img/hand/hand-2x.webp 2x,
																			assets/img/hand/hand-3x.webp 3x,
																			assets/img/hand/hand-4x.webp 4x"
          />
         </Div>
        </Div>
       </Div>
      </Div>
     </Section>

     <Counter />

     <Section className="s-400">
      <Div className="s-400__fix fix">
       <Div className="grid-400">
        <Div className="grid-400__it">
         {/*  */}
         <Div className="collage-400" aria-hidden="true">
          <Div className="msg">
           <SvgSprite
            name="check"
            width="24"
            height="24"
            className="msg__check"
           />
           <Span className="msg__txt">Great! Your Payment is succesfully.</Span>
          </Div>

          <Div className="card card--405">
           <Div className="card__r">
            <Div className="card__t pb-[3.4rem]">Last Transaction</Div>
           </Div>

           <Div className="card__r">
            <Div className="card__g">
             <Img
              src="assets/svg/logo-transaction/dribbble.svg"
              widtgh="40"
              height="39.95"
              alt="paypal"
              className="transaction-logo"
             />
             <Div className="card__i">
              <Div className="card__t">Dribbble Pro</Div>
              <Div className="card__d">15 Days ago</Div>
             </Div>
            </Div>

            <Div className="card__val">
             <SvgSprite
              name="arr-rounded-down"
              width="12.45"
              height="11.36"
              className="transaction-quot text-red-100"
             />
             -$250,93
            </Div>
           </Div>

           <Div className="card__r">
            <Div className="card__g">
             <Img
              src="assets/svg/logo-transaction/netflix.svg"
              widtgh="40"
              height="39.95"
              alt="netflix"
              className="transaction-logo"
             />
             <Div className="card__i">
              <Div className="card__t">Netflix</Div>
              <Div className="card__d">4 Days ago</Div>
             </Div>
            </Div>

            <Div className="card__val">
             <SvgSprite
              name="arr-rounded-down"
              width="12.45"
              height="11.36"
              className="transaction-quot text-red-100"
             />
             -$250,93
            </Div>
           </Div>

           <Div className="card__r">
            <Div className="card__g">
             <Img
              src="assets/svg/logo-transaction/manulife-cash.svg"
              widtgh="40"
              height="39.95"
              alt="netflix"
              className="transaction-logo"
             />
             <Div className="card__i">
              <Div className="card__t">Manulife Cash</Div>
              <Div className="card__d">4 Days ago</Div>
             </Div>
            </Div>

            <Div className="card__val">
             <SvgSprite
              name="arr-rounded-down"
              width="12.45"
              height="11.36"
              className="transaction-quot text-red-100"
             />
             -$250,93
            </Div>
           </Div>
          </Div>

          <Div className="card card--400">
           <Div className="card__r card__r--400 items-center pb-[2rem]">
            <Div className="card__rounded-logo">
             <Img
              src="assets/svg/logos-pay/paypal.svg"
              width="24.03"
              height="27.33"
              alt="paypal"
             />
            </Div>
            <Div className="group-card-400">
             <Div className="card__t">Paypal</Div>
             <Div className="card__d">Checkout</Div>
            </Div>
           </Div>

           <Div className="card__r pb-[2rem]">
            <Div className="group-card-405">
             <Div className="card__d">Total</Div>
             <Div className="card__t">$210</Div>
            </Div>
            <Link href="#" className="outline-btn">
             Change
            </Link>
           </Div>

           <Div className="card__r">
            <Link href="#" className="btn btn--long" aria-label="Make Payment">
             Make Payment
            </Link>
           </Div>
          </Div>
         </Div>
         {/*  */}
        </Div>
        <Div className="grid-400__it">
         <H2 className="s__t">Easily control your billing & invoicing.</H2>
        </Div>
        <Div className="grid-400__it">
         <P className="s__d">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
         </P>
        </Div>
        <Div className="grid-400__it">
         <Div className="app-store-btns">
          <Link
           href="#"
           className="app-store-btn"
           target="_blank"
           aria-label="Link to download the application for installation on a mobile device from the App Store"
          >
           <Img
            src="assets/svg/logos/app-store.svg"
            width="108.75"
            height="27.53"
            alt=""
            className="btn-img btn-img--app-store"
           />
          </Link>
          <Link
           href="#"
           className="app-store-btn"
           target="_blank"
           aria-label="Link to download the application for installation on a mobile device from the Google Play"
          >
           <Img
            src="assets/svg/logos/google-play.svg"
            width="101.25"
            height="24.2"
            alt=""
            className="btn-img btn-img--google-play"
           />
          </Link>
         </Div>
        </Div>
        <Div className="grid-400__it"></Div>
       </Div>
      </Div>
     </Section>

     <Section className="s-500">
      <Div className="s-500__fix fix">
       <Div className="grid-500">
        <Div className="grid-500__it">
         <H2 className="s__t s__t--s-500">
          You do the business, we’ll handle the money.
         </H2>
        </Div>

        <Div className="grid-500__it">
         <P className="s__d s__d--s-500">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
         </P>
        </Div>

        <Div className="grid-500__it">
         <Link
          href="#"
          className="btn btn--s-500"
          aria-label="get started button"
         >
          Get Started
         </Link>
        </Div>
        <Div className="grid-500__it">
         <Div className="group-500">
          <Div className="box-500">
           <Div className="box-500__c box-500__c--1">
            <Div className="icon-box">
             <Img
              src="assets/svg/icons/star.svg"
              width="32"
              height="30.4"
              alt=""
              className="icon-box__img"
             />
            </Div>
           </Div>
           <Div className="box-500__c box-500__c--2">
            <H3 className="box-500__t">Rewards</H3>
            <P className="box-500__d">
             The best credit cards offer some tantalizing combinations of
             promotions and prizes
            </P>
           </Div>
          </Div>

          <Div className="box-500">
           <Div className="box-500__c box-500__c--1">
            <Div className="icon-box">
             <Img
              src="assets/svg/icons/transfer.svg"
              width="32"
              height="32"
              alt=""
              className="icon-box__img"
             />
            </Div>
           </Div>
           <Div className="box-500__c box-500__c--2">
            <H3 className="box-500__t">100% Secured</H3>
            <P className="box-500__d">
             We take proactive steps make sure your information and transactions
             are secure.
            </P>
           </Div>
          </Div>

          <Div className="box-500">
           <Div className="box-500__c box-500__c--1">
            <Div className="icon-box">
             <Img
              src="assets/svg/icons/secure.svg"
              width="27.19"
              height="32"
              alt=""
              className="icon-box__img"
             />
            </Div>
           </Div>
           <Div className="box-500__c box-500__c--2">
            <H3 className="box-500__t">Balance Transfer</H3>
            <P className="box-500__d">
             A balance transfer credit card can save you a lot of money in
             interest charges.
            </P>
           </Div>
          </Div>
         </Div>
        </Div>
       </Div>
      </Div>
     </Section>

     <Section className="s-600">
      <Div className="s-600__fix fix">
       <Div className="grid-600">
        <Div className="grid-600__it">
         <H2 className="s__t">Find a better card deal in few easy steps.</H2>
        </Div>
        <Div className="grid-600__it">
         <P className="s__d">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor. Aliquet ultrices ac, ametau.
         </P>
        </Div>
        <Div className="grid-600__it">
         <Link
          href="#"
          className="btn btn--s-200"
          aria-label="get started button"
         >
          Get Started
         </Link>
        </Div>
        <Div className="grid-600__it"></Div>
        <Div className="grid-600__it">
         <Div className="collage-600" aria-hidden="true">
          <Div className="card card--600">
           <Span className="symbol-600">
            <SvgSprite className="scan" name="scan" width="22" height="18.01" />
           </Span>
           <H3 className="card__t">Scan Credit Cards</H3>
           <P className="card__d">Scan yourcredit card in 4 minutes.</P>
          </Div>

          <Div className="card card--605">
           <Div className="card__r">
            <H3 className="card__t">Online Analysis</H3>
            <P className="card__d">
             1 Month
             <SvgSprite
              name="arr-down"
              width="5.83"
              height="2.92"
              className="arr-down"
             />
            </P>
           </Div>

           <Div className="card__r">
            <Div className="present-info text-green-100">
             <Span className="present-info__t">$ 2,334,67</Span>
             <Span className="present-info__d">Income</Span>
            </Div>

            <Div className="present-info text-aqua-300">
             <Span className="present-info__t">$ 5.31M</Span>
             <Span className="present-info__d">Expenses</Span>
            </Div>
           </Div>

           <Div className="py-[1.7rem]">
            <Img
             src="assets/svg/diagram.svg"
             width="215.02"
             height="64.5"
             alt=""
             className="diagram"
            />
           </Div>

           <Div className="list-605">
            <Span className="list-605__it">Jan</Span>
            <Span className="list-605__it">Feb</Span>
            <Span className="list-605__it">Mar</Span>
            <Span className="list-605__it">Apr</Span>
            <Span className="list-605__it">May</Span>
            <Span className="list-605__it">Jun</Span>
            <Span className="list-605__it">Jul</Span>
           </Div>
          </Div>

          <Div className="card card--610">
           <Div className="card__r">
            <H3 className="card__t">Pay Method</H3>
            <SvgSprite
             name="arr-down"
             width="10"
             height="5"
             className="arr-down"
            />
           </Div>

           <Div className="list-logos-610">
            <Div className="box-logo">
             <Img
              src="assets/svg/logos-pay/paypal.svg"
              alt="paypal"
              width="24"
              height="27.32"
             />
            </Div>
            <Div className="box-logo">
             <Img
              src="assets/svg/logos-pay/apple.svg"
              alt="apple"
              width="20.49"
              height="24.01"
             />
            </Div>
            <Div className="box-logo">
             <Img
              src="assets/svg/logos-pay/visa.svg"
              alt="visa"
              width="32"
              height="9.7"
             />
            </Div>
            <Div className="box-logo">
             <Img
              src="assets/svg/logos-pay/shopify.svg"
              alt="shopify"
              width="36.92"
              height="10.53"
             />
            </Div>
           </Div>
          </Div>

          <Img
           src="assets/svg/rings-bg.svg"
           width="535"
           height="454"
           className="rings"
          />
         </Div>
        </Div>
       </Div>
      </Div>
     </Section>

     <Testimonials />

     <Section className="s-800">
      <Div className="s-800__fix fix">
       <Div className="grid-800">
        <Img
         src="assets/svg/logos/airbnb.svg"
         width="192.21"
         height="59.99"
         alt="airbnb"
         className="logo-it logo-it--airbnb"
        />
        <Img
         src="assets/svg/logos/binance.svg"
         width="192.24"
         height="38.63"
         alt="binance"
         className="logo-it logo-it--binance"
        />
        <Img
         src="assets/svg/logos/coinbase.svg"
         width="189.01"
         height="41.25"
         alt="coinbase"
         className="logo-it logo-it--coinbase"
        />
        <Img
         src="assets/svg/logos/dropbox.svg"
         width="192.25"
         height="37.86"
         alt="dropbox"
         className="logo-it logo-it--dropbox"
        />
       </Div>

       {/* <Div className="pagination">
        <Div className="pagination__it pagination__it--current"></Div>
        <Div className="pagination__it"></Div>
        <Div className="pagination__it"></Div>
       </Div> */}
      </Div>
     </Section>

     <Section className="s-900">
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
    </Main>

    <Footer>
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
          <Img
           src="assets/svg/logo-2.svg"
           alt=""
           width="264.79"
           height="72.14"
          />
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

     <Section className="s-1100">
      <Div className="s-1100__fix fix">
       <I className="break-line"></I>
       <Div className="grid-1100">
        <Div className="s-1100__txt">
         © 2021-{new Date().getFullYear()}&nbsp;
         <Span className="logo-txt">
          <Span className="logo-txt__p1">Hoo</Span>
          <Span className="logo-txt__p2">Bank</Span>.
         </Span>
         <Br />
         All Rights Reserved.
        </Div>

        <Div className="soc-pages">
         <Link
          href="#"
          className="soc-page soc-page--inst"
          aria-label="instagram page company"
         >
          <Img
           src="assets/svg/icons/inst.svg"
           width="21"
           height="21"
           alt=""
           className="soc-page__ic soc-page__ic--inst"
          />
         </Link>

         <Link
          href="#"
          className="soc-page soc-page--fb"
          aria-label="facebook page company"
         >
          <Img
           src="assets/svg/icons/fb.svg"
           width="21"
           height="21"
           alt=""
           className="soc-page__ic soc-page__ic--fb"
          />
         </Link>

         <Link
          href="#"
          className="soc-page soc-page--tw"
          aria-label="twitter page company"
         >
          <Img
           src="assets/svg/icons/tw.svg"
           width="23"
           height="19"
           alt=""
           className="soc-page__ic soc-page__ic--tw"
          />
         </Link>

         <Link
          href="#"
          className="soc-page soc-page--tw"
          aria-label="facebook page linkedin"
         >
          <Img
           src="assets/svg/icons/in.svg"
           width="20.99"
           height="20.99"
           alt=""
           className="soc-page__ic soc-page__ic--in"
          />
         </Link>
        </Div>
       </Div>
      </Div>
     </Section>
    </Footer>
   </Div>
   <Div className="wrap__back" aria-hidden="true">
    <Div className="lighting-500">
     <Img
      src="assets/svg/lighting/lighting-500__shape-1.svg"
      alt=""
      width="532"
      height="526"
      className="lighting-500__shape-1"
     />

     <Img
      src="assets/svg/lighting/lighting-500__shape-2.svg"
      alt=""
      width="530.85"
      height="524.32"
      className="lighting-500__shape-2"
     />
    </Div>

    <Div className="lighting-400">
     <Img
      src="assets/svg/lighting/lighting-400__shape-1.svg"
      alt=""
      width="532"
      height="526"
      className="lighting-400__shape-1"
     />

     <Img
      src="assets/svg/lighting/lighting-400__shape-2.svg"
      alt=""
      width="514"
      height="360"
      className="lighting-400__shape-2"
     />
    </Div>

    <Div className="lighting-300">
     <Img
      src="assets/svg/lighting/lighting-300__shape-1.svg"
      alt=""
      width="630.45"
      height="549.01"
      className="lighting-300__shape-1"
     />
     <Img
      src="assets/svg/lighting/lighting-300__shape-2.svg"
      alt=""
      width="412.2"
      height="500.2"
      className="lighting-300__shape-2"
     />
     <Img
      src="assets/svg/lighting/lighting-300__shape-3.svg"
      alt=""
      width="405.26"
      height="470.8"
      className="lighting-300__shape-3"
     />
    </Div>

    <Div className="lighting-100">
     <Img
      src="assets/svg/lighting/lighting-100__shape-1.svg"
      alt=""
      width="402.92"
      height="503.89"
      className="lighting-100__shape-1"
     />
     <Img
      src="assets/svg/lighting/lighting-100__shape-4.svg"
      alt=""
      width="630.46"
      height="559.12"
      className="lighting-100__shape-4"
     />

     <Img
      src="assets/svg/lighting/lighting-100__shape-3.svg"
      alt=""
      width="405"
      height="471"
      className="lighting-100__shape-3"
     />

     <Img
      src="assets/svg/lighting/lighting-100__shape-2.svg"
      alt=""
      width="578"
      height="571"
      className="lighting-100__shape-2"
     />
    </Div>
   </Div>
  </Div>
 );
}
