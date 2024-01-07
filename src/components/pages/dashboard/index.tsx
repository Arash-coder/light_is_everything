'use client';

import React from 'react';

import { member } from '@/types/members';
import UserInformation from '@/components/userInformation';
import UserPassword from '@/components/userPassword';
import UserSociaMedia from '@/components/userSocialMedia';

type Props = {
  data: member;
};

const AccountInfo = (props: Props) => {
  return (
    <div className="grow mb-20">
      <h2 className="font-aria_bold text-3xl mb-8">
        پروفایل{' '}
        {props.data.is_verified ? (
          <span className="text-[#088123] text-sm">(تایید شده)</span>
        ) : (
          <span className="text-[#0C609D] text-sm">(در انتظار تایید)</span>
        )}
      </h2>
      <div className="font-aria_sbold">
        <h2 className="text-xl mb-4">اطلاعات کاربری</h2>
        <div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-6">
            <UserInformation data={props.data} />
          </div>
          <div className="divider" />
          <h2 className="text-xl mb-4">رمز عبور</h2>
          <UserPassword />
          <div className="divider" />
          <h2 className="text-xl mb-4">شبکه های اجتماعی</h2>
          <UserSociaMedia data={props.data} />
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
