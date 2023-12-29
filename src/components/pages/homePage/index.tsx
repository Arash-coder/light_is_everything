'use client';

import Image from 'next/image';

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
import Typewriter from 'typewriter-effect';
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
                  options={{
                    strings: data.quotes.map((quote) => quote.text),
                    autoStart: true,
                    loop: true
                  }}
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
              نور زبانی ست مشترک برای از بین بردن تاریکی ها
            </div>
            <div className="text-light text-center text-2xl font-aria_xbold mt-4">
              نور، آن جادویی است که در روزنه‌های زندگی ما رقص می‌کند. او انعکاس می‌یابد و در لمس اعوجاج پنجره‌ها، جان می‌گیرد. نور، از صبح تا غروب, با شعاع‌های لطافت خود سکوت را از تاریکی میگیرد و آرامش را به دستانمان هدیه می‌دهد.
            </div>
            <div className="text-light text-justify text-last text-align-last-center font-aria_regular text-lg md:text-xl mt-8">
              او در سحرگاهان به پنجره‌های دل‌ها می‌زند و به زندگی تازگی می‌بخشد. نور، آفتابی است که خنده‌ای به شب تلخ عشق می‌دهد و نقاب تاریکی را از روی چهره زمین برمی‌دارد و در هر آستانه‌ای که قدم می‌گذارد، رنگ‌های زندگی را  پاکی و شفافیت می‌بخشد
                نور، هنرمندی است که با هر جزئی از طبیعت به گفتن داستانی جدید می‌پردازد. او در پرتوهای خورشید، لوحی را بر روی آسمان نقاشی می کند و در خمیدن برگ‌ها، حکایتی از زمین می‌خواند. با هر لمس خورشید به دریا، او چشمان آبی آسمان را به ترانه‌های دریا می‌بندد و با نوری که از ابرها فرو می‌چکد، قصه‌ای از آب و هوا می‌سراید.
                هرچه آن را بیشتر می‌شناسیم، نور را بهتر درک می‌کنیم. او نه تنها منشأ روشنایی است، بلکه نمادی از امید و روح است. نور، با وجود هرچه زیبا و زاویه‌های مختلفی که به او نگاه کنیم، همواره معنایی ناب و جذاب در خود جای دارد. او همیشه در حال تحول است و با هر طول موجی که دارد، داستانی تازه و مافوق العاده برای ما می‌نویسد.
                در پناه سایه‌های نور، احساس آرامش و امنیت را تجربه کنید. نور، بی‌کلام و با صدایی بی‌صدا، زبان عاشقانه‌ای است که در هر قطره از وجودش، حکایتی از زندگی و زیبایی را برایمان رقم میزند
                این تازه اول داستان ما خواهد بود ...
                به خانواده ما, خانواده نور خوش آمدید
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
                 به دنیایی از ارزش‌ها و زیبایی‌ها خوش آمدید
              </h2>
              <p className="font-aria_normal text-lg md:text-2xl mt-8">
                ما با افتخار مجموعه‌ای از محصولاتی را به شما ارائه می‌دیم که نه تنها از نظر کیفی ،بلکه به لحاظ معنوی دارای ارزش بالایی برای ما هستن
هر یک از این محصولات ، با نگاهی به نیاز های خانواده نور تولید شدن. گرچه اونها بهانه ای برای شباهت بیشتر ظاهری این خانواده هستن اما باتوجه به کیفیت مطلوب اونها به لحاظ متریال و دیزاین, آماده اراءه به تمام عزیزان و اقشار مختلف هستن
اما در پروسه تولید این محصولات فقط کیفیت هدف ما نبوده .  هر کدوم از این محصول ها یک داستان مجزا رو با خودش به همراه داره. هر محصول، بازگویی‌ای از خلاقیت و اندیشه ماست. هر طرح و هر جزئیاتی که در محصولات ما مشاهده می‌شوه، دارای یک ارزش معنوی ست که به شما احساس تعلق و همدلی با اون رو می‌ده.
میتونین با ما در این سفر به دنیای زیبایی و ارزش‌ها همراه شید و تجربه‌ای منحصربه‌فرد از محصولاتی که همه جانبه هستند رو بدست بیارید
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
کمک های شما چه مادی و چه معنوی در شکوه خانواده نور موثر خواهد بود
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
