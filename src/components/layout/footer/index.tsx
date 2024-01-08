import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-light ">
      <div className="custom_container py-24 flex flex-wrap md:flex-nowrap justify-between items-start">
        <div className="w-full md:w-[80%]">
          <div className="flex items-center">
            <Image
              src="/assets/images/logo.png"
              alt="text"
              width={80}
              height={100}
              className="animate-pulse"
            />
            <h2 className="font-aria_xbold  text-calc_15/2vw lg:text-5xl">
              در جستجوی نور ...
            </h2>
          </div>
          <p className="text-justify w-full md:w-[70%] mt-5">
            نور، آن جادویی است که در روزنه‌های زندگی ما رقص می‌کند. او انعکاس
            می‌یابد و در لمس اعوجاج پنجره‌ها، جان می‌گیرد. نور، از صبح تا غروب,
            با شعاع‌های لطافت خود سکوت را از تاریکی میگیرد و آرامش را به
            دستانمان هدیه می‌دهد.
          </p>
        </div>
        <div className="flex flex-col  items-start gap-10 md:flex-row w-full md:w-[50%] justify-between">
          <ul className="flex flex-col gap-5 mt-10 md:mt-0">
            <li>
              <Link href="/family">خانواده نور</Link>
            </li>
            <li className="opacity-50 cursor-not-allowed">
              <p>بلاگ نور</p>
            </li>
            <li>
              <Link href="/authentication/sign-in">ثبت نام</Link>
            </li>
          </ul>
          <div className="flex flex-col items-center mx-auto md:mx-0">
            <Link
              className="bg-[#D9D9D9] w-full  py-2 rounded-md "
              target="_blank"
              href={'https://zarinp.al/light_is_everything'}
            >
              <div className="flex items-center gap-2 justify-center">
                <FaHeart color="black" />
                <span className="text-black">حمایت از خانواده نور</span>
              </div>
            </Link>
            <div className="mt-10">
              <Link href="/" className="flex items-center justify-end gap-3">
                <span className="text-2xl pt-2">lightiseveryting.ir</span>
                <FaInstagram color="white" size="38px" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
