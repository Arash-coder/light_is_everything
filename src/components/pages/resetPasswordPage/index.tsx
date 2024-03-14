'use client';

import ArrowRight from '@/components/icons/ArrowRight';
import Link from 'next/link';
import Logo from '@/../public/assets/images/logo.png';
import Image from 'next/image';
import { useState } from 'react';
import { MdError } from 'react-icons/md';
import Loading from '@/components/loading';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Axios from '@/services/configAxios';
import URLS from '@/services/urls';
import { useForm } from 'react-hook-form';
import { resetPasswordInputs } from '@/types/authentication';
import { toast } from 'react-toastify';

const ResetPasswordPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  }: any = useForm();
  const [loading, setLoading] = useState(false);

  const ResetPasswordHandler = (e: resetPasswordInputs) => {
    if (loading) {
      return;
    } else {
      setLoading(true);
      Axios.post(URLS.auth.reset_password, {
        email: e.email
      })
        .then((res: any) => {
          if (res.status === 200 || res.status === 201) {
            toast.success(
              'پیامی برای بازیابی رمزعبور جدید به ایمیل وارد شده ارسال شد.'
            );
          }
        })
        .catch(() => {})
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="w-screen max_xs:h-full min_xs:h-screen relative flex justify-center items-center">
      <Image
        src={'/assets/images/bg-sign-in.svg'}
        alt="bg-reset-password"
        fill
        className="object-cover -z-50"
      />
      <Link
        href={'/'}
        className="absolute  right-[3%] top-[3%] flex items-center gap-2 transition-all hover:gap-4 cursor-pointer text-light font-aria_medium text-base "
      >
        <ArrowRight />
        <p className="link before:!bg-white">بازگشت به خانه</p>
      </Link>
      <section className="custom_container pb-14 md:pb-0 !w-[90%] md:!w-[95%] flex justify-center gap-5 lg:gap-0 items-center lg:justify-between flex-wrap">
        <div className="flex items-center justify-center mt-16  gap-2 lg:gap-6 lg:-mt-28">
          <div>
            <h1 className="font-aria_bold text-light text-2xl md:text-4xl tracking-wide text-center">
              Light Is Everything
            </h1>
            <p className="font-aria_sbold text-light text-xs md:text-base text-center">
              نور زبانی است که بی اراده مارا بهم متصل می‌کند
            </p>
          </div>
          <Image
            src={Logo}
            width={80}
            className="rounded-xl hidden md:block"
            height={100}
            alt="logo"
          />
          <Image
            src={Logo}
            width={40}
            className="rounded-xl md:hidden"
            height={100}
            alt="logo"
          />
        </div>
        <div className="bg-light pt-8 md:pt-16 w-full md:w-[480px] px-4 md:px-16 rounded-3xl">
          <h2 className="font-aria_xbold text-xl md:text-2xl text-center">
            در جستجوی نور
          </h2>
          <p className="font-aria_sbold text-center text-xs md:text-sm mt-2">
            برای بازیابی رمزعبور ایمیل خود را وارد نمایید.
          </p>
          <div className="relative">
            <motion.input
              animate={errors.email && { border: '0.5px solid var(--error)' }}
              dir="ltr"
              type="text"
              className="mt-4 placeholder:text-right bg-[#E8F0FE] focus:outline-none font-aria_en w-full px-4 py-2 rounded-lg"
              placeholder="ایمیل"
              {...register('email', {
                required: 'ایمیل خود را وارد کنید',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'ایمیل نامعتبر'
                }
              })}
            />
            <div className="absolute left-2 mt-2 top-[50%] -translate-y-[50%]">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={errors.email && { opacity: 1, y: 0 }}
              >
                <MdError color="var(--error)" size="20px" />
              </motion.div>
            </div>
          </div>
          <div className="mb-7 mt-2">
            <div className="flex justify-center">
              <button
                onClick={handleSubmit(ResetPasswordHandler)}
                className="mt-4 flex justify-center bg-primary font-aria_bold text-base md:text-lg w-[200px] rounded-lg py-2 text-light"
              >
                {loading ? <Loading /> : 'بازیابی رمز عبور'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResetPasswordPage;
