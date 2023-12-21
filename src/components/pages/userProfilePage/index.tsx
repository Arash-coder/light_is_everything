'use client';

import Image from 'next/image';
import grid1 from '@/../public/assets/images/grid-1.svg';
import grid2 from '@/../public/assets/images/grid-2.svg';
import grid3 from '@/../public/assets/images/grid-3.svg';
import grid4 from '@/../public/assets/images/grid-4.svg';
import grid5 from '@/../public/assets/images/grid-5.svg';
import grid6 from '@/../public/assets/images/grid-6.svg';
import grid7 from '@/../public/assets/images/grid-7.svg';
import grid8 from '@/../public/assets/images/grid-8.svg';

// framer-motion
import { AnimatePresence, motion } from 'framer-motion';

// icons
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { LuMailOpen } from 'react-icons/lu';
import { IoCloseCircle } from 'react-icons/io5';

// masonry
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useEffect, useState } from 'react';

const UserProfilePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState('');

  useEffect(() => {
    if (showModal) {
      const body = document.body;

      if (body) {
        body.classList.add('overflow-hidden');
      }
    } else {
      const body = document.body;

      if (body) {
        body.classList.remove('overflow-hidden');
      }
    }
  }, [showModal]);

  const images = [grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8];

  return (
    <>
      <div className={`custom_container relative pt-10`}>
        <div className="flex justify-center">
          <Image
            src={'/assets/images/profile-2.png'}
            width={200}
            height={100}
            alt="profile"
            className="rounded-full object-cover max-w-[200px] max-h-[200px]"
          />
        </div>
        <h2 className="font-aria_sbold text-center mt-4 text-3xl">
          ارسلان عیوض زاده
        </h2>
        <p className="font-aria_sbold text-center mt-2 text-base max-w-md mx-auto">
          پیشتر از ۱۰ سال هست که در زمینه‌های عکاسی و گرافیک به صورت حرفه ای
          مشغول به کار هستم. در این مدت با مجموعه‌ها و سازمان‌‌های مختلف همکاری
          کردم و در کنار هنرمندان و اساتید مختلف تجربه کسب کردم. چند سال مشغول
          به طراحی پوستر بودم
        </p>
        <div className="flex justify-center gap-10 items-center mt-10">
          <FaInstagram size="25px" className="cursor-pointer" />
          <FaLinkedin size="25px" className="cursor-pointer" />
          <LuMailOpen size="25px" className="cursor-pointer" />
        </div>
        <div className="mt-8 pb-10">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
          >
            <Masonry gutter="10px">
              {images.map((image) => {
                return (
                  <motion.div layoutId={image} key={image}>
                    <Image
                      src={image}
                      alt="svg"
                      onClick={() => {
                        setImage(image);
                        setShowModal(true);
                      }}
                      className="cursor-pointer"
                    />
                  </motion.div>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
      {showModal && (
        <div className="fixed w-screen h-screen top-0 overflow-y-auto right-0 bg-[#FFFFFFF2] flex justify-center">
          <div className="custom_container mt-[calc(100vh-90vh)]">
            <button
              onClick={() => setShowModal(false)}
              className="bg-primary mb-4 flex items-center gap-1 font-aria_sbold text-light py-3 px-4 text-base  rounded-xl"
            >
              <IoCloseCircle size="20px" />
              بستن
            </button>
            <AnimatePresence>
              <motion.div layoutId={image} className="relative h-full w-full">
                <Image src={image} className="object-fill" fill alt="modal" />
              </motion.div>
            </AnimatePresence>
            <h3 className="font-aria_xbold text-3xl text-center mt-5 mb-3">
              غروب رباط کریم
            </h3>
            <p className="font-aria_sbold text-xl text-justify">
              پیشتر از ۱۰ سال هست که در زمینه‌های عکاسی و گرافیک به صورت حرفه ای
              مشغول به کار هستم. در این مدت با مجموعه‌ها و سازمان‌‌های مختلف
              همکاری کردم و در کنار هنرمندان و اساتید مختلف تجربه کسب کردم. چند
              سال مشغول به طراحی پوستر بودمپیشتر از ۱۰ سال هست که در زمینه‌های
              عکاسی و گرافیک به صورت حرفه ای مشغول به کار هستم. در این مدت با
              مجموعه‌ها و سازمان‌‌های مختلف همکاری کردم و در کنار هنرمندان و
              اساتید مختلف تجربه کسب کردم. چند سال مشغول به طراحی پوستر
              بودمپیشتر از ۱۰ سال هست که در زمینه‌های عکاسی و گرافیک به صورت
              حرفه ای مشغول به کار هستم. در این مدت با مجموعه‌ها و سازمان‌‌های
              مختلف همکاری کردم و در کنار هنرمندان و اساتید مختلف تجربه کسب
              کردم. چند سال مشغول به طراحی پوستر بودمر هستم. در این مدت با
              مجموعه‌ها و سازمان‌‌های مختلف همکاری کردم و در کنار هنرمندان و
              اساتید مختلف تجربه کسب کردم. چند سال مشغول به طراحی پوستر بودم
            </p>
            <div className="flex items-center flex-wrap gap-3 mt-4">
              <button className="bg-primary mb-4 flex items-center gap-1 font-aria_sbold text-light py-3 px-4 text-base  rounded-xl">
                فوتوشاپ
              </button>
              <button className="bg-primary mb-4 flex items-center gap-1 font-aria_sbold text-light py-3 px-4 text-base  rounded-xl">
                فوتوشاپ
              </button>
              <button className="bg-primary mb-4 flex items-center gap-1 font-aria_sbold text-light py-3 px-4 text-base  rounded-xl">
                فوتوشاپ
              </button>
              <button className="bg-primary mb-4 flex items-center gap-1 font-aria_sbold text-light py-3 px-4 text-base  rounded-xl">
                فوتوشاپ
              </button>
              <button className="bg-primary mb-4 flex items-center gap-1 font-aria_sbold text-light py-3 px-4 text-base  rounded-xl">
                فوتوشاپ
              </button>
              <button className="bg-primary mb-4 flex items-center gap-1 font-aria_sbold text-light py-3 px-4 text-base  rounded-xl">
                فوتوشاپ
              </button>
              <button className="bg-primary mb-4 flex items-center gap-1 font-aria_sbold text-light py-3 px-4 text-base  rounded-xl">
                فوتوشاپ
              </button>
              <button className="bg-primary mb-4 flex items-center gap-1 font-aria_sbold text-light py-3 px-4 text-base  rounded-xl">
                فوتوشاپ
              </button>
              <button className="bg-primary mb-4 flex items-center gap-1 font-aria_sbold text-light py-3 px-4 text-base  rounded-xl">
                فوتوشاپ
              </button>
              <button className="bg-primary mb-4 flex items-center gap-1 font-aria_sbold text-light py-3 px-4 text-base  rounded-xl">
                فوتوشاپ
              </button>
              <button className="bg-primary mb-4 flex items-center gap-1 font-aria_sbold text-light py-3 px-4 text-base  rounded-xl">
                فوتوشاپ
              </button>
              <button className="bg-primary mb-4 flex items-center gap-1 font-aria_sbold text-light py-3 px-4 text-base  rounded-xl">
                فوتوشاپ
              </button>
              <button className="bg-primary mb-4 flex items-center gap-1 font-aria_sbold text-light py-3 px-4 text-base  rounded-xl">
                فوتوشاپ
              </button>
              <button className="bg-primary mb-4 flex items-center gap-1 font-aria_sbold text-light py-3 px-4 text-base  rounded-xl">
                فوتوشاپ
              </button>
              <button className="bg-primary mb-4 flex items-center gap-1 font-aria_sbold text-light py-3 px-4 text-base  rounded-xl">
                فوتوشاپ
              </button>
              <button className="bg-primary mb-4 flex items-center gap-1 font-aria_sbold text-light py-3 px-4 text-base  rounded-xl">
                فوتوشاپ
              </button>
              <button className="bg-primary mb-4 flex items-center gap-1 font-aria_sbold text-light py-3 px-4 text-base  rounded-xl">
                فوتوشاپ
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfilePage;
