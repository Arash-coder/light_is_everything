'use client';

import Input from '@/components/input';
import { updateSocialMediaInputs } from '@/types/authentication';
import { member } from '@/types/members';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Loading from '@/components/loading';
import Axios from '@/services/configAxios';
import URLS from '@/services/urls';
import { toast } from 'react-toastify';

const validateURL = (url: string) => {
  if (!url) {
    return true;
  }
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

const UserSociaMedia = ({ data }: { data: member }) => {
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    control
  }: any = useForm();

  const UpdateSocialMediaHandler = (e: updateSocialMediaInputs) => {
    if (loading) {
      return;
    } else {
      setLoading(true);
      Axios.patch(URLS.auth.update, {
        twitter_url: e.x || '',
        linkedin_url: e.linkedin || '',
        telegram_url: e.telegram || '',
        instagram_url: e.instagram || ''
      })
        .then((res) => {
          if (res?.status === 200) {
            toast.success('تغییرات با موفقیت ذخیره شد');
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-x-3 gap-y-6  ">
        <div className="col-span-2 md:col-span-1">
          <Controller
            name="telegram"
            control={control}
            defaultValue={data.telegram_url}
            rules={{
              required: false,
              validate: (value) => validateURL(value) || 'لینک نامعتبر'
            }}
            render={({ field }) => (
              <Input
                className="font-aria_en"
                {...field}
                error={errors.telegram}
                errorMessage={errors?.telegram?.message}
                label="آیدی تلگرام"
                placeholder="آیدی تلگرام"
              />
            )}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Controller
            name="instagram"
            defaultValue={data.instagram_url}
            control={control}
            rules={{
              required: false,
              validate: (value) => validateURL(value) || 'لینک نامعتبر'
            }}
            render={({ field }) => (
              <Input
                className="font-aria_en"
                {...field}
                error={errors.instagram}
                errorMessage={errors?.instagram?.message}
                label="لینک اینستاگرام | آیدی"
                placeholder="لینک اینستاگرام | آیدی"
              />
            )}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Controller
            defaultValue={data.linkedin_url}
            name="linkedin"
            control={control}
            rules={{
              required: false,
              validate: (value) => validateURL(value) || 'لینک نامعتبر'
            }}
            render={({ field }) => (
              <Input
                className="font-aria_en"
                {...field}
                error={errors.linkedin}
                errorMessage={errors?.linkedin?.message}
                label="آدرس لینکدین"
                placeholder="آدرس لینکدین"
              />
            )}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Controller
            name="x"
            defaultValue={data.twitter_url}
            control={control}
            rules={{
              required: false,
              validate: (value) => validateURL(value) || 'لینک نامعتبر'
            }}
            render={({ field }) => (
              <Input
                className="font-aria_en"
                error={errors.x}
                errorMessage={errors?.x?.message}
                {...field}
                label="لینک ایکس"
                placeholder="لینک ایکس"
              />
            )}
          />
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <button
          onClick={handleSubmit(UpdateSocialMediaHandler)}
          className="btn !rounded-lg  w-36 flex justify-center"
        >
          {loading ? <Loading /> : 'ذخیره تغییرات'}
        </button>
      </div>
    </>
  );
};

export default UserSociaMedia;
