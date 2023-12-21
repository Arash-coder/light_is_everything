'use client';

import Image, { StaticImageData } from 'next/image';
import React, { useEffect } from 'react';
import { CiSearch } from 'react-icons/ci';
import profile2 from '@/../public/assets/images/profile-2.png';
import Link from 'next/link';
import { Pagination } from 'antd';
import styled from 'styled-components';

interface IMemberItem
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  name: string;
  career: string;
  description: string;
  profilePicture: string | StaticImageData;
}
const MemberItem = ({
  name,
  career,
  description,
  profilePicture,
  ...props
}: IMemberItem) => {
  return (
    <div {...props}>
      <div
        className={`bg-white text-center rounded-2xl break-words overflow-hidden`}
      >
        <div className="pt-4">
          <Image
            className="w-28 h-28 object-contain m-auto mb-2"
            src={profilePicture}
            alt="profile-2"
          />
          <div className="font-aria_xbold mb-2 text-sm">{name}</div>
          <div className="mb-2 text-sm">{career}</div>
          <div className="font-aria_sbold text-justify px-8 text-[13px]">
            {description}
          </div>
        </div>
        <Link
          href={'#'}
          className="p-3 mt-4 bg-black text-white flex justify-center items-center"
        >
          دیدن پروفایل
        </Link>
      </div>
    </div>
  );
};
// const Pagination = () => {
//   const itemsLength = 10
//   return (
//     <div className='flex gap-2 items-start justify-center'>
//       <MdArrowForwardIos />
//       {
//         new Array(7).fill(undefined).map((_: any, index: number) => {
//           return (
//             <div key={index.toString()}>
//               {index + 1}
//             </div>
//           )
//         })
//       }
//       <MdArrowBackIos />
//     </div>
//   )
// }

const StyledPagination = styled(Pagination)`
  * {
    font-family: aria_bold !important;
  }
  .ant-pagination-item-active {
    background-color: black !important;
    border-radius: 50px !important;
    border: none !important;
  }
  .ant-pagination-item-active a {
    height: 100% !important;
    margin: auto !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    color: white !important;
  }
`;
const mockName = 'فاطمه یکتا ریاحی فرد';
const mockCareer = 'عکاس';
const mockDescription = `پیشتر از ۱۰ سال هست که در زمینه‌های عکاسی و گرافیک به صورت حرفه ای مشغول به کار هستم. در این مدت با مجموعه‌ها و سازمان‌‌های مختلف همکاری کردم و در کنار هنرمندان و اساتید مختلف تجربه کسب کردم. چند سال مشغول به طراحی پوستر بودم`;
const Index = () => {
  useEffect(() => {
    const body = document.body;

    if (body) {
      body.classList.add('bg-zinc-300');
    }
  }, []);

  return (
    <div className="">
      <div className="custom_container">
        <div className="text-center font-aria_bold  mb-7 ">
          <h2 className="text-4xl ">Light Is Everything</h2>
          <h2 className="">
            نور زبانی است که بی اراده ما را به هم متصل می کند
          </h2>
        </div>
        <div className="">
          <div className="flex items-center w-full rounded-lg p-2   bg-white  mb-7 ">
            <CiSearch size={25} className="fill-slate-400" />
            <input
              placeholder="نام کاربر را جستجو کنید"
              className="outline-none w-full px-2"
            />
          </div>
        </div>
        <div className="grid justify-center items-center gap-3 grid-cols-12  ">
          {/* <div className="flex items-center justify-center  flex-wrap space-x-3  "> */}
          {new Array(7).fill(undefined).map((_: any, index: number) => {
            return (
              <MemberItem
                key={index.toString()}
                className="col-span-12 md:col-span-6 lg:col-span-3"
                name={mockName}
                career={mockCareer}
                description={mockDescription}
                profilePicture={profile2}
              />
            );
          })}
        </div>
        <div className="py-4 text-center !font-aria_sbold">
          <StyledPagination
            showSizeChanger={false}
            locale={{ items_per_page: '/ صفحه' }}
            className="!font-aria_sbold"
            total={200}
            pageSize={10}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
