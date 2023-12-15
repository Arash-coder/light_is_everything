'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import clip from '@/../public/assets/images/clip.jpg';
import Image from 'next/image';
import { FaLocationDot } from 'react-icons/fa6';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

type Props = {
  className?: string;
};

const Slider1 = ({ className }: Props) => {
  const swiperRef: any = useRef(null);
  const NextSlide = () => swiperRef.current.slideNext();
  const PrevSlide = () => swiperRef.current.slidePrev();
  return (
    <div className="relative">
      <div
        onClick={NextSlide}
        className="absolute cursor-pointer z-10 top-[50%] -translate-y-[50%] -left-16 text-light"
      >
        <MdNavigateBefore size="50" color="var(--forth-color)" />
      </div>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={false}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 5000
        }}
        className={`text-white text-center ${className}`}
      >
        <SwiperSlide>
          <Image className="rounded-3xl object-cover" alt="clip" src={clip} />
          <div className="flex mt-4 mb-16 items-center">
            <div className="bg-light p-1 rounded-md">
              <FaLocationDot color="var(--background)" />
            </div>
            <p className="text-light font-aria_regular text-base ms-4">
              هفته‌ی شانزدهم
            </p>
            <p className="font-aria_regular text-light ms-4">|</p>
            <p className="text-light font-aria_regular text-base ms-4">
              محله‌ی دیباجی جنوبی
            </p>
            <p className="font-aria_regular text-light ms-4">|</p>
            <p className="text-light font-aria_regular text-base ms-4">
              14 مهر 1402
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="rounded-3xl object-cover" alt="clip" src={clip} />
          <div className="flex mt-4 mb-16 items-center">
            <div className="bg-light p-1 rounded-md">
              <FaLocationDot color="var(--background)" />
            </div>
            <p className="text-light font-aria_regular text-base ms-4">
              هفته‌ی شانزدهم
            </p>
            <p className="font-aria_regular text-light ms-4">|</p>
            <p className="text-light font-aria_regular text-base ms-4">
              محله‌ی دیباجی جنوبی
            </p>
            <p className="font-aria_regular text-light ms-4">|</p>
            <p className="text-light font-aria_regular text-base ms-4">
              14 مهر 1402
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="rounded-3xl object-cover" alt="clip" src={clip} />
          <div className="flex mt-4 mb-16 items-center">
            <div className="bg-light p-1 rounded-md">
              <FaLocationDot color="var(--background)" />
            </div>
            <p className="text-light font-aria_regular text-base ms-4">
              هفته‌ی شانزدهم
            </p>
            <p className="font-aria_regular text-light ms-4">|</p>
            <p className="text-light font-aria_regular text-base ms-4">
              محله‌ی دیباجی جنوبی
            </p>
            <p className="font-aria_regular text-light ms-4">|</p>
            <p className="text-light font-aria_regular text-base ms-4">
              14 مهر 1402
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div
        onClick={PrevSlide}
        className="absolute cursor-pointer z-10 -right-16 top-[50%] text-light -translate-y-[50%]"
      >
        <MdNavigateNext size="50" color="var(--forth-color)" />
      </div>
    </div>
  );
};

export default Slider1;
