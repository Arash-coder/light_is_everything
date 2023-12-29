'use client';

import Input from '@/components/input';
import { updatePasswordInputs } from '@/types/authentication';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Loading from '../loading';
import Axios from '@/services/configAxios';
import URLS from '@/services/urls';
import { toast } from 'react-toastify';

const UserPassword = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control
  }: any = useForm();

  const UpdatePasswordHandler = (e: updatePasswordInputs) => {
    if (loading) {
      return;
    } else {
      setLoading(true);
      Axios.put(URLS.auth.password, {
        password: e.password,
        password_confirmation: e.confirm_password
      })
        .then(() => {
          toast.success('تغییرات با موفقیت ذخیره شد');
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
            name="password"
            control={control}
            rules={{
              required: true
            }}
            render={({ field }) => (
              <Input
                {...field}
                label="رمز عبور جدید *"
                placeholder="رمز عبور جدید"
              />
            )}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Controller
            name="confirm_password"
            control={control}
            rules={{
              required: true,
              validate: (val: string) => {
                if (watch('password') != val) {
                  return 'تکرار رمز تطابق ندارد';
                }
              }
            }}
            render={({ field }) => (
              <Input
                {...field}
                label="تکرار رمز عبور جدید * "
                placeholder="تکرار رمز عبور جدید"
              />
            )}
          />
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <button
          onClick={handleSubmit(UpdatePasswordHandler)}
          className="btn !rounded-lg flex justify-center w-36"
        >
          {loading ? <Loading /> : 'ذخیره تغییرات'}
        </button>
      </div>
    </>
  );
};

export default UserPassword;
