'use client';

import Image from 'next/image';

// framer-motion
import { AnimatePresence, motion } from 'framer-motion';

// icons
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { LuMailOpen } from 'react-icons/lu';
import { IoCloseCircle } from 'react-icons/io5';

// masonry
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useEffect, useState } from 'react';
import { userProfile } from '@/types/user';
import Axios from '@/services/configAxios';
import URLS from '@/services/urls';
import { postInPublic } from '@/types/post';
import Link from 'next/link';

const UserProfilePage = ({ data }: { data: userProfile }) => {
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState<null | postInPublic>();
  const [posts, setPosts] = useState<null | postInPublic[]>();

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

  useEffect(() => {
    Axios.get(URLS.userPosts(data.username)).then(
      (res: { data: { results: postInPublic[] } }) => {
        setPosts(res.data.results);
      }
    );
  }, []);

  return (
    <>
      <div className={`custom_container relative pt-10`}>
        <div className="flex justify-center">
          <Image
            src={data.avatar_image_url}
            width={200}
            height={100}
            alt="profile"
            className="rounded-full object-cover max-w-[200px] max-h-[200px]"
          />
        </div>
        <h2 className="font-aria_sbold text-center mt-4 text-3xl">
          {data.full_name}
        </h2>
        <p className="font-aria_sbold text-center mt-2 text-base max-w-md mx-auto">
          {data.biography}
        </p>
        <div className="flex justify-center gap-10 items-center mt-10">
          <Link href={data.instagram_url ?? ''} target="_blank">
            <FaInstagram size="25px" className="cursor-pointer" />
          </Link>
          <Link href={data.linkedin_url ?? ''} target="_blank">
            <FaLinkedin size="25px" className="cursor-pointer" />
          </Link>
          <Link href={`mailto:${data.email ?? ''}`} target="_blank">
            <LuMailOpen size="25px" className="cursor-pointer" />
          </Link>
        </div>
        <div className="mt-8 pb-10">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
          >
            <Masonry gutter="10px">
              {posts &&
                posts?.length > 0 &&
                posts.map((post) => {
                  return (
                    <motion.div layoutId={post.content_url} key={post.title}>
                      <Image
                        src={post.content_url}
                        alt="svg"
                        onClick={() => {
                          setImage(post);
                          setShowModal(true);
                        }}
                        width={1000}
                        height={100}
                        className="cursor-pointer object-cover"
                      />
                    </motion.div>
                  );
                })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
      {showModal && image && (
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
              <motion.div
                layoutId={image?.content_url}
                className="relative h-full w-full"
              >
                <Image
                  src={image?.content_url}
                  className="object-cover"
                  fill
                  alt="modal"
                />
              </motion.div>
            </AnimatePresence>
            <h3 className="font-aria_xbold text-3xl text-center mt-5 mb-3">
              {image.title}
            </h3>
            <p className="font-aria_sbold text-xl text-justify">
              {image.caption}
            </p>
            <div className="flex items-center flex-wrap gap-3 mt-4">
              {image.prepared_tags.length > 0 &&
                image.prepared_tags.map((tag) => {
                  return (
                    <button
                      key={tag}
                      className="bg-primary mb-4 flex items-center gap-1 font-aria_sbold text-light py-3 px-4 text-base  rounded-xl"
                    >
                      {tag}
                    </button>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfilePage;
