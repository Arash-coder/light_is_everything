'use client';

import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import headerBg from '@/../public/assets/images/header-bg.png';
import cards from '@/../public/assets/images/cards.png';
import zarinpal from '@/../public/assets/images/zarinpal.png';
import donate from '@/../public/assets/images/donate.jpg';
import purpleGirl from '@/../public/assets/images/purple-girl.jpg';
import flask from '@/../public/assets/images/flask.png';
import Slider1 from '@/components/Slider1';
import Slider2 from '@/components/Slider2';
import CountUp from 'react-countup';
import { VscTriangleDown } from 'react-icons/vsc';
import { landingData } from '@/types/landing';
import Link from 'next/link';

const HomePage = ({ data }: { data: landingData }) => {
  return (
    <>
      <main className="overflow-x-hidden">
        <section className="h-[80vh] md:h-screen relative flex justify-center items-center">
          <Image
            priority
            className="object-cover"
            fill
            alt="header-bg"
            src={headerBg}
          />
          {/* <div className="z-10 md:relative w-full md:w-auto">
            <div className="md:absolute w-full md:w-auto top-0 -translate-y-[65%] right-0">
              <h2 className="font-aria_xbold text-calc_10vw  text-center">
                نورهمه‌چیزه...
              </h2>
              <p className="font-aria_sbold md:text-xl mt-4 text-center md:text-right">
                نورزبانی‌است‌که‌بی‌اراده‌مارابهم‌وصل‌می‌کند٬{' '}
                <br className="md:hidden" /> مارابهم‌متصل‌می‌کند.
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="bg-primary font-aria_sbold text-light mt-4 py-2 px-5 text-base  rounded-3xl">
                  به‌ما‌بپیوندید
                </button>
              </div>
            </div>
          </div> */}
          <div className="w-full relative text-center md:text-left ">
            <div className=" w-full absolute top-0 flex flex-col items-center md:items-start px-3 -translate-y-[70%]  md:-translate-y-[65%] -translate-x-[50%] -right-[50%] md:right-0  ">
              <h2 className="font-aria_xbold  text-calc_15/2vw lg:text-8xl">
                نورهمه‌چیزه...
              </h2>
              <div className="font-aria_sbold md:text-lg lg:text-xl mt-4 text-center md:text-right">
                <Typewriter
                  words={data.quotes.map((quote) => quote.text)}
                  loop={5}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </div>
              <Link href={'/authentication/sign-up'}>
                <button className="bg-primary font-aria_sbold text-light mt-4 py-2 px-5 text-base rounded-3xl">
                  به‌ما‌بپیوندید
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className=" w-full bg-background">
          <div className="relative custom_container">
            <div className="text-light font-aria_sbold text-xl text-center pt-16">
              رنگ تمام داشته های یه هنرمنده
            </div>
            <div className="text-light text-center text-2xl font-aria_xbold mt-4">
              نور آغازی است برای تحقق رویاها و پرتویی لطیف که دل ها رو به سمت
              امید هدایت می کند!
            </div>
            <div className="text-light text-justify text-last text-align-last-center font-aria_regular text-lg md:text-xl mt-8">
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
          <div className="flex gap-10 flex-col md:flex-row justify-between items-center text-light mt-16 custom_container">
            {data.metric_counters.length > 0 &&
              data.metric_counters.map((metric) => {
                return (
                  <div
                    key={metric.title}
                    className="flex flex-col flex-1 items-center "
                  >
                    <div className="text-7xl md:text-9xl font-aria_sbold">
                      <CountUp end={parseInt(metric.count)} duration={5} />
                    </div>
                    <div className="font-aria_sbold text-lg">
                      {metric.title}
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="custom_container mt-16 relative">
            {data.events.length > 0 && <Slider1 data={data.events} />}
            <VscTriangleDown
              className="absolute -bottom-14 right-[50%] translate-x-[50%] "
              color="var(--background)"
              size="100"
            />
          </div>
        </section>
        <div className="pt-14 md:pt-28 text-center bg-background_slider">
          <div className="mb-10 font-aria_normal text-xl md:text-3xl tracking-widest">
            LIGHT IS EVERYTHING
          </div>

          <div className="relative md:w-full w-[90%] mx-auto">
            <Image
              src={cards}
              alt="cards"
              width={1200}
              height={100}
              className="object-cover mx-auto"
            />
          </div>
        </div>
        <div className="text-center py-8 md:py-16 bg-background_slider ">
          <div className="text-calc_10vw md:text-7xl mb-6 font-aria_light">
            همین امروز به ما بپیوندید
          </div>
          <button className="bg-primary font-aria_sbold text-light mt-4 py-2 px-5 text-base rounded-3xl">
            به‌ ما‌ بپیوندید
          </button>
        </div>

        <div className="relative h-[40vh] md:h-[75vh]">
          <Image
            className="object-cover w-full "
            alt="purple-girl"
            fill
            src={purpleGirl}
          />
        </div>

        <div className="text-center relative pt-8 md:pt-16 pb-16 md:pb-32 flex justify-center items-center bg-light -z-10">
          <div className="relative">
            <div className="custom_container flex flex-col items-center text-justify text-align-last-center p-3 !max-w-md">
              <h2 className="font-aria_xbold text-xl md:text-3xl">
                نور آغازی است برای تحقق رویاها و پرتویی که دل ها رو به سمت امید!
              </h2>
              <p className="font-aria_normal text-lg md:text-2xl mt-8">
                محصولات نور به دسته‌ای از محصولات اشاره دارد که به نوعی با
                استفاده از نور یا برای تولید نور، کنترل نور یا بهره‌برداری از
                خواص نور طراحی شده‌اند. این محصولات می‌توانند در زمینه‌های
                مختلفی مانند روشنایی، نمایش، فناوری، پزشکی و بسیاری دیگر از
                حوزه‌ها کاربرد داشته باشند
              </p>
              <p className="text-blue font-aria_bold text-base md:text-xl mt-8">
                به‌ زودی ...
              </p>
            </div>
            <Image
              src={flask}
              className="absolute h-[400px] object-contain top-10 -left-96  hidden lg:block"
              alt="flask"
            />
            <Image
              src={flask}
              className="absolute h-[400px] object-contain -left-52 top-40 hidden  md:block"
              alt="flask"
            />
            <Image
              src={flask}
              className="absolute h-[400px] object-contain -right-[500px] top-10 z-10 hidden lg:block"
              alt="flask"
            />
            <Image
              src={flask}
              className="absolute h-[400px] object-contain -right-80 top-40  hidden  md:block"
              alt="flask"
            />
          </div>
        </div>
        <section className="w-full py-14 md:py-28 h-full bg-primary flex flex-col justify-center items-center select-none">
          <h2 className="font-aria_bold text-light text-calc_10vw md:text-calc_5vw lg:text-6xl my-5 md:my-10 ">
            نظرات‌ همراهان‌ ما
          </h2>
          {data.user_reviews.length > 0 && <Slider2 data={data.user_reviews} />}
        </section>
        <section className="w-full relative h-[50vh] flex items-center">
          <Image
            src={donate}
            alt="donate"
            className="-z-10 absolute w-full h-full"
          />
          <div className="flex gap-5 flex-col md:flex-row justify-between items-center custom_container !max-w-3xl z-10">
            <button className="bg-primary font-aria_sbold text-light  py-3 px-5 text-base rounded-3xl">
              از ما حمایت‌ کنید
            </button>
            <div className="flex  items-center gap-5 text-justify">
              <div>
                <p className="font-aria_bold text-lg md:text-4xl">
                  از خانواده‌ نور‌ حمایت‌ کنید
                </p>
                <p className="font-aria_light text-sm md:text-2xl sm:text-2xl md:tracking-widest mt-2">
                  ما به‌‌ کمک‌ های‌ شما‌ دلگرم‌ هستیم
                </p>
              </div>
              <Image src={zarinpal} alt="zarinpal" width={60} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
