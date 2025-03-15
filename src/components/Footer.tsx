import React from 'react'
import Image from 'next/image'
import WiseThingLogo from "../../public/images/wise-thing-logo.svg"
import FooterImg from "../../public/images/footer-img.svg"
import Link from 'next/link'
import { Checkbox } from './ui/checkbox'
import { getAllTags } from '@/sanity/sanity-utils'
import { Tag } from '@/app/types/tag.type'

export const Footer = async () => {
  const date = new Date();
  const tags: Tag[] = await getAllTags();

  return (
    <div>
      {
        tags.length > 0 && (
          <div className='max-w-[1600px] mx-auto pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-28 pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14 2xl:pt-16 px-8 sm:px-12 md:px-16 lg:px-24 xl:px-36 2xl:px-48'>
            <input type="text" placeholder='SEARCH' className='border-b border-black dark:border-white outline-0 w-full py-2 sm:py-3 md:py-4 lg:py-5 text-[0.6rem] sm:text-xs md:text-sm lg:text-base' />
            <div className='max-w-[615px] flex flex-col justify-center items-center mx-auto pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14 2xl:pt-16'>
              <h5 className='font-grotesk font-light text-[0.4rem] sm:text-[0.5rem] md:text-[0.6rem] lg:text-xs uppercase'>ALL TAGS</h5>
              <div className='text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-0.5 sm:mt-1 md:mt-1.5'>
                {
                  tags.map((tag: Tag) => tag.tagName).join(' / ')
                }
              </div>
            </div>
          </div>
        )
      }

      <div className='bg-[#A594FD]'>
        <div className='max-w-[1600px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 pt-6'>
          <div className='flex flex-col justify-center items-center mx-auto max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[736px]'>
            <Image src={WiseThingLogo} className='w-52 sm:w-60 md:w-64 lg:w-72' alt=''></Image>
            <h3 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 sm:mt-5 md:mt-6 lg:mt-7'>Turn consumer intelligence into growth</h3>
            <p className='text-center text-base sm:text-lg md:text-xl lg:text-2xl mt-3 sm:mt-4 md:mt-5 lg:mt-6'>Build, automate, and manage consumer panels with powerful features designed to test and predict real-world consumer behavior.</p>
            <button className='bg-[#1A1A32] mt-9 sm:mt-10 md:mt-11 lg:mt-12 flex items-center px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-4 gap-2 sm:gap-3 md:gap-4 rounded-sm md:rounded-md cursor-pointer'>
              <div className='h-2 sm:h-3 w-2 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 bg-[#A594FD] rounded-full'></div>
              <span className='text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium'>Get Started</span>
            </button>

          </div>

          <Image src={FooterImg} className='w-xl sm:w-2xl md:w-3xl lg:w-4xl xl:w-5xl max-w-full mx-auto mt-12 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-24' alt=''></Image>
        </div>
      </div>

      <div className='max-w-[1600px] mx-auto py-6 sm:py-7 md:py-8 lg:py-9 xl:py-10 px-4 sm:px-8 md:px-10 lg:px-12'>
        <div className='max-w-sm sm:max-w-md md:max-w-lg flex flex-col items-center mx-auto'>
          <h5 className='text-sm sm:text-base md:text-lg lg:text-xl'>Sign up to the Wise Things newsletter</h5>

          <div className='flex items-center w-full border-b border-black dark:border-white mt-9 sm:mt-10 md:mt-11 lg:mt-12 xl:mt-14 pb-0 sm:pb-0.5 md:pb-1'>
            <input type="email" className='flex-1 font-light text-[0.5rem] sm:text-[0.6rem] md:text-xs outline-0 placeholder:text-black dark:placeholder:text-white' placeholder='YOUR EMAIL' />
            <span className='font-light text-[0.5rem] sm:text-[0.6rem] md:text-xs text-black cursor-pointer'>SUBMIT</span>
          </div>

          <div className='flex items-center gap-1 sm:gap-2 md:gap-3 mt-2 sm:mt-3 md:mt-4'>
            <Checkbox />
            <span className='text-[0.5rem] sm:text-[0.6rem] md:text-xs'>I’ve read and accept the terms & conditions</span>
          </div>
        </div>
      </div>

      <div className='px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12'>
        <div className='h-0.5 md:h-1 bg-black dark:bg-white'></div>
      </div>

      <div className='px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex md:items-center max-w-5xl md:mx-[unset] flex-col md:flex-row gap-1 text-xs sm:text-sm md:text-base pt-5 pb-11 sm:pb-12 md:pb-13 lg:pb-14 xl:pb-15'>
        <div className='flex sm:items-center flex-1 flex-col sm:flex-row gap-4'>
          <div className='order-2 sm:order-1 flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5'>
            <p>&copy; Wise Things {date.getFullYear()}</p>
            <ul className='flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5'>
              <li className='hover:underline'><Link href={''}>Terms</Link></li>
              <li className='hover:underline'><Link href={''}>Get Demo</Link></li>
            </ul>
          </div>

          <div className='order-1 sm:order-2 flex justify-between'>
            <ul className='flex flex-col sm:flex-row sm:items-center gap-5'>
              <li className='hover:underline'><Link href={''}>LinkedIn</Link></li>
              <li className='hover:underline'><Link href={''}>Twitter</Link></li>
              <li className='hover:underline'><Link href={''}>Instagram</Link></li>
            </ul>

            <p className='underline block sm:hidden'>
              <Link href={'https://www.wisethings.co'}>Back to Wisethings.co</Link>
            </p>
          </div>
        </div>

        <p className='underline hidden sm:block'>
          <Link href={'https://www.wisethings.co'}>Back to Wisethings.co</Link>
        </p>
      </div>
    </div>
  )
}
