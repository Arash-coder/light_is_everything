'use client';

import Image from 'next/image';

import headerBg from '@/../public/assets/images/header-bg.png';
import cards from '@/../public/assets/images/cards.png';
import headerBgGradient from '@/../public/assets/images/bg-headr-gradient.png';
import purpleGirl from '@/../public/assets/images/purple-girl.jpg';
import flask from '@/../public/assets/images/flask.jpg';
import Slider1 from '@/components/Slider1';
import CoverflowSlider from '@/components/CoverflowSlider';
import Slider2 from '@/components/Slider2';
import CountUp from 'react-countup';
import { VscTriangleDown } from 'react-icons/vsc';

const HomePage = () => {
  return (
    <>
      <main>
        <section className="h-screen relative flex justify-center items-center">
          <Image className="object-cover" fill alt="header-bg" src={headerBg} />
          {/* <Image
            className=" h-screen object-cover -bottom-[200px]	absolute z-10"
            alt="header-bg"
            src={headerBgGradient}
          /> */}
          <div className=" relative">
            <div className="absolute top-0 -translate-y-[65%] right-0">
              <h2 className="font-aria_xbold text-8xl">نورهمه‌چیزه...</h2>
              <p className="font-aria_sbold text-xl mt-4">
                نورزبانی‌است‌که‌بی‌اراده‌مارابهم‌وصل‌می‌کند٬مارابهم‌متصل‌می‌کند.
              </p>
              <button className="bg-primary font-aria_sbold text-light mt-4 py-2 px-5 text-base rounded-3xl">
                به‌ما‌بپیوندید
              </button>
            </div>
          </div>
        </section>
        <section className=" w-full bg-background">
          <div className="relative custom_container">
            <div className="text-light font-aria_sbold text-xl text-center">
              رنگ تمام داشته های یه هنرمنده
            </div>
            <div className="text-light text-center text-2xl font-aria_xbold mt-4">
              نور آغازی است برای تحقق رویاها و پرتویی لطیف <br /> که دل ها رو به
              سمت امید هدایت می کند!
            </div>
            <div className="text-light text-center font-aria_regular text-xl mt-8">
              اواخر پاییز ۹۷، وسط یه کافه خلوت، داستان ساعت‌شنی از پرسیدن یه
              سوال شروع شد؛ چرا دوره ویدئویی یا محتوای فارسی باکیفیت توی حوزه‌ی
              هنرهای دیجیتال وجود نداره؟! بعد از مطالعه و بررسی‌ها تصمیم گرفتیم
              دوره هم جمع بشیم تا دوره‌های تخصصی و با کیفیتی تولید کنیم، اما
              نمیدونستیم وارد چه مسیر عجیبی خواهیم شد. با هر جا و هر کسی صحبت
              میکردیم یا اعتقادی به دوره‌های آنلاین نداشت و یا محتوای فارسی یا
              اعتقادی به دوره‌های آنلاین نداشت و یا محتوای فارسیرو بی‌اعتبار
              می‌دونست، منبع مالی و موقعیت خاصی هم برای شروع این کار سنگین
              نداشتیم.
            </div>
          </div>
          <div className="flex justify-between items-center text-light mt-16 custom_container">
            <div className="flex flex-col flex-1 items-center ">
              <div className="text-9xl font-aria_sbold">
                <CountUp end={93} duration={5} />
              </div>
              <div className="font-aria_sbold text-lg">
                مسافت طی شده در یک فتوواک
              </div>
            </div>
            <div className="flex flex-col flex-1 items-center">
              <div className="text-9xl font-aria_sbold">
                <CountUp end={350} duration={5} />
              </div>
              <div className="font-aria_sbold text-lg">نفر با ما همراه شدن</div>
            </div>
            <div className="flex flex-col flex-1 items-center ">
              <div className="text-9xl font-aria_sbold">
                <CountUp end={17} duration={5} />
              </div>
              <div className="font-aria_sbold text-lg">دورهمی برکزار شده</div>
            </div>
          </div>
          <div className="custom_container mt-16 relative">
            <Slider1 />
            <VscTriangleDown
              className="absolute -bottom-14 right-[50%] translate-x-[50%] "
              color="var(--background)"
              size="100"
            />
          </div>
        </section>
        <div className="pt-28 text-center bg-background_slider">
          <div className="mb-10 font-aria_normal text-3xl tracking-widest">
            LIFE IS EVERYTHING
          </div>
          {/* <CoverflowSlider /> */}
          <div className="relative w-full h-[600px]">
            <Image
              src={cards}
              alt="cards"
              fill
              className="object-cover -mt-[200px]"
            />
          </div>
        </div>
        <div className="text-center py-16 bg-background_slider -mt-[200px]">
          <div className="text-7xl mb-6 font-aria_light">
            همین امروزبه ما بپیوندید
          </div>
          <button className="bg-primary font-aria_sbold text-light mt-4 py-2 px-5 text-2xl rounded-3xl">
            به‌ما‌بپیوندید
          </button>
        </div>
        <div>
          <Image className="object-cover" alt="purple-girl" src={purpleGirl} />
        </div>
        <div className="text-center  relative h-screen flex justify-center items-center bg-light -z-10">
          <Image
            src={flask}
            className="absolute h-[400px] w-[300px] object-contain top-10 left-20"
            alt="flask"
          />
          <Image
            src={flask}
            className="absolute h-[400px] w-[300px] object-contain left-60 top-40"
            alt="flask"
          />
          <Image
            src={flask}
            className="absolute h-[400px] w-[300px] object-contain right-0 top-10 z-10"
            alt="flask"
          />
          <Image
            src={flask}
            className="absolute h-[400px] w-[300px] object-contain right-40 top-40"
            alt="flask"
          />
          <div className="custom_container">
            <h2 className="font-aria_xbold text-3xl">
              نور آغازی است برای تحقق رویاها و <br /> پرتویی که دل ها رو به سمت
              امید!
            </h2>
            <p className="font-aria_normal text-2xl mt-8">
              محصولات نور به دسته‌ای از محصولات اشاره <br /> دارد که به نوعی با
              استفاده از نور یا برای تولید نور، کنترل <br /> نور یا بهره‌برداری
              از خواص نور طراحی شده‌اند. این <br /> محصولات می‌توانند در
              زمینه‌های مختلفی مانند <br /> روشنایی، نمایش، فناوری، پزشکی و
              بسیاری دیگر از <br /> حوزه‌ها کاربرد داشته باشند
            </p>
            <p className="text-blue font-aria_bold text-xl mt-8">به‌زودی...</p>
          </div>
        </div>
        <section className="w-full h-[90vh] bg-primary flex flex-col justify-center items-center">
          <h2 className="font-aria_bold text-light text-6xl">
            نظرات‌همراهان‌ما
          </h2>
          <div className="mt-16 h-[60%]">
            <Slider2 />
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
