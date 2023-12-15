'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import clip from '@/../public/assets/images/clip.jpg';
import Image from 'next/image';
import profile from '@/../public/assets/images/profile.png';

type Props = {
  className?: string;
};

const Slider2 = ({ className }: Props) => {
  return (
    <div className="w-full h-full">
      <Swiper
        autoplay={{
          delay: 500
        }}
        pagination={true}
        navigation={false}
        modules={[Pagination, Autoplay, Navigation]}
        className={`text-white text-center h-full ${className}`}
      >
        <SwiperSlide>
          <div className="text-black flex flex-col items-center">
            <Image
              alt="profile"
              className="rounded-full object-cover"
              src={profile}
            />
            <h3 className="text-light font-aria_regular text-xl mt-4">
              مهتا پارسافر
            </h3>
            <p className="text-light mt-4 max-w-md text-center text-lg font-aria_normal">
              محصولات نور به دسته‌ای از محصولات اشاره دارد که به نوعی با استفاده
              از نور یا برافی تولید نور، کنترل نور یا بهره‌برداری از خواص نور
              طراحی شده‌اند.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-black flex flex-col items-center">
            <Image
              alt="profile"
              className="rounded-full object-cover"
              src={profile}
            />
            <h3 className="text-light font-aria_regular text-xl mt-4">
              مهتا jsjsjsj
            </h3>
            <p className="text-light mt-4 max-w-md text-center text-lg font-aria_normal">
              محصولات نور به دسته‌ای از محصولات اشاره دارد که به نوعی با استفاده
              از نور یا برافی تولید نور، کنترل نور یا بهره‌برداری از خواص نور
              طراحی شده‌اند.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-black flex flex-col items-center">
            <Image
              alt="profile"
              className="rounded-full object-cover"
              src={profile}
            />
            <h3 className="text-light font-aria_regular text-xl mt-4">
              sjsjsjs پارسافر
            </h3>
            <p className="text-light mt-4 max-w-md text-center text-lg font-aria_normal">
              محصولات نور به دسته‌ای از محصولات اشاره دارد که به نوعی با استفاده
              از نور یا برافی تولید نور، کنترل نور یا بهره‌برداری از خواص نور
              طراحی شده‌اند.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider2;
