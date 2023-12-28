'use client';

import Input from '@/components/input';
import Upload from '@/components/upload';
import InputArea from '@/components/textarea';
import { Controller, useForm } from 'react-hook-form';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { member } from '@/types/members';
import { useEffect, useState } from 'react';
import Axios from '@/services/configAxios';
import URLS from '@/services/urls';
import { career, updateProfileInputs } from '@/types/authentication';
import Image from 'next/image';
import Loading from '../loading';

const UserInformation = ({ data }: { data: member }) => {
  const [careers, setCareers] = useState<null | career[]>();
  const [image_url, setImage_url] = useState<null | string>();
  const [image_file, setImage_file] = useState<any>();
  const [loading, setLoading] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  }: any = useForm();

  useEffect(() => {
    Axios.get(URLS.auth.careers).then((res: { data: career[] }) => {
      setCareers(res.data);
    });
  }, []);

  // console.log('data', data);

  const UpdateHandler = (e: updateProfileInputs) => {
    if (loading) {
      return;
    } else {
      setLoading(true);

      if (image_file) {
        const formData = new FormData();
        formData.append('avatar_image', image_file);
        formData.append('biography', e.bio);
        formData.append('career_id', JSON.stringify(e.carrier));
        Axios.patch(URLS.auth.update, formData, {
          headers: {
            'Content-Type': 'multipart/form-data;'
          }
        }).finally(() => {
          setLoading(false);
        });
      } else {
        Axios.patch(URLS.auth.update, {
          biography: e.bio,
          career_id: e.carrier
        }).finally(() => {
          setLoading(false);
        });
      }
    }
  };

  const UploadHandler = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type === 'image/jpeg' || file.type === 'image/jpg') {
        if (file.size <= 7 * 1024 * 1024) {
          setImage_url(URL.createObjectURL(file));
          setImage_file(file);
          // 7 MB in bytes
          // File is valid, you can proceed with your logic here
          // console.log('File is valid:', file);
        } else {
          alert('File size exceeds the limit of 7MB.');
        }
      } else {
        alert('Please upload a JPG file.');
      }
    }
  };

  return (
    <>
      <div className="col-span-2 md:col-span-1">
        <Controller
          name="first_name"
          control={control}
          defaultValue={data.first_name}
          render={({ field }) => (
            <Input {...field} disabled label="نام * " placeholder="نام" />
          )}
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <Controller
          name="last_name"
          control={control}
          defaultValue={data.last_name}
          render={({ field }) => (
            <Input
              {...field}
              disabled
              label="نام خانوادگی *"
              placeholder="نام خانوادگی"
            />
          )}
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <Controller
          name="mobile"
          control={control}
          defaultValue={data.phone_number}
          render={({ field }) => (
            <Input
              {...field}
              disabled
              dir="ltr"
              label="شماره موبایل *"
              placeholder="شماره موبایل"
            />
          )}
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <Controller
          name="email"
          control={control}
          defaultValue={data.email}
          render={({ field }) => (
            <Input {...field} disabled label="ایمیل *" placeholder="ایمیل" />
          )}
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <Controller
          name="bio"
          control={control}
          defaultValue={data.biography}
          render={({ field }) => (
            <InputArea
              {...field}
              rows={10}
              label="درباره من *"
              placeholder="درباره من"
              className=""
            />
          )}
        />
      </div>
      <div className="col-span-2 md:col-span-1 flex flex-col">
        <Controller
          name="carrier"
          control={control}
          defaultValue={data.career.id}
          render={({ field }) => (
            <>
              <label className="">تخصص *</label>
              <select
                {...field}
                className="outline-none border-none p-2 px-4 bg-neutral-200 rounded-lg w-full mb-6"
              >
                <option value="">انتخاب کنید</option>
                {careers &&
                  careers?.length > 0 &&
                  careers?.map((career) => {
                    return (
                      <option key={career.id} value={career.id}>
                        {career.title}
                      </option>
                    );
                  })}
              </select>
            </>
          )}
        />
        <div className="grow relative flex flex-col">
          <Upload
            onChange={UploadHandler}
            placeholderComponent={
              <div className="py-5 flex flex-col items-center justify-center ">
                {image_url ? (
                  <Image
                    src={image_url}
                    width={40}
                    height={40}
                    alt="image"
                    className="object-cover rounded-full w-32 h-32"
                  />
                ) : (
                  <>
                    <MdOutlineAddPhotoAlternate
                      size={80}
                      className="fill-neutral-400"
                    />
                    <div className="text-neutral-400">افزودن عکس پروفایل</div>
                  </>
                )}
              </div>
            }
            label="عکس پروفایل"
          />
        </div>
      </div>
      <div className="col-span-2 md:col-span-1 flex flex-col"></div>
      <div className="flex justify-end mt-6">
        <button
          onClick={handleSubmit(UpdateHandler)}
          className="flex btn !rounded-lg w-36 justify-center"
        >
          {loading ? <Loading /> : 'ذخیره تغییرات'}
        </button>
      </div>
    </>
  );
};

export default UserInformation;
