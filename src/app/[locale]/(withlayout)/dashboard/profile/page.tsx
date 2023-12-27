import React from 'react';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import Input from '@/components/input';
import Upload from '@/components/upload';
import InputArea from '@/components/textarea';

type Props = {};

const AccountInfo = (props: Props) => {
  return (
    <div className="grow mb-20">
      <h2 className="font-aria_bold text-3xl mb-8">پروفایل</h2>
      <div className="font-aria_sbold">
        <h2 className="text-xl mb-4">اطلاعات کاربری</h2>
        <div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-6  ">
            <div className="col-span-2 md:col-span-1">
              <Input label="نام * " placeholder="نام" />
            </div>
            <div className="col-span-2 md:col-span-1">
              <Input label="نام خانوادگی *" placeholder="نام خانوادگی" />
            </div>
            <div className="col-span-2 md:col-span-1">
              <Input label="شماره موبایل *" placeholder="شماره موبایل" />
            </div>
            <div className="col-span-2 md:col-span-1">
              <Input label="ایمیل *" placeholder="ایمیل" />
            </div>
            <div className="col-span-2 md:col-span-1">
              <InputArea
                rows={10}
                label="درباره من *"
                placeholder="درباره من"
                className=""
              />
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col">
              <Input label="تخصص *" placeholder="تخصص" className="mb-6" />
              <div className="grow relative flex flex-col">
                <Upload
                  placeholderComponent={
                    <div className="py-5 flex flex-col items-center justify-center ">
                      <MdOutlineAddPhotoAlternate
                        size={80}
                        className="fill-neutral-400"
                      />
                      <div className="text-neutral-400">افزودن عکس پروفایل</div>
                    </div>
                  }
                  label="عکس پروفایل"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className="btn !rounded-lg  ">ذخیره تغییرات</button>
          </div>
          <div className="divider" />
          <h2 className="text-xl mb-4">رمز عبور</h2>
          <div className="grid grid-cols-2 gap-x-3 gap-y-6  ">
            <div className="col-span-2 md:col-span-1">
              <Input label="رمز عبور جدید *" placeholder="رمز عبور جدید" />
            </div>
            <div className="col-span-2 md:col-span-1">
              <Input
                label="تکرار رمز عبور جدید * "
                placeholder="تکرار رمز عبور جدید"
              />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className="btn !rounded-lg  ">ذخیره تغییرات</button>
          </div>
          <div className="divider" />
          <h2 className="text-xl mb-4">شبکه های اجتماعی</h2>
          <div className="grid grid-cols-2 gap-x-3 gap-y-6  ">
            <div className="col-span-2 md:col-span-1">
              <Input label="آیدی تلگرام" placeholder="آیدی تلگرام" />
            </div>
            <div className="col-span-2 md:col-span-1">
              <Input
                label="لینک اینسستاگرام | آیدی"
                placeholder="لینک اینسستاگرام | آیدی"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <Input label="آدرس لینکدین" placeholder="آدرس لینکدین" />
            </div>
            <div className="col-span-2 md:col-span-1">
              <Input label="ایکس " placeholder="ایکس" />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className="btn !rounded-lg  ">ذخیره تغییرات</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
