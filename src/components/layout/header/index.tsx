'use client';
import Link from 'next/link';
import { HeaderLinks } from '../navigation';
import styles from './index.module.scss';
import { MdMenu } from 'react-icons/md';
import { createRef } from 'react';
import Logo from '@/../public/assets/images/logo.png';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const mobileNavRef = createRef<HTMLDivElement>();
  const pathName = usePathname()
  console.log("PATHNAME ", pathName)
  const toggleMenu = () => {
    mobileNavRef.current?.classList.toggle(styles.openMenu);
  };
  return (
    <header className={`${pathName == '/' && 'absolute'} top-0 z-10 w-full`}>
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
        <ul className="flex items-center gap-10">
          <li className={`font-aria_sbold ${styles.link}`}>
            <Link href={'/authentication/sign-in'}>ورود</Link>
          </li>
          <li className={`font-aria_sbold ${styles.link}`}>
            <Link href={'/authentication/sign-up'}>ثبت‌نام</Link>
          </li>
        </ul>
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
