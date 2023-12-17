import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import profile from '@/../public/assets/images/profile.png';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const CommentsComponent = () => {
  return (
    <div className="bg-black flex flex-col h-full items-center p-3">
      <Image
        alt="profile"
        className="rounded-full !h-20 !w-20 object-cover"
        src={profile}
      />
      <h3 className="text-light font-aria_regular text-xl mt-4">
        مهتا پارسافر
      </h3>
      <p className="text-light mt-4 max-w-md text-center text-lg font-aria_normal">
        محصولات نور به دسته‌ای از محصولات اشاره دارد که به نوعی با استفاده از
        نور یا برافی تولید نور، کنترل نور یا بهره‌برداری از خواص نور طراحی
        شده‌اند.
      </p>
    </div>
  );
};

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true
        }}
        modules={[Pagination]}
        className="mySwiper !h-[300px] !w-full !bg-black "
      >
        <SwiperSlide>
          <CommentsComponent />
        </SwiperSlide>
        <SwiperSlide>
          <CommentsComponent />
        </SwiperSlide>
        <SwiperSlide>
          <CommentsComponent />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
