'use client';
import React from 'react';
import profile2 from '@/../public/assets/images/profile-2.png';
import Image from 'next/image';
import { MdAccountCircle } from 'react-icons/md';
import { RiGalleryFill } from 'react-icons/ri';
import { FaWallet } from 'react-icons/fa6';
import { usePathname, useRouter } from 'next/navigation';

type Props = { children: React.ReactNode };

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.HtmlHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  focused?: boolean;
  disabled?: boolean;
  text: string;
  icon: JSX.Element;
}
const Button = ({
  focused = false,
  disabled = false,
  text,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`${(!focused || disabled) && ' ghost'} ${
        disabled && 'disabled'
      } btn block w-full ${props.className}`}
    >
      <div className="flex items-start justify-start gap-2">
        {icon}
        <div className="font-aria_sbold">{text}</div>
      </div>
    </button>
  );
};

const Accountlayout = ({ children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="custom_container flex gap-3">
      <div className="p-8 bg-neutral-200 rounded-xl py-12">
        <Image
          className="w-40 h-40 object-contain rounded-full  border-black border-4 mb-8"
          alt="profile"
          src={profile2}
        />
        <Button
          className="mb-4"
          onClick={() => router?.push('/account/info')}
          focused={pathname.includes('/account/info')}
          icon={<MdAccountCircle size={20} />}
          text="پروفایل کاربری"
        />
        <Button
          className="mb-4"
          onClick={() => router?.push('/account/gallery')}
          focused={pathname.includes('/account/gallery')}
          icon={<RiGalleryFill size={20} />}
          text="گالری"
        />
        <Button
          disabled
          icon={<FaWallet size={20} />}
          text="سفارسات (به زودی)"
        />
      </div>

      {children}
    </div>
  );
};

export default Accountlayout;
