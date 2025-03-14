"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import SlantArr from "../../public/images/icons/slant-arr.svg"
import SearchIcon from "../../public/images/icons/search.svg"
import HambuggerIcon from "../../public/images/icons/hamburger.svg"
import CloseIcon from "../../public/images/icons/close.svg"
import { usePathname } from 'next/navigation'

const navLinks: { name: string, href: string }[] = [
  { name: 'All Insights', href: '/all-insights' },
  { name: 'Consumer Insights', href: '/consumer-insights' },
  { name: 'Economic Insights', href: '/economic-insights' },
  { name: 'About', href: '/about' }
]

export const Header = () => {
  const pathname = usePathname()
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu((value: boolean) => {
      return !value
    })
  }

  return (
    <div className='px-6 sm:px-7 md:px-8 lg:px-9 xl:px-10 py-1 sm:py-2 md:py-3 lg:py-4 xl:py-5 flex items-center gap-2 justify-between'>
      <div className='flex items-centern gap-3 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-11'>
        <h2 className='text-[#1A1A32] dark:text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-glyphic cursor-pointer'><Link href={"/"}>PEDESTAL</Link></h2>
        <ul className='hidden xl:flex items-center gap-1 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-8'>
          {
            navLinks.map((navLink) => {
              const isActive = pathname.includes(navLink.href) ? true : false;

              return (
                <Link href={navLink.href} key={navLink.name}>
                  <li className={`text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-grotesk font-medium ${isActive ? 'underline' : ''}`}>{navLink.name}</li>
                </Link>
              )
            })}
          <li className='text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-grotesk font-medium'><Link href={"/login-to-plural"} className='flex items-center gap-0.5 sm:gap-1 2xl:gap-1.5'><span>Log In to Plural</span> <Image src={SlantArr} alt='slant arrow' className='w-5 dark:invert'></Image></Link></li>
          <li>
            <Link href={'/login-to-plural'}><button className='bg-black dark:bg-white font-grotesk text-white dark:text-black font-medium px-2 sm:px-3 md:px-3 2xl:px-5 py-0.5 md:py-1 lg:py-1.5 text-[0.6rem] sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl rounded-2xl sm:rounded-3xl md:rounded-4xl lg:rounded-[60px] xl:rounded-[80px] 2xl:rounded-[100px] cursor-pointer'>Get Started</button></Link>
          </li>
        </ul>
      </div>

      <div className='flex items-center gap-5 sm:gap-7 md:gap-9 lg:gap-11 xl:gap-12'>
        <Image src={SearchIcon} alt='search icon' className='w-5 md:w-6 dark:invert'></Image>
        <Image src={HambuggerIcon} alt='hambugger icon' className='block xl:hidden w-5 md:w-6 dark:invert' onClick={handleMenu}></Image>
        <Link href={'/login'} className='hidden xl:block text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-grotesk font-medium cursor-pointer'>Log In</Link>
      </div>

      <div className={`fixed z-50 bg-white dark:bg-black top-0 bottom-0 w-full sm:max-w-[390px] h-screen shadow-md px-4 py-6 transform ${showMenu ? 'right-0' : '-right-[600px]'}`}>
        <div className='flex justify-end'>
          <Image src={CloseIcon} alt='close icon' className='w-5 md:w-6 cursor-pointer dark:invert' onClick={handleMenu}></Image>
        </div>
        <ul className='flex flex-col gap-8 mt-12'>
          {
            navLinks.map((navLink) => {
              const isActive = pathname.includes(navLink.href) ? true : false;

              return (
                <Link href={navLink.href} key={navLink.name}>
                  <li className={`text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-grotesk font-medium ${isActive ? 'underline' : ''}`}>{navLink.name}</li>
                </Link>
              )
            })}
          <li className='text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-grotesk font-medium'>
            <Link href={"/login-to-plural"} className='flex items-center gap-0.5 sm:gap-1 2xl:gap-1.5'>
              <span>Log In to Plural</span>
              <Image src={SlantArr} alt='slant arrow' className='dark:invert w-5'></Image>
            </Link>
          </li>
          <li>
            <Link href={'/login-to-plural'}><button className='bg-black dark:bg-white font-grotesk text-white dark:text-black font-medium px-3 2xl:px-5 py-1.5 text-[0.6rem] sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl rounded-2xl sm:rounded-3xl md:rounded-4xl lg:rounded-[60px] xl:rounded-[80px] 2xl:rounded-[100px] cursor-pointer'>Get Started</button></Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
