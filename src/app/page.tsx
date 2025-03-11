/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import type { ElementType, FC, HTMLAttributes, JSX, ReactNode } from "react";
import Link from "@/npm/next/link";
import { clsx } from "clsx";

import type { s, IObj, IObjNest, n, CatIt } from "@/src/shared/types";
import type { CoreUiProps } from "@/src/app/components/electrons";

/* prettier-ignore */
import {
 CoreUi, Div, Main, Header, Footer, Section, Img, H1, P,
 H2, H3, Svg, Use, Span, Input, Form, Button, H4, Nav, Ul,
	Li, Figure, Figcaption, Article, Br, I, Label, Picture,
	Select, Source } from "@/src/app/components/electrons";

import { CoreEntity, SvgSprite } from "@/src/app/components/molecules";

import { SocPages, Testimonials } from "@/src/app/components/organisms";

import { Logo, Logo1Date } from "@/src/app/components/organisms";

import "@/src/shared/ui/assets/css/transpiled/tw-out.css";

import { SocPagesData } from "@/src/app/components/organisms/SocPages/SocPagesData";

const fetchCats = async (name: s = "categories", quantity: n = 100) => {
 const res = await fetch(
  `${process.env.DB_HOST}/${process.env.REST_PATH}/${name}?per_page=${quantity}`,
  { cache: "no-store" }
 );
 return res.json();
};

/* `${process.env.DB_HOST}/${process.env.REST_PATH}/${"categories"}?per_page=100`, */

/*
const fetchPostByCatId = async (id: n) => {
 const res = await fetch(
  `${process.env.DB_HOST}/${process.env.REST_PATH}/posts?categories=${id}&per_page=100`,
  { cache: "no-store" }
 );
 return res.json();
};

const getCatBySlug = (data: CatIt[], slug: s) =>
 data.filter((it) => it.slug === slug);
*/

export default async function Home() {
 /*  const cat = getCatBySlug(await fetchCats(), "testimonials")[0];

 const catInfo = {
  title: !Array.isArray(cat.acf) ? cat.acf.long_title : null,
  descr: cat.description
 };

 const posts = await fetchPostByCatId(+cat.id);  */
 // const d = await fetchCats();
 return (
  <Div className="wrap">
   <Main>
    <Section className="s-200">
     <Div className="s-200__fix fix">
      <Div className="grid-200">
       <Div className="grid-200__it">
        <Div className="badge">
         <Div className="symbol">
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
          <Span className="text-white">20%</Span> DISCOUNT FOR
          <Span className="text-white">&nbsp;1 MONTH</Span> ACCOUNT
         </Div>
        </Div>
       </Div>
       <Div className="grid-200__it">
        <H1 className="main-title">
         {`${process.env.DB_HOST}/${process.env.REST_PATH}/${"categories"}?per_page=100`}
         {process.env.DB_HOST} The Next <Span>Generation</Span> Payment Method.
         <Link href="#" className="unique-btn">
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

        <Div className="app-store-btns">
         <Link href="#" className="app-store-btn" target="_blank">
          <Img
           src="assets/svg/logos/app-store.svg"
           width="108.75"
           height="27.53"
           className="btn-img btn-img--app-store"
          />
         </Link>
         <Link href="#" className="app-store-btn" target="_blank">
          <Img
           src="assets/svg/logos/google-play.svg"
           width="101.25"
           height="24.2"
           className="btn-img btn-img--google-play"
          />
         </Link>
        </Div>

        <Div className="btn-cell">
         <Link href="#" className="btn btn--s-200">
          Get Started
         </Link>
        </Div>
       </Div>
       <Div className="grid-200__it">
        <Div className="collage-200">
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
         />

         <Img
          src="assets/svg/collage/2.svg"
          className="collage-200__img-2"
          width="386.16"
          height="223.24"
          loading="lazy"
          decoding="async"
         />

         <Img
          src="assets/svg/collage/3.svg"
          className="collage-200__img-3"
          width="379.81"
          height="219.58"
          loading="lazy"
          decoding="async"
         />

         <Img
          alt=""
          loading="lazy"
          decoding="async"
          height="318"
          src="assets/img/hand/hand-1x.png"
          width="256"
          className="collage-200__img-4"
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

    <Section className="s-300">
     <Div className="s-300__fix fix">
      <Div className="grid-300">
       <Div className="info-caption">
        <Div className="info-caption__i">3800+</Div>
        <Div className="info-caption__c">USER ACTIVE</Div>
       </Div>
       <I className="breaker"></I>
       <Div className="info-caption">
        <Div className="info-caption__i">230+</Div>
        <Div className="info-caption__c">TRUSTED BY COMPANY</Div>
       </Div>
       <I className="breaker"></I>
       <Div className="info-caption">
        <Div className="info-caption__i">$230M+</Div>
        <Div className="info-caption__c">TRANSACTION</Div>
       </Div>
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
         building credit, earning rewards and saving money. But with hundreds of
         credit cards on the market.
        </P>
       </Div>

       <Div className="grid-500__it">
        <Link href="#" className="btn btn--s-500">
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
        <Link href="#" className="btn btn--s-200">
         Get Started
        </Link>
       </Div>
       <Div className="grid-600__it"></Div>
       <Div className="grid-600__it">
        <Div className="collage-600">
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
             alt="paypal"
             width="20.49"
             height="24.01"
            />
           </Div>
           <Div className="box-logo">
            <Img
             src="assets/svg/logos-pay/visa.svg"
             alt="paypal"
             width="32"
             height="9.7"
            />
           </Div>
           <Div className="box-logo">
            <Img
             src="assets/svg/logos-pay/shopify.svg"
             alt="paypal"
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

    <Section className="s-700">
     <Div className="s-700__fix fix">
      <Div className="grid-700">
       <H2 className="s__t s__t--s-700">What people ares aying about us</H2>
       <P className="s__d s__d--s-700">
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
       </P>
      </Div>

      <Div className="grid-700-v2">
       <Article className="box-700">
        <SvgSprite
         name="quote"
         width="42.6"
         height="27.6"
         className="box-700__svg"
        />

        <Div className="s__d s__d--s-700">
         Money is only a tool. It will take you wherever you wish, but it will
         not replace you as the driver.
        </Div>

        <Div className="img-info">
         <Div className="img-info__c img-info__c--1"></Div>
         <Div className="img-info__c img-info__c--2">
          <H3 className="img-info__t">Herman Jensen</H3>
          <P className="img-info__d">Founder & Leader</P>
         </Div>
        </Div>
       </Article>
       <Article className="box-700">
        <SvgSprite
         name="quote"
         width="42.6"
         height="27.6"
         className="box-700__svg"
        />
        <Div className="s__d s__d--s-700">
         Money is only a tool. It will take you wherever you wish, but it will
         not replace you as the driver.
        </Div>

        <Div className="img-info">
         <Div className="img-info__c img-info__c--1"></Div>
         <Div className="img-info__c img-info__c--2">
          <H3 className="img-info__t">Herman Jensen</H3>
          <P className="img-info__d">Founder & Leader</P>
         </Div>
        </Div>
       </Article>
       <Article className="box-700">
        <SvgSprite
         name="quote"
         width="42.6"
         height="27.6"
         className="box-700__svg"
        />
        <Div className="s__d s__d--s-700">
         Money is only a tool. It will take you wherever you wish, but it will
         not replace you as the driver.
        </Div>

        <Div className="img-info">
         <Div className="img-info__c img-info__c--1"></Div>
         <Div className="img-info__c img-info__c--2">
          <H3 className="img-info__t">Herman Jensen</H3>
          <P className="img-info__d">Founder & Leader</P>
         </Div>
        </Div>
       </Article>
      </Div>
     </Div>
    </Section>

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
        alt="logo coinbase"
        className="logo-it logo-it--coinbase"
       />
       <Img
        src="assets/svg/logos/dropbox.svg"
        width="192.25"
        height="37.86"
        alt="logo dropbox"
        className="logo-it logo-it--dropbox"
       />
      </Div>

      <Div className="pagination">
       <Div className="pagination__it pagination__it--current"></Div>
       <Div className="pagination__it"></Div>
       <Div className="pagination__it"></Div>
      </Div>
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

        <Link href="#" className="btn">
         Get Started
        </Link>
       </Div>
      </Div>
     </Div>
    </Section>
   </Main>

   <Footer className="">
    <Section className="s-1000">
     <Div className="s-1000__fix fix">
      <I className="break-line"></I>

      <Div className="grid-1000">
       <Div className="grid-1000__it">
        <Link href="#" className="logo logo--2">
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
        <H4 className="h4-1000 h4-1000--s-1000">Usefull Links</H4>
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
        <H4 className="h4-1000 h4-1000--s-1000">Community</H4>

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
        <H4 className="h4-1000 h4-1000--s-1000">Partner</H4>
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
        <Link href="#" className="soc-page soc-page--inst">
         <Img
          src="assets/svg/icons/inst.svg"
          width="21"
          height="21"
          alt=""
          className="soc-page__ic soc-page__ic--inst"
         />
        </Link>

        <Link href="#" className="soc-page soc-page--fb">
         <Img
          src="assets/svg/icons/fb.svg"
          width="21"
          height="21"
          alt=""
          className="soc-page__ic soc-page__ic--fb"
         />
        </Link>

        <Link href="#" className="soc-page soc-page--tw">
         <Img
          src="assets/svg/icons/tw.svg"
          width="23"
          height="19"
          alt=""
          className="soc-page__ic soc-page__ic--tw"
         />
        </Link>

        <Link href="#" className="soc-page soc-page--tw">
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
 );
}
