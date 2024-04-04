'use client';
import React, { useState } from 'react';
import Input from '@/components/input';
import Upload from '@/components/upload';
import InputArea from '@/components/textarea';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { Table } from 'antd';
import Image from 'next/image';
import { FaHourglass } from 'react-icons/fa';
import { Controller, useForm } from 'react-hook-form';
import { galleyInputs } from '@/types/galllery';
import Axios from '@/services/configAxios';
import URLS from '@/services/urls';
import Loading from '@/components/loading';
import { post } from '@/types/post';
import { FaCheckCircle } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';
import { toast } from 'react-toastify';
import { useDimentions } from '@/hooks/useDimentions';

type Props = {
  data: post[];
};

const Accountgallery = (props: Props) => {
  const [image_url, setImage_url] = useState<null | string>();
  const [image_file, setImage_file] = useState<any>();
  const [loading, setLoading] = useState(false);

  const {
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
          toast.error('سایز عکس باید کمتر از 7 مگابایت باشد');
        }
      } else {
        toast.error('فرمت عکس باید JPG باشد');
      }
    }
  };
  const { width } = useDimentions();

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
        })
          .then((res) => {
            if (res?.status === 201) {
              toast.success('پست با موفقیت ایجاد شد', {
                onClose: (props1) => {
                  setTimeout(() => window.location.reload(), 3000);
                }
              });
            }
          })
          .finally(() => {
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
                            <div className="text-neutral-400">
                              محدودیت حجم (7MB)
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
            // scroll={{ x: 400 }}
            pagination={{
              pageSize: 5,
              className: 'm-auto flex !justify-center items-center'
            }}
            className="noxTable noxPagination w-full"
            dataSource={props.data.map((post) => {
              return {
                preview: post.compressed_content_url,
                name: post.title,
                createdAt: post.display_created_at,
                state: post.status
              };
            })}
            columns={columns.filter((item: any) =>
              width > 600 ? item : item.dataIndex != 'createdAt'
            )}
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
          src={val}
          alt="profile"
          width={16}
          height={16}
          className="w-16 h-16 m-auto rounded-xl object-contain"
        />
      );
    }
    // width: 100
  },
  {
    dataIndex: 'name',
    key: 'name',
    title: 'نام اثر',
    align: 'center'
    // width: 100
  },
  {
    dataIndex: 'createdAt',
    key: 'createdAt',
    title: 'تاریخ ثبت',
    align: 'center'
    // width: 100,
    // className: '!max-w-0 !md:max-w-32'
  },
  {
    dataIndex: 'state',
    key: 'state',
    title: 'وضعیت',
    align: 'center',
    // width: 100,
    render(val: 'P' | 'R' | 'A') {
      if (val === 'P') {
        return (
          <>
            <div className="flex justify-center items-center">
              <FaHourglass color="#0C609D" size="20px" />
              <p className="text-[#0C609D]">در درست بررسی</p>
            </div>
          </>
        );
      } else if (val === 'R') {
        return (
          <div className="flex justify-center items-center gap-2">
            <IoIosCloseCircle color="#BA2424" size="20px" />
            <p className="text-[#BA2424]">رد شده</p>
          </div>
        );
      } else {
        return (
          <div className="flex justify-center items-center gap-2">
            <FaCheckCircle color="#0B9C2B" size="20px" />
            <p className="text-[#0B9C2B]">منتشر شده</p>
          </div>
        );
      }
    }
  },
  {
    dataIndex: 'delete',
    key: 'delete',
    title: 'امکانات',
    align: 'center',
    // width: 100,
    render(_: any, data: any) {
      const { name } = data;

      const DeleteHandler = () => {
        // call your api
        // you can get id from data
        // and whatever you want to do ...
      };

      return (
        <>
          <div className="flex justify-center items-center">
            <button onClick={DeleteHandler}>حذف</button>
          </div>
        </>
      );
    }
  }
];
