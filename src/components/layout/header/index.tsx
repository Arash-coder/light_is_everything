'use client';
import Link from 'next/link';
import { HeaderLinks } from '../navigation';
import styles from './index.module.scss';
import { MdMenu } from 'react-icons/md';
import { createRef, useEffect, useState } from 'react';
import Logo from '@/../public/assets/images/logo.png';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import useAuthClient from '@/hooks/useAuthClient';
import Axios from '@/services/configAxios';
import URLS from '@/services/urls';
import { member } from '@/types/members';
import { motion } from 'framer-motion';
import { CgProfile } from 'react-icons/cg';
import { deleteCookie } from 'cookies-next';

const Header = () => {
  const router = useRouter();
  const { isLoggedIn } = useAuthClient();
  const mobileNavRef = createRef<HTMLDivElement>();
  const pathName = usePathname();
  const [data, setData] = useState<null | member>();
  const [menuProfile, setMenuProfile] = useState(false);
  const toggleMenu = () => {
    mobileNavRef.current?.classList.toggle(styles.openMenu);
  };

  useEffect(() => {
    if (isLoggedIn) {
      Axios.get(URLS.auth.me)
        .then((res) => {
          const data: member = res.data;
          setData(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [isLoggedIn]);

  return (
    <header
      className={`${
        pathName == '/' && 'absolute'
      } bg-transparent top-0 z-10 w-full`}
    >
      <nav className="hidden md:flex custom_container  items-center justify-between py-10">
        <ul className="flex items-center gap-10">
          <li className="font-aria_sbold">
            <Link href={'/'}>
              <Image
                src={Logo}
                alt="logo"
                width={30}
                height={30}
                className="rounded-md cursor-pointer mx-auto"
                priority
              />
            </Link>
          </li>
          {HeaderLinks.map((link) => {
            return (
              <li key={link.name} className={`font-aria_sbold ${styles.link}`}>
                <Link href={link.url}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
        {isLoggedIn ? (
          <ul className="cursor-pointer relative">
            {data && (
              <>
                <div
                  onClick={() => setMenuProfile(!menuProfile)}
                  className="flex gap-5"
                >
                  <div>
                    <h2 className="text-sm">{data.full_name}</h2>
                    <h3 dir="ltr" className="text-sm">
                      {data.username}
                    </h3>
                  </div>
                  <Image
                    onClick={() => setMenuProfile(!menuProfile)}
                    src={data.avatar_image_url}
                    alt="image-profile"
                    width={40}
                    height={40}
                    className="object-cover rounded-full border border-black"
                  />
                </div>
              </>
            )}

            <motion.div
              initial={{ y: -300, opacity: 0 }}
              animate={
                menuProfile ? { opacity: 1, y: 0 } : { y: -300, opacity: 0 }
              }
              className="absolute w-[200px] z-50  -right-[80px]  -bottom-28 bg-zinc-300 rounded-lg"
            >
              <div className="border-b border-gray-500">
                <Link
                  onClick={() => setMenuProfile(false)}
                  className="flex items-center gap-3 p-3"
                  href={'/dashboard/profile'}
                >
                  <CgProfile size="20px" />
                  <p className="text-sm">پروفایل‌کاربری</p>
                </Link>
              </div>
              <div
                onClick={() => {
                  deleteCookie('access');
                  deleteCookie('refresh');
                  setMenuProfile(false);
                  router.push('/');
                }}
                className="flex items-center gap-3 p-3 cursor-pointer"
              >
                <CgProfile size="20px" className="opacity-0" />
                <p className="text-sm text-error">خروج</p>
              </div>
            </motion.div>
          </ul>
        ) : (
          <ul className="flex items-center gap-10">
            <li className={`font-aria_sbold ${styles.link}`}>
              <Link href={'/authentication/sign-in'}>ورود</Link>
            </li>
            <li className={`font-aria_sbold ${styles.link}`}>
              <Link href={'/authentication/sign-up'}>ثبت‌نام</Link>
            </li>
          </ul>
        )}
      </nav>

      <nav ref={mobileNavRef} className="md:hidden ">
        <div
          onClick={toggleMenu}
          className={`${styles.overlay}  bg-black opacity-50 h-screen w-screen fixed top-0 z-10 hidden`}
        />
        <div className={`z-30 ${styles.menuButtun} `} onClick={toggleMenu}>
          <MdMenu
            fill="white"
            size={30}
            className={`m-4 z-30   cursor-pointer hover:scale-110 transition-all select-none relative `}
          />
        </div>
        <ul
          className={`${styles.mobileMenuRef} translate-x-48 fixed z-20 top-0 p-3 px-10 transition-all h-screen text-white flex flex-col justify-center gap-4 bg-indigo-950`}
        >
          {HeaderLinks.map((link) => {
            return (
              <li
                key={link.name}
                className={`font-aria_sbold p-1 rounded-lg flex justify-center items-center hover:scale-125 transition-all `}
              >
                <Link href={link.url}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
