'use client';

import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Pagination } from 'antd';
import { magazinesResponse } from '@/types/magazines';
import URLS from '@/services/urls';
import Loading from '@/components/loading';
import axios from 'axios';

interface IMagazineItem
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string;
  description: string;
  downloadUrl: string;
  coverUrl: string | StaticImageData;
}
const MagazineItem = ({
  title,
  description,
  downloadUrl,
  coverUrl,
  ...props
}: IMagazineItem) => {
  return (
    <div {...props}>
      <div
        className={`bg-white text-center rounded-2xl break-words overflow-hidden`}
      >
        <div className="">
          <div className="mb-2">
            <Image
              className="object-contain m-auto"
              src={coverUrl}
              alt="cover-2"
              width={1000}
              height={300}
            />
          </div>
          <div className="font-aria_xbold mb-2 text-sm">{title}</div>
          <div className="font-aria_sbold text-center px-8 text-[13px]">
            {description}
          </div>
        </div>
        <Link
          href={`${downloadUrl}`}
          className="p-3 mt-4 bg-black text-white flex justify-center items-center"
        >
          دریافت هفته‌نامه
        </Link>
      </div>
    </div>
  );
};

const Index = ({ data }: { data: magazinesResponse }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(data.results);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [count, setCount] = useState(data.count);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // Adjust the delay time here (e.g., 500ms)

    return () => clearTimeout(delaySearch);
  }, [searchTerm]);

  const performSearch = (term: string) => {
    // Perform your search logic here using the debouncedSearchTerm

    setLoading(true);
    axios
      .get(process.env.NEXT_PUBLIC_BASE_URL + URLS.search_user(term))
      .then((res) => {
        const { results, count }: magazinesResponse = res.data;
        setFilteredData(results);
        setCount(count);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (debouncedSearchTerm.length === 0) {
      GetMagazines();
    }

    if (debouncedSearchTerm) {
      performSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const handleInputChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const body = document.body;

    if (body) {
      body.classList.add('bg-zinc-300');
    }

    return () => body.classList.remove('bg-zinc-300');
  }, []);

  const GetMagazines = () => {
    setLoading(true);
    axios
      .get(process.env.NEXT_PUBLIC_BASE_URL + URLS.magazines(currentPage, 12))
      .then((res) => {
        const { results, count }: magazinesResponse = res.data;
        setFilteredData(results);
        setCount(count);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    GetMagazines();
  }, [currentPage]);

  return (
    <div className="">
      <div className="custom_container">
        <div className="text-center font-aria_bold  mb-7 ">
          <h2 className="text-4xl ">Light Magazines</h2>
          <h2 className="">
            نور زبانی است که بی اراده ما را به هم متصل می کند
          </h2>
        </div>
        <div className="">
          {/*<div className="flex items-center w-full rounded-lg p-2   bg-white  mb-7 ">*/}
          {/*<CiSearch size={25} className="fill-slate-400" />*/}
          {/*<input*/}
          {/*  placeholder="نام کاربر را جستجو کنید"*/}
          {/*  className="outline-none w-full px-2"*/}
          {/*  value={searchTerm}*/}
          {/*  onChange={handleInputChange}*/}
          {/*/>*/}
          {/*</div>*/}
        </div>
        {loading ? (
          <>
            <div className="flex justify-center items-center h-[70vh]">
              <Loading />
            </div>
          </>
        ) : (
          <>
            <div
              className={`${
                filteredData.length > 0
                  ? 'grid justify-center items-center gap-3 grid-cols-12'
                  : 'w-full h-[50vh] flex items-center '
              }`}
            >
              {filteredData.length > 0 ? (
                filteredData.map((magazine, index: number) => {
                  return (
                    <MagazineItem
                      key={index.toString()}
                      className="col-span-12 md:col-span-6 lg:col-span-3"
                      title={magazine.title}
                      description={magazine.description}
                      coverUrl={magazine.cover_url}
                      downloadUrl={magazine.download_url}
                    />
                  );
                })
              ) : (
                <>
                  <div className="flex flex-col justify-center w-full h-[80vh] items-center">
                    {/*<Image*/}
                    {/*  src="/assets/images/noperson.svg"*/}
                    {/*  alt="person"*/}
                    {/*  width={100}*/}
                    {/*  height={100}*/}
                    {/*  className="ml-7"*/}
                    {/*/>*/}
                    <h3 className="mt-10 text-2xl font-aria_bold">
                      به زودی اولین شماره منتشر میشود ...
                    </h3>
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
            total={count}
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