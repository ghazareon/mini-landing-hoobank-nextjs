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

import "../../../../../node_modules/swiper/swiper.min.css";
import "../../../../../node_modules/swiper/swiper-bundle.css";

export interface IS700 {
 data: {
  cat: ICat;
  posts: IPost[];
 };
}

export const S700: FC<IS700> = ({ data }) => {
 return (
  <>
   <Section className="s-700" id="testimonials">
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
        clickable: true,
        el: ".custom-swiper-pagination",
        type: "bullets"
       }}
       breakpoints={{
        468: {
         slidesPerView: 1,
         spaceBetween: 30
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
       {data.posts.map((it, i) => (
        <SwiperSlide key={it.id}>
         <Article className="box-700">
          <SvgSprite
           name="quote"
           width="42.6"
           height="27.6"
           className="box-700__svg"
          />
          <Div className="s__d s__d--s-700">
           {truncateStr(removeHtmlTagsFromStr(it.content.rendered), 150)}
          </Div>
          <Div className="img-info">
           <Div className="img-info__c img-info__c--1">
            <Img
             src={it.featured_media_src_url}
             width="48"
             height="48"
             alt=""
            />
           </Div>
           <Div className="img-info__c img-info__c--2">
            <H3 className="img-info__t">{it.title.rendered}</H3>
            <P className="img-info__d">
             {removeHtmlTagsFromStr(it.acf.position_of_a_person)}
            </P>
           </Div>
          </Div>
         </Article>
        </SwiperSlide>
       ))}
      </Swiper>

      <Div className="w-full pt-[2.5rem] text-center">
       <Div className="custom-swiper-pagination"></Div>
      </Div>
     </Div>
    </Div>
   </Section>
  </>
 );
};
