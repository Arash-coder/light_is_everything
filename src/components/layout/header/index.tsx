import Link from 'next/link';
import { HeaderLinks } from '../navigation';
import styles from './index.module.scss';

const Header = () => {
  return (
    <header className="absolute top-0 z-10 w-full">
      <nav className="custom_container flex items-center justify-between py-10">
        <ul className="flex items-center gap-10">
          <li className="font-aria_sbold">icon</li>
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
            <Link href={'/'}>ورود</Link>
          </li>
          <li className={`font-aria_sbold ${styles.link}`}>
            <Link href={'/'}>ثبت‌نام</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
