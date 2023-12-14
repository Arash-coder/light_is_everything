'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import clip from '@/../public/assets/images/clip.jpg';
import Image from 'next/image';

type Props = {
  className?: string;
};

const Slider1 = ({ className }: Props) => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={`text-white text-center ${className}`}
      >
        <SwiperSlide>
          <Image alt="clip" src={clip} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="clip" src={clip} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="clip" src={clip} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="clip" src={clip} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider1;
