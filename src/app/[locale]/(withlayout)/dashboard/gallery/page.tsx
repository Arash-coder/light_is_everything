'use client';
import React from 'react';
import { Input, InputArea, Upload } from '../profile/page';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { Table } from 'antd';
import { ColumnType, ColumnsType } from 'antd/es/table';
import Image from 'next/image';

import profile from '@/../public/assets/images/profile.png';
type Props = {};

const Accountgallery = (props: Props) => {
  return (
    <div className="grow mb-20">
      <h2 className="font-aria_bold text-3xl mb-8">گالری</h2>
      <div className="font-aria_sbold">
        <h2 className="text-xl mb-4">آپلود عکس جدید</h2>
        <div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-6 justify-stretch items-stretch ">
            <div className="col-span-2 md:col-span-1 ">
              <div className="mb-6">
                <Upload
                  placeholderComponent={
                    <div className="py-5 flex flex-col items-center justify-center ">
                      <MdOutlineAddPhotoAlternate
                        size={80}
                        className="fill-neutral-400"
                      />
                      <div className="text-neutral-400">
                        توجه! فرم بارگزاری تصویر JPEG باشد{' '}
                      </div>
                      <div className="btn !rounded-lg mt-8">افزودن تصویر</div>
                    </div>
                  }
                  label="تصویر * "
                />
              </div>
              <Input label="نام اثر *" placeholder="نام اثر" />
            </div>

            <div className="col-span-2 md:col-span-1 ">
              <InputArea
                rows={10}
                label="توضیح اثر *"
                placeholder="توضیح اثر"
              />
            </div>
            <div className="col-span-2 flex gap-3 justify-between items-end">
              <div className="grow">
                <Input
                  className="grow"
                  label="تگ های مرتبط با تصویر (هر تگ را با فاصله جدا کنید)"
                  placeholder="مثال: فتوشاپ  پاییز  شب  پرتره"
                />
              </div>
              <button className="btn !rounded-lg">ذخیره</button>
            </div>
          </div>
          <div className="divider" />
          <h2 className="text-xl mb-4">عکس های آپلود شده</h2>
          <Table
            scroll={{ x: 400 }}
            pagination={{
              pageSize: 5,
              className: 'm-auto flex !justify-center items-center'
            }}
            className="noxTable noxPagination w-full"
            dataSource={dataSource}
            columns={columns}
          />
        </div>
      </div>
    </div>
  );
};

export default Accountgallery;

const columns: any = [
  {
    dataIndex: 'preview',
    key: 'preview',
    title: 'پیش نمایش',
    align: 'center',
    render(val: any) {
      return (
        <Image
          src={profile}
          alt="profile"
          className="w-16 h-16 m-auto object-contain"
        />
      );
    },
    width: 100
  },
  {
    dataIndex: 'name',
    key: 'name',
    title: 'نام اثر',
    align: 'center',
    width: 100
  },
  {
    dataIndex: 'createdAt',
    key: 'createdAt',
    title: 'تاریخ ثبت',
    align: 'center',
    width: 100
  },
  {
    dataIndex: 'state',
    key: 'state',
    title: 'وضعیت',
    align: 'center',
    width: 100
  }
];

const dataObject = {
  name: 'لورم ایپسوم ',
  createdAt: '25 آذر 1402',
  state: 'در دست بررسی'
};
const dataSource = [
  dataObject,
  dataObject,
  dataObject,
  dataObject,
  dataObject,
  dataObject,
  dataObject,
  dataObject,
  dataObject
];
