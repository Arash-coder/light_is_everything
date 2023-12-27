import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import profile from '@/../public/assets/images/profile.png';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { user_review } from '@/types/landing';

const CommentsComponent = ({
  image,
  name,
  description
}: {
  image: string;
  name: string;
  description: string;
}) => {
  return (
    <div className="bg-black flex flex-col h-full items-center p-3">
      <Image
        alt="profile"
        className="rounded-full md:!h-28 !h-16 md:!w-28 !w-16 object-cover"
        src={image}
        width={28}
        height={28}
      />
      <h3 className="text-light font-aria_regular text-xl mt-2">{name}</h3>
      <p className="text-light mt-4 max-w-md text-center text-base md:text-lg font-aria_normal">
        {description}
      </p>
    </div>
  );
};

export default function App({ data }: { data: user_review[] }) {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: false,
          clickable: true
        }}
        modules={[Pagination]}
        className="mySwiper !h-[300px] !w-full !bg-black "
      >
        {data.map((review) => {
          return (
            <SwiperSlide key={review.full_name}>
              <CommentsComponent
                image={review.avatar_image_url}
                name={review.full_name}
                description={review.text}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
