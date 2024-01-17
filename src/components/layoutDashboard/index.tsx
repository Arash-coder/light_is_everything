'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { MdAccountCircle } from 'react-icons/md';
import { RiGalleryFill, RiTelegramFill } from 'react-icons/ri';
import { FaWallet } from 'react-icons/fa6';
import { usePathname, useRouter } from 'next/navigation';
import { member } from '@/types/members';
import Axios from '@/services/configAxios';
import URLS from '@/services/urls';

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

const DashboardLayout = ({ children }: Props) => {
  const [data, setData] = useState<null | member>();

  useEffect(() => {
    Axios.get(URLS.auth.me).then((res: { data: member }) => {
      setData(res.data);
    });
  }, []);

  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="custom_container flex flex-col md:flex-row  justify-stretch items-stretch gap-3">
      <div className="p-8 bg-neutral-200 rounded-xl py-12 ">
        <Image
          className="w-40  object-contain rounded-full  border-black border-2 mb-8 mx-auto"
          alt="profile"
          width={40}
          height={40}
          src={data?.avatar_image_url ?? ''}
        />
        <Button
          className="mb-4"
          onClick={() => router?.push('/dashboard/profile')}
          focused={pathname.includes('/dashboard/profile')}
          icon={<MdAccountCircle size={20} />}
          text="پروفایل کاربری"
        />
        <Button
          className="mb-4"
          onClick={() => router?.push('/dashboard/gallery')}
          focused={pathname.includes('/dashboard/gallery')}
          icon={<RiGalleryFill size={20} />}
          text="گالری"
        />
        {data?.is_verified ? (
          <Button
            className="mb-4"
            onClick={() => router?.push('https://t.me/+hPEdvWbOp65hNTc0')}
            focused={pathname.includes('https://t.me/+hPEdvWbOp65hNTc0')}
            icon={<RiTelegramFill size={20} />}
            text="گروه تلگرام"
          />
        ) : (
          <Button
            className="mb-4"
            disabled
            icon={<RiTelegramFill size={20} />}
            text="گروه تلگرام"
          />
        )}
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

export default DashboardLayout;
