import Image from 'next/image';
import { useTranslations } from 'next-intl';
import headerBg from '@/../public/assets/images/header-bg.png';
import headerBgGradient from '@/../public/assets/images/bg-headr-gradient.png';
import purpleGirl from '@/../public/assets/images/purple-girl.jpg';
import flask from '@/../public/assets/images/flask.jpg';
import Slider1 from '@/components/Slider1';
import CoverflowSlider from '@/components/CoverflowSlider';
import Slider2 from '@/components/Slider2';

export default function Home() {
  const t = useTranslations('Index');
  return (
    <>
      <main>
        <section className="w-full  bg-primary  relative">
          <Image
            className=" h-screen object-cover	"
            alt="header-bg"
            src={headerBg}
          />
          <Image
            className=" h-screen object-cover -bottom-[200px]	absolute z-10"
            alt="header-bg"
            src={headerBgGradient}
          />
        </section>
        <section className="w-full p-10  bg-black relative  after:absolute after:bottom-0 after:left-[50%] after:w-7 after:h-7 after:bg-black after:translate-y-[50%] after:-translate-x-[50%] after:rotate-45">
          <div className="text-white z-20 relative max-w-4xl  m-auto">
            <div className="text-white text-center mb-3">
              {t('رنگ تمام داشته های یه هنرمنده')}
            </div>
            <div className="text-center w-full max-w-md m-auto mb-7">
              نور آغازی است برای تحقق رویاها و پرتویی لطیف که دل ها رو به سمت
              امید هدایت می کند!
            </div>
            <div className="text-justify max-w-[1500px]">
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
          <div className="flex justify-between items-center text-white mb-20">
            <div className="flex flex-col items-center ">
              <div className="text-8xl">350</div>
              <div>مسافت طی شده در یک فتوواک</div>
            </div>
            <div className="flex flex-col items-center ">
              <div className="text-8xl">350</div>
              <div>نفر با ما همراه شدن</div>
            </div>
            <div className="flex flex-col items-center ">
              <div className="text-8xl">350</div>
              <div>دورهمی برکزار شده</div>
            </div>
          </div>
          <div className="">
            <Slider1 />
          </div>
        </section>
        <div className="mt-28 text-center mb-10">
          <div className="mb-10">LIFE IS EVERYTHING</div>

          <CoverflowSlider />
        </div>
        <div className="text-center mb-24">
          <div className="text-6xl mb-6">همین امروز به ما بپیوندید</div>
          <button className="rounded-full bg-black text-white px-4 py-2">
            به ما بپیوندید
          </button>
        </div>
        <div>
          <Image
            className="  object-cover	"
            alt="purple-girl"
            src={purpleGirl}
          />
        </div>
        <div className="text-center relative h-screen flex justify-center items-center">
          <Image
            src={flask}
            className="absolute h-[400px] w-[200px] object-contain left-20"
            alt="flask"
          />
          <Image
            src={flask}
            className="absolute h-[400px] w-[200px] object-contain left-60 top-40"
            alt="flask"
          />
          <Image
            src={flask}
            className="absolute h-[400px] w-[200px] object-contain right-0 z-10"
            alt="flask"
          />
          <Image
            src={flask}
            className="absolute h-[400px] w-[200px] object-contain right-40 top-40"
            alt="flask"
          />
          <div className="max-w-sm m-auto  ">
            <div>
              نور آغازی است برای تحقق رویاها و پرتویی که دل ها رو به سمت امید!
            </div>
            <div>
              محصولات نور به دسته‌ای از محصولات اشاره دارد که به نوعی با استفاده
              از نور یا برای تولید نور، کنترل نور یا بهره‌برداری از خواص نور
              طراحی شده‌اند. این محصولات می‌توانند در زمینه‌های مختلفی مانند
              روشنایی، نمایش، فناوری، پزشکی و بسیاری دیگر از حوزه‌ها کاربرد
              داشته باشند
            </div>
          </div>
        </div>
        <div className="mb-20">
          <Slider2 />
        </div>
      </main>
    </>
  );
}
