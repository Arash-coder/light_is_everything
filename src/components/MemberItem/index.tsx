import React from 'react'
import profile from '@/../public/assets/images/profile.png'
import Image from 'next/image'

type Props = {}

const MemberItem = (props: Props) => {
  return (
    <div className='w-48 h-60 flex flex-col justify-between items-center bg-white rounded-lg overflow-hidden '>
      <Image width={80} height={80} alt="profile" src={profile} className='mt-4' />
      <div className='font-aria_xbold'>مهتا پارسافر</div>
      <div className='font-aria_bold'>PHOTOGRAPHER</div>
      <div className='p-2 bg-sky-900 w-full'>
        <div>
          <div className='text-2xl text-white font-aria_xbold tracking-widest scale-y-150 ' >LIGHT</div>
          <div className='text-xs text-yellow-500  '>IS EVERYTHING</div>
        </div>
      </div>
    </div>
  )
}

export default MemberItem