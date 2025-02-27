"use client";
/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */
import { FC } from "@/npm/@types/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "../../../../../node_modules/swiper/swiper.css";

import { Div, P, Span } from "@/src/app/components/electrons";
import { SvgSprite } from "@/src/app/components/molecules";

export interface ITestimonials {}

export const Testimonials: FC<ITestimonials> = () => {
 return (
  <>
   <Div className="list-700">
    <Swiper
     slidesPerView={3}
     spaceBetween={30}
     pagination={{
      clickable: true
     }}
     modules={[Pagination]}
     className=""
    >
     <SwiperSlide>
      <Div className="box-700">
       <SvgSprite
        svgName="quote"
        width="42.6"
        height="27.6"
        className="box-700__svg"
       />
       <P className="box-700__d">
        Money is only a tool. It will take you wherever you wish, but it will
        not replace you as the driver.
       </P>

       <Div className="img-info">
        <Span className="img-info__im"></Span>
        <Span className="img-info__in">
         <Span className="img-info__in-t">Herman Jensen</Span>
         <Span className="img-info__in-d">Founder & Leader</Span>
        </Span>
       </Div>
      </Div>
     </SwiperSlide>
     <SwiperSlide>
      <Div className="box-700">
       <SvgSprite
        svgName="quote"
        width="42.6"
        height="27.6"
        className="box-700__svg"
       />
       <P className="box-700__d">
        Money is only a tool. It will take you wherever you wish, but it will
        not replace you as the driver.
       </P>

       <Div className="img-info">
        <Span className="img-info__im"></Span>
        <Span className="img-info__in">
         <Span className="img-info__in-t">Herman Jensen</Span>
         <Span className="img-info__in-d">Founder & Leader</Span>
        </Span>
       </Div>
      </Div>
     </SwiperSlide>
     <SwiperSlide>
      <Div className="box-700">
       <SvgSprite
        svgName="quote"
        width="42.6"
        height="27.6"
        className="box-700__svg"
       />
       <P className="box-700__d">
        Money is only a tool. It will take you wherever you wish, but it will
        not replace you as the driver.
       </P>

       <Div className="img-info">
        <Span className="img-info__im"></Span>
        <Span className="img-info__in">
         <Span className="img-info__in-t">Herman Jensen</Span>
         <Span className="img-info__in-d">Founder & Leader</Span>
        </Span>
       </Div>
      </Div>
     </SwiperSlide>
     <SwiperSlide>
      <Div className="box-700">
       <SvgSprite
        svgName="quote"
        width="42.6"
        height="27.6"
        className="box-700__svg"
       />
       <P className="box-700__d">
        Money is only a tool. It will take you wherever you wish, but it will
        not replace you as the driver.
       </P>

       <Div className="img-info">
        <Span className="img-info__im"></Span>
        <Span className="img-info__in">
         <Span className="img-info__in-t">Herman Jensen</Span>
         <Span className="img-info__in-d">Founder & Leader</Span>
        </Span>
       </Div>
      </Div>
     </SwiperSlide>
     <SwiperSlide>
      <Div className="box-700">
       <SvgSprite
        svgName="quote"
        width="42.6"
        height="27.6"
        className="box-700__svg"
       />
       <P className="box-700__d">
        Money is only a tool. It will take you wherever you wish, but it will
        not replace you as the driver.
       </P>

       <Div className="img-info">
        <Span className="img-info__im"></Span>
        <Span className="img-info__in">
         <Span className="img-info__in-t">Herman Jensen</Span>
         <Span className="img-info__in-d">Founder & Leader</Span>
        </Span>
       </Div>
      </Div>
     </SwiperSlide>
     <SwiperSlide>
      <Div className="box-700">
       <SvgSprite
        svgName="quote"
        width="42.6"
        height="27.6"
        className="box-700__svg"
       />
       <P className="box-700__d">
        Money is only a tool. It will take you wherever you wish, but it will
        not replace you as the driver.
       </P>

       <Div className="img-info">
        <Span className="img-info__im"></Span>
        <Span className="img-info__in">
         <Span className="img-info__in-t">Herman Jensen</Span>
         <Span className="img-info__in-d">Founder & Leader</Span>
        </Span>
       </Div>
      </Div>
     </SwiperSlide>
    </Swiper>
   </Div>
  </>
 );
};
