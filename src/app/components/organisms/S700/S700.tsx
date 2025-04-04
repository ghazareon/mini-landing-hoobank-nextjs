/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

"use client";

import type { FC } from "@/npm/@types/react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { removeHtmlTagsFromStr } from "@/src/shared/utils/removeHtmlTagsFromStr";
import { truncateStr } from "@/src/shared/utils/truncateStr";
import { SvgSprite } from "@/src/app/components/molecules";

/* prettier-ignore */
import { Div, Section, P,
									H2, H3, Article,
									Img}    from "@/src/app/components/electrons";

import type { IObj, s, IPost, ICat } from "@/src/shared/types";

import "../../../../../node_modules/swiper/swiper.css";

export interface IS700 {
 data: {
  cat: ICat;
  posts: IPost[];
 };
}

export const S700: FC<IS700> = ({ data }) => {
 return (
  <>
   <Section className="s-700">
    <Div className="s-700__fix fix">
     <Div className="grid-700">
      <H2 className="s__t s__t--s-700">{data.cat.acf.long_title}</H2>
      <P className="s__d s__d--s-700">{data.cat.description}</P>
     </Div>

     <Div className="grid-705">
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
       <SwiperSlide>
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
       </SwiperSlide>

       <SwiperSlide>
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
       </SwiperSlide>

       <SwiperSlide>
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
       </SwiperSlide>

       <SwiperSlide>
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
       </SwiperSlide>

       <SwiperSlide>
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
       </SwiperSlide>

       <SwiperSlide>
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
       </SwiperSlide>
      </Swiper>
     </Div>

     {/*
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
       {posts?.map((it: IPost) => {
        return (
         <SwiperSlide key={it.id}>
          <Article className="box-700">
           <SvgSprite
            name="quote"
            width="42.6"
            height="27.6"
            className="box-700__svg"
           />
           <Div className="s__d s__d--s-700">
            {truncateStr(removeHtmlTagsFromStr(it.excerpt.rendered as s), 103)}
           </Div>
           <Div className="img-info">
            <Div className="img-info__c img-info__c--1">
             <Img
              src={it.featured_media_src_url}
              width="48"
              height="48"
              alt=""
              className="img-info__img"
             />
            </Div>
            <Div className="img-info__c img-info__c--2">
             <H3 className="img-info__t">{it.title.rendered}</H3>
             <Div className="img-info__d">
              {truncateStr(
               removeHtmlTagsFromStr(it.acf.position_of_a_person as s),
               27
              )}
             </Div>
            </Div>
           </Div>
          </Article>
         </SwiperSlide>
        );
       })}
      </Swiper>
     </Div>

					 */}
    </Div>
   </Section>
  </>
 );
};
