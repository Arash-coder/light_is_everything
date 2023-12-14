'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import clip from '@/../public/assets/images/clip.jpg';
import Image from 'next/image';
import profile from '@/../public/assets/images/profile.png';

type Props = {
  className?: string;
};

const Slider2 = ({ className }: Props) => {
  return (
    <>
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Navigation]}
        className={`text-white text-center ${className}`}
      >
        <SwiperSlide>
          <div className="text-black flex flex-col items-center">
            <Image alt="profile" src={profile} />
            <div>مهتا پارسا فر</div>
            <div className="max-w-sm">
              محصولات نور به دسته‌ای از محصولات اشاره دارد که به نوعی با استفاده
              از نور یا برافی تولید نور، کنترل نور یا بهره‌برداری از خواص نور
              طراحی شده‌اند.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-black flex flex-col items-center">
            <Image alt="profile" src={profile} />
            <div>مهتا پارسا فر</div>
            <div className="max-w-sm">
              محصولات نور به دسته‌ای از محصولات اشاره دارد که به نوعی با استفاده
              از نور یا برافی تولید نور، کنترل نور یا بهره‌برداری از خواص نور
              طراحی شده‌اند.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-black flex flex-col items-center">
            <Image alt="profile" src={profile} />
            <div>مهتا پارسا فر</div>
            <div className="max-w-sm">
              محصولات نور به دسته‌ای از محصولات اشاره دارد که به نوعی با استفاده
              از نور یا برافی تولید نور، کنترل نور یا بهره‌برداری از خواص نور
              طراحی شده‌اند.
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider2;
