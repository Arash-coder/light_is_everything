'use client';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { CiSearch } from 'react-icons/ci';
import profile2 from '@/../public/assets/images/profile-2.png';
import Link from 'next/link';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { ConfigProvider, Pagination } from 'antd';
import styled from 'styled-components';

type Props = {};

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
        className={`bg-primary text-center rounded-xl break-words overflow-hidden`}
      >
        <div className="p-4">
          <Image
            className="w-32 h-32 object-contain m-auto mb-2"
            src={profilePicture}
            alt="profile-2"
          />
          <div className="font-aria_xbold mb-2">{name}</div>
          <div className="mb-4">{career}</div>
          <div className="font-aria_sbold text-justify">{description}</div>
        </div>
        <Link
          href={'#'}
          className="p-3 bg-secondary text-primary flex justify-center items-center"
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
const mockDescription =
  'پیشتر از ۱۰ سال هست که در زمینه‌های عکاسی و گرافیک به صورت حرفه ای مشغول به کار هستم. در این مدت با مجموعه‌ها و سازمان‌‌های مختلف همکاری کردم و در کنار هنرمندان و اساتید مختلف تجربه کسب کردم. چند سال مشغول به طراحی پوستر بودم';

const Dashboard = (props: Props) => {
  return (
    <div className="px-10  ">
      <div className="text-center font-aria_bold  mb-7 ">
        <h2 className="text-4xl ">Light Is Everything</h2>
        <h2 className="">نور زبانی است که بی اراده ما را به هم متصل می کند</h2>
      </div>
      <div className="flex items-center w-full rounded-lg p-2  bg-primary  mb-7 ">
        <CiSearch size={25} className="fill-slate-400" />
        <input
          placeholder="نام کاربر را جستجو کنید"
          className="outline-none w-full px-2"
        />
      </div>
      <div className="flex items-center justify-center  flex-wrap  ">
        {new Array(7).fill(undefined).map((_: any, index: number) => {
          return (
            <MemberItem
              key={index.toString()}
              className="md:w-1/2 lg:w-1/4  p-3 "
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
          locale={{ items_per_page: '/ صفحه' }}
          className="!font-aria_sbold"
          total={200}
          pageSize={10}
        />
      </div>
    </div>
  );
};

export default Dashboard;
