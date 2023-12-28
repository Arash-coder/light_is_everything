'use client';
import React, { useState } from 'react';
import Input from '@/components/input';
import Upload from '@/components/upload';
import InputArea from '@/components/textarea';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { Table } from 'antd';
import Image from 'next/image';

import profile from '@/../public/assets/images/profile.png';
import { Controller, useForm } from 'react-hook-form';
import { galleyInputs } from '@/types/galllery';
import Axios from '@/services/configAxios';
import URLS from '@/services/urls';
import Loading from '@/components/loading';
type Props = {};

const Accountgallery = (props: Props) => {
  const [image_url, setImage_url] = useState<null | string>();
  const [image_file, setImage_file] = useState<any>();
  const [loading, setLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  }: any = useForm();

  const UploadHandler = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type === 'image/jpeg' || file.type === 'image/jpg') {
        if (file.size <= 7 * 1024 * 1024) {
          setImage_url(URL.createObjectURL(file));
          setImage_file(file);
        } else {
          alert('File size exceeds the limit of 7MB.');
        }
      } else {
        alert('Please upload a JPG file.');
      }
    }
  };

  const UploadPostHandler = (e: galleyInputs) => {
    if (loading) {
      return;
    } else {
      setLoading(true);
      if (image_file) {
        const formData = new FormData();

        formData.append('caption', e.caption);
        formData.append('tags', e.tags);
        formData.append('title', e.title);
        formData.append('image', image_file);

        Axios.post(URLS.gallery.create_post, formData, {
          headers: {
            'Content-Type': 'multipart/form-data;'
          }
        }).finally(() => {
          setLoading(false);
        });
      }
    }
  };

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
                  onChange={UploadHandler}
                  placeholderComponent={
                    <div
                      className={`py-5 relative w-full flex flex-col items-center justify-center ${
                        image_url && 'h-[300px]'
                      }`}
                    >
                      {image_url ? (
                        <Image
                          src={image_url}
                          fill
                          alt="image"
                          className="object-contain rounded-xl"
                        />
                      ) : (
                        <>
                          <div className="py-5 flex flex-col items-center justify-center ">
                            <MdOutlineAddPhotoAlternate
                              size={80}
                              className="fill-neutral-400"
                            />
                            <div className="text-neutral-400">
                              توجه! فرم بارگزاری تصویر JPEG باشد{' '}
                            </div>
                            <div className="btn !rounded-lg mt-8">
                              افزودن تصویر
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  }
                  label="تصویر * "
                />
              </div>
              <Controller
                name="title"
                control={control}
                rules={{
                  required: true
                }}
                render={({ field }) => (
                  <Input {...field} label="نام اثر *" placeholder="نام اثر" />
                )}
              />
            </div>

            <div className="col-span-2 md:col-span-1 ">
              <Controller
                name="caption"
                control={control}
                rules={{
                  required: true
                }}
                render={({ field }) => (
                  <InputArea
                    {...field}
                    rows={10}
                    label="توضیح اثر *"
                    placeholder="توضیح اثر"
                  />
                )}
              />
            </div>
            <div className="col-span-2 flex gap-3 justify-between items-end">
              <div className="grow">
                <Controller
                  name="tags"
                  control={control}
                  rules={{
                    required: false
                  }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      className="grow"
                      label="تگ های مرتبط با تصویر (هر تگ را با فاصله جدا کنید)"
                      placeholder="مثال: فتوشاپ  پاییز  شب  پرتره"
                    />
                  )}
                />
              </div>
              <button
                onClick={handleSubmit(UploadPostHandler)}
                className="btn !rounded-lg w-20 flex justify-center"
              >
                {loading ? <Loading /> : 'ذخیره'}
              </button>
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
