"use client";
/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */
import { FC } from "@/npm/@types/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "../../../../../node_modules/swiper/swiper.css";

import { SvgSprite } from "@/src/app/components/molecules";

/* prettier-ignore */
import {
 CoreUi, Div, Main, Header, Footer, Section, Img, H1, P,
 H2, H3, Svg, Use, Span, Input, Form, Button, H4, Nav, Ul,
	Li, Figure, Figcaption, Article, Br, I, Label, Picture,
	Select, Source } from "@/src/app/components/electrons";
import { IObj, n, s, CatIt } from "@/src/shared/types";

export interface ITestimonials {
 posts: CatIt[];
 catInfo: IObj<s | null>;
}

export const Testimonials: FC<ITestimonials> = ({ posts, catInfo }) => {
 return (
  <>
   <Section className="s-700">
    <Div className="s-700__fix fix">
     <Div className="grid-700">
      <H2 className="s__t s__t--s-700">{catInfo.title}</H2>
      <P className="s__d s__d--s-700">{catInfo.descr}</P>
     </Div>

     <Div className="grid-700-v2">
      <Swiper
       slidesPerView={1}
       spaceBetween={30}
       pagination={{
        clickable: true
       }}
       breakpoints={{
        468: {
         slidesPerView: 1,
         spaceBetween: 20
        },
        768: {
         slidesPerView: 2,
         spaceBetween: 30
        },
        1024: {
         slidesPerView: 3,
         spaceBetween: 30
        }
       }}
       modules={[Pagination]}
       className="mySwiper"
      >
       {posts?.map((it: CatIt) => {
        return (
         <SwiperSlide key={it.id}>
          <Article className="box-700">
           <SvgSprite
            name="quote"
            width="42.6"
            height="27.6"
            className="box-700__svg"
           />

           <Div className="s__d s__d--s-700">{it.excerpt.rendered}</Div>

           <Div className="img-info">
            <Div className="img-info__c img-info__c--1"></Div>
            <Div className="img-info__c img-info__c--2">
             <H3 className="img-info__t">Herman Jensen</H3>
             <P className="img-info__d">Founder & Leader</P>
            </Div>
           </Div>
          </Article>
         </SwiperSlide>
        );
       })}
      </Swiper>
     </Div>
    </Div>
   </Section>
  </>
 );
};
