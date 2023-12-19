'use client';

import ArrowRight from '@/components/icons/ArrowRight';
import Link from 'next/link';
import Logo from '@/../public/assets/images/logo.png';
import Image from 'next/image';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { useState } from 'react';

const SignUpPage = () => {
  const [show_password, setShow_password] = useState(false);
  return (
    <div className="w-screen h-screen bg-bg-sign-up bg-cover relative flex justify-center items-center">
      <Link
        href={'/'}
        className="absolute  right-[3%] top-[3%] flex items-center gap-2 transition-all hover:gap-4 cursor-pointer text-light font-aria_medium text-base "
      >
        <ArrowRight />
        <p className="link before:!bg-white">بازگشت به خانه</p>
      </Link>
      <section className="custom_container flex justify-between">
        <div className="flex items-center justify-center gap-6 -mt-28">
          <div>
            <h1 className="font-aria_bold text-light text-4xl tracking-wide text-center">
              Light Is Everything
            </h1>
            <p className="font-aria_sbold text-light text-base text-center">
              نور زبانی است که بی اراده مارا بهم متصل می‌کند
            </p>
          </div>
          <Image
            src={Logo}
            width={80}
            className="rounded-xl"
            height={100}
            alt="logo"
          />
        </div>
        <div className="bg-light pt-16 w-[480px] px-16 rounded-3xl">
          <h2 className="font-aria_xbold text-2xl text-center">ثبت نام</h2>
          <div className="flex items-center gap-4 justify-center mt-4">
            <input
              type="text"
              placeholder="نام"
              className="flex-1 placeholder:text-right bg-[#E8F0FE] focus:outline-none font-aria_sbold px-4 py-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="نام‌خانوادگی"
              className="flex-1 placeholder:text-right bg-[#E8F0FE] focus:outline-none font-aria_sbold px-4 py-2 rounded-lg"
            />
          </div>
          <input
            dir="ltr"
            type="text"
            className="mt-4 placeholder:text-right bg-[#E8F0FE] focus:outline-none font-aria_sbold w-full px-4 py-2 rounded-lg"
            placeholder="شماره موبایل"
          />
          <input
            dir="ltr"
            type="email"
            className="mt-4 placeholder:text-right bg-[#E8F0FE] focus:outline-none font-aria_sbold w-full px-4 py-2 rounded-lg"
            placeholder="ایمیل"
          />
          <input
            type="text"
            className="mt-4 placeholder:text-right bg-[#E8F0FE] focus:outline-none font-aria_sbold w-full px-4 py-2 rounded-lg"
            placeholder="نام کاربری"
          />
          <input
            type="text"
            className="mt-4 placeholder:text-right bg-[#E8F0FE] focus:outline-none font-aria_sbold w-full px-4 py-2 rounded-lg"
            placeholder="رمز عبور"
          />
          <input
            type="text"
            className="mt-4 placeholder:text-right bg-[#E8F0FE] focus:outline-none font-aria_sbold w-full px-4 py-2 rounded-lg"
            placeholder="تکراررمز عبور"
          />
          <div className="mt-4">
            <div className="font-aria_sbold flex items-center justify-center gap-2">
              <p>مرا به خاطر بسپار</p>
              <input type="checkbox" className="bg-[#E8F0FE]" name="" id="" />
            </div>
            <div className="flex justify-center">
              <button className="mt-4 bg-primary font-aria_bold text-lg w-[200px] rounded-lg py-2 text-light">
                ثبت نام
              </button>
            </div>
          </div>
          <div className="bg-primary h-[1px] w-full my-8" />
          <p className="text-center font-aria_sbold text-base pb-10">
            قبلا ثبت نام کرده اید؟
            <span className="border-b-2 border-primary cursor-pointer">
              <Link href={'/authentication/sign-in'}>ورود</Link>
            </span>{' '}
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignUpPage;
