'use client';

import ArrowRight from '@/components/icons/ArrowRight';
import Link from 'next/link';
import Logo from '@/../public/assets/images/logo.png';
import Image from 'next/image';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { useState } from 'react';
import { MdError } from 'react-icons/md';
import Loading from '@/components/loading';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Axios from '@/services/configAxios';
import URLS from '@/services/urls';
import { useForm } from 'react-hook-form';
import { responseLogin, signinInputs } from '@/types/authentication';
import { setCookie } from 'cookies-next';
import { toast } from 'react-toastify';

const SignInPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  }: any = useForm();
  const [show_password, setShow_password] = useState(false);
  const [loading, setLoading] = useState(false);

  const LoginHandler = (e: signinInputs) => {
    if (loading) {
      return;
    } else {
      setLoading(true);
      Axios.post(URLS.auth.sign_in, {
        username: e.username,
        password: e.password
      })
        .then((res: any) => {
          if (res.status === 200 || res.status === 201) {
            const { access, refresh }: responseLogin = res.data;

            setCookie('access', access);
            setCookie('refresh', refresh);
            router.push('/dashboard/profile');
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
        alt="bg-sign-in"
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
            برای ورود لطفا نام کاربری و رمز عبور خود را وارد نمایید.
          </p>
          <div className="relative">
            <motion.input
              animate={
                errors.username && { border: '0.5px solid var(--error)' }
              }
              dir="ltr"
              type="text"
              className="mt-4 placeholder:text-right bg-[#E8F0FE] focus:outline-none font-aria_en w-full px-4 py-2 rounded-lg"
              placeholder="نام کاربری"
              {...register('username', {
                required: 'نام کاربری را وارد کنید'
              })}
            />
            <div className="absolute left-2 mt-2 top-[50%] -translate-y-[50%]">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={errors.username && { opacity: 1, y: 0 }}
              >
                <MdError color="var(--error)" size="20px" />
              </motion.div>
            </div>
          </div>

          <motion.div
            animate={errors.password && { border: '0.5px solid var(--error)' }}
            className="relative mt-4 flex items-center  bg-[#E8F0FE]  w-full  rounded-lg"
          >
            <div
              onClick={() => setShow_password(!show_password)}
              className="w-[15%] flex justify-center cursor-pointer"
            >
              {!show_password ? (
                <IoEyeOutline size="20px" />
              ) : (
                <IoEyeOffOutline size="20px" />
              )}
            </div>
            <input
              dir="ltr"
              type={show_password ? 'text' : 'password'}
              className=" flex-1 bg-transparent focus:outline-none  font-aria_en px-4 py-2"
              placeholder="رمز"
              {...register('password', {
                required: true
              })}
            />
            <div className="absolute right-10 z-50 top-[50%] -translate-y-[50%]">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={errors.password && { opacity: 1, y: 0 }}
              >
                <MdError color="var(--error)" size="20px" />
              </motion.div>
            </div>
          </motion.div>
          <div className="mt-7 md:mt-14">
            <div className="font-aria_sbold flex items-center justify-center gap-2">
              <p>مرا به خاطر بسپار</p>
              <input type="checkbox" className="bg-[#E8F0FE]" name="" id="" />
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleSubmit(LoginHandler)}
                className="mt-4 flex justify-center bg-primary font-aria_bold text-base md:text-lg w-[200px] rounded-lg py-2 text-light"
              >
                {loading ? <Loading /> : 'ورود'}
              </button>
            </div>
          </div>
          <div className="bg-primary h-[1px] w-full my-4 md:my-8" />
          <p className="text-center font-aria_sbold text-sm md:text-base">
            اگر حساب کاربری ندارید{' '}
            <span className="border-b-2 border-primary cursor-pointer">
              <Link href={'/authentication/sign-up'}>ثبت نام</Link>
            </span>{' '}
            کنید.
          </p>
          <p className="text-center font-aria_sbold text-sm md:text-base mt-2 pb-10">
            رمز عبور را فراموش کردم.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignInPage;
