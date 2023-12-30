'use client';

import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import Link from 'next/link';
import { Pagination } from 'antd';
import { usersResponse } from '@/types/members';
import Axios from '@/services/configAxios';
import URLS from '@/services/urls';
import Loading from '@/components/loading';
import axios from 'axios';

interface IMemberItem
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  name: string;
  career: string;
  description: string;
  profilePicture: string | StaticImageData;
  username: string;
}
const MemberItem = ({
  name,
  career,
  description,
  profilePicture,
  username,
  ...props
}: IMemberItem) => {
  return (
    <div {...props}>
      <div
        className={`bg-white text-center rounded-2xl break-words overflow-hidden`}
      >
        <div className="pt-4">
          <Image
            className="w-28 h-28 object-contain rounded-full m-auto mb-2"
            src={profilePicture}
            alt="profile-2"
            width={28}
            height={28}
          />
          <div className="font-aria_xbold mb-2 text-sm">{name}</div>
          <div className="mb-2 text-sm">{career}</div>
          <div className="font-aria_sbold text-center px-8 text-[13px]">
            {description}
          </div>
        </div>
        <Link
          href={`/family/${username}`}
          className="p-3 mt-4 bg-black text-white flex justify-center items-center"
        >
          دیدن پروفایل
        </Link>
      </div>
    </div>
  );
};

const Index = ({ data }: { data: usersResponse }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(data.results);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const body = document.body;

    if (body) {
      body.classList.add('bg-zinc-300');
    }

    return () => body.classList.remove('bg-zinc-300');
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(process.env.NEXT_PUBLIC_BASE_URL + URLS.members(currentPage, 12))
      .then((res) => {
        const { results }: usersResponse = res.data;
        setFilteredData(results);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentPage]);

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
        {loading ? (
          <>
            <div className="flex justify-center items-center h-[70vh]">
              <Loading />
            </div>
          </>
        ) : (
          <>
            <div className="grid justify-center items-center gap-3 grid-cols-12">
              {filteredData.length > 0 ? (
                filteredData.map((member, index: number) => {
                  return (
                    <MemberItem
                      key={index.toString()}
                      className="col-span-12 md:col-span-6 lg:col-span-3"
                      name={member.full_name}
                      career={member.career.title}
                      description={member.biography}
                      profilePicture={member.avatar_image_url}
                      username={member.username}
                    />
                  );
                })
              ) : (
                <>
                  <div>
                    <p>موردی برای نمایش وجود ندارد</p>
                  </div>
                </>
              )}
            </div>
          </>
        )}
        <div className="py-4 text-center !font-aria_sbold">
          <Pagination
            showSizeChanger={false}
            // locale={{ items_per_page: '/ صفحه' }}
            className="noxPagination"
            total={data.count}
            pageSize={12}
            onChange={(e) => {
              setCurrentPage(e);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
