'use client';
import Link from 'next/link';
import { HeaderLinks, HeaderLinksMobile } from '../navigation';
import styles from './index.module.scss';
import { MdMenu } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
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
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    mobileNavRef.current?.classList.toggle(styles.openMenu);
    setOpenMenu(!openMenu);
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
              <li
                key={link.name}
                className={`font-aria_sbold ${
                  link.disabled ? 'opacity-50 cursor-not-allowed' : styles.link
                }`}
              >
                {link.disabled ? (
                  <p>{link.name}</p>
                ) : (
                  <Link href={link.url}>{link.name}</Link>
                )}
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
                    <h3 dir="ltr" className="text-sm font-aria_en">
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

      <nav ref={mobileNavRef} className="md:hidden">
        <div
          onClick={toggleMenu}
          className={`${styles.overlay}  bg-black opacity-50 h-screen w-screen fixed top-0 z-10 hidden`}
        />
        <div className="flex justify-between items-center pb-20">
          <div
            className={`z-30 ${styles.menuButtun} flex-1`}
            onClick={toggleMenu}
          >
            <MdMenu
              fill="black"
              size={30}
              className={`m-4 z-30 ${
                openMenu && 'opacity-0'
              }  cursor-pointer hover:scale-110 transition-all select-none relative `}
            />
          </div>
          {!data && (
            <div className={`${data && 'flex-1'} pl-5`}>
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
            </div>
          )}
          {data && (
            <>
              <div className={`pl-5`}>
                <>
                  <div className="flex gap-1">
                    <div>
                      <h2 className="text-sm">{data.full_name}</h2>
                      <h3 dir="ltr" className="text-sm">
                        {data.username}
                      </h3>
                    </div>
                    <Image
                      src={data.avatar_image_url}
                      alt="image-profile"
                      width={35}
                      height={30}
                      className="object-cover w-10 h-10 rounded-full border border-black"
                    />
                  </div>
                </>
              </div>
            </>
          )}
        </div>
        <ul
          className={`${styles.mobileMenuRef} translate-x-48 fixed z-20 top-0 p-3 px-10 transition-all h-screen text-white flex flex-col justify-center gap-4 bg-indigo-950`}
        >
          <div className="absolute top-0 right-0">
            <IoClose
              fill="white"
              size={30}
              className={`m-4 z-30   cursor-pointer hover:scale-110 transition-all select-none relative `}
            />
          </div>
          {HeaderLinksMobile.map((link) => {
            return (
              <li
                key={link.name}
                className={`font-aria_sbold p-1 ${
                  link.disabled && 'opacity-50'
                } rounded-lg flex justify-center items-center hover:scale-125 transition-all `}
              >
                {link.disabled ? (
                  <p>{link.name}</p>
                ) : (
                  <Link onClick={toggleMenu} href={link.url}>
                    {link.name}
                  </Link>
                )}
              </li>
            );
          })}
          {isLoggedIn ? (
            <>
              <li
                className={`font-aria_sbold p-1 rounded-lg flex justify-center items-center hover:scale-125 transition-all `}
              >
                <Link onClick={toggleMenu} href={'/dashboard/profile'}>
                  پروفایل‌کاربری
                </Link>
              </li>
            </>
          ) : (
            <>
              <li
                className={`font-aria_sbold p-1 rounded-lg flex justify-center items-center hover:scale-125 transition-all `}
              >
                <Link onClick={toggleMenu} href={'/authentication/sign-up'}>
                  ثبت‌نام/ورود
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
