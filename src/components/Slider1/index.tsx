'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import clip from '@/../public/assets/images/clip.jpg';
import Image from 'next/image';
import { FaLocationDot } from 'react-icons/fa6';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { event } from '@/types/landing';

type Props = {
  className?: string;
  data: event[];
};

const Slider1 = ({ className, data }: Props) => {
  const swiperRef: any = useRef(null);
  const NextSlide = () => swiperRef.current.slideNext();
  const PrevSlide = () => swiperRef.current.slidePrev();
  return (
    <div className="relative max-w-sceen">
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
        {data.map((event) => {
          return (
            <SwiperSlide key={event.title}>
              <div className="relative w-full h-[600px]">
                <Image
                  className="rounded-3xl object-cover"
                  alt="clip"
                  src={event.image_url}
                  fill
                />
              </div>
              <div className="flex mt-4 mb-16 items-center">
                <div className="bg-light p-1 rounded-md">
                  <FaLocationDot color="var(--background)" />
                </div>
                <p className="text-light font-aria_regular text-xs md:text-base ms-1 md:ms-4">
                  {event.title}
                </p>
                <p className="font-aria_regular text-light ms-1 md:ms-4">|</p>
                <p className="text-light font-aria_regular text-xs md:text-base ms-4">
                  {event.location}
                </p>
                <p className="font-aria_regular text-light ms-1 md:ms-4">|</p>
                <p className="text-light font-aria_regular text-xs md:text-base ms-4">
                  {event.description}
                </p>
                <p className="font-aria_regular text-light ms-1 md:ms-4">|</p>
                <p className="text-light font-aria_regular text-xs tracking-wider md:text-base ms-4">
                  {event.display_date}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
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
