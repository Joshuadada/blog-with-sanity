"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import WiseThingLogo from "../../public/images/wise-thing-logo.svg"
import FooterImg from "../../public/images/footer-img.svg"
import Link from 'next/link'
import { getAllTags } from '@/sanity/sanity-utils'
import { Tag } from '@/app/types/tag.type'
import { usePathname, useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export default function Footer() {
  const router = useRouter();
  const date = new Date();
  const [tags, setTags] = useState<Tag[]>([]);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    async function fetchTags() {
      const tagsList: Tag[] = await getAllTags();
      setTags(tagsList);
    }
    fetchTags();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      let searchRoute = "/all-insights";

      if (pathname.includes("economic-insights")) {
        searchRoute = "/economic-insights";
      } else if (pathname.includes("consumer-insights")) {
        searchRoute = "/consumer-insights";
      }

      router.push(`${searchRoute}?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const onTagClick = (tagName: string) => {
    tagName = tagName.toLowerCase()

    if (tagName == "economic insights") {
      router.push('/economic-insights')
    } else if (tagName == "consumer insights") {
      router.push('/consumer-insights')
    } else {
      router.push(`all-insights?category=${encodeURIComponent(tagName)}`);
    }
  };

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email!");
      return;
    }

    setMessage("Submitting...");

    try {
      const response = await fetch(
        "/api/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        toast.success("Email submitted successfully!")
        setEmail("");
      } else {
        toast.error(data.message || "Something went wrong.")
      }
    } catch (error) {
      console.error(error)
      toast.error("Network error. Please try again.");
    } finally {
      setMessage('')
    }
  };

  return (
    <div>
      {
        tags.length > 0 && (
          <div className='max-w-[1600px] mx-auto pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-28 pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14 2xl:pt-16 px-8 sm:px-12 md:px-16 lg:px-24 xl:px-36 2xl:px-48'>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="SEARCH"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-b border-black outline-0 w-full py-2 sm:py-3 md:py-4 lg:py-5 text-[0.6rem] sm:text-xs md:text-sm lg:text-base"
              />
            </form>            <div className='max-w-[615px] flex flex-col justify-center items-center mx-auto pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14 2xl:pt-16'>
              <h5 className='font-grotesk font-light text-[0.4rem] sm:text-[0.5rem] md:text-[0.6rem] lg:text-xs uppercase'>ALL TAGS</h5>
              <div className='text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-0.5 sm:mt-1 md:mt-1.5'>
                {tags.map((tag: Tag, index: number) => (
                  <span onClick={() => onTagClick(tag.tagName)} key={tag._id}>
                    <span className='cursor-pointer'>{tag.tagName}</span>{index < tags.length - 1 && " / "}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )
      }

      <div className='bg-[#A594FD]'>
        <div className='max-w-[1600px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-16 lg:py-20 xl:py-24 2xl:py-28'>
          <div className='flex flex-col justify-center items-center mx-auto max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[736px]'>
            <Image quality={100} src={WiseThingLogo} className='w-52 max-w-[180px] sm:w-60 md:w-64 lg:w-72' alt=''></Image>
            <h3 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-7 font-medium'>Turn consumer intelligence into growth</h3>
            <p className='text-center text-xl lg:text-2xl mt-6'>Build, automate, and manage consumer panels with powerful features designed to test and predict real-world consumer behavior.</p>

            <Link href={"https://www.wisethings.co/"}>
              <button className='bg-[#1A1A32] mt-12 flex items-center px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-4 gap-2 sm:gap-3 md:gap-4 rounded-sm md:rounded-md cursor-pointer'>
                <div className='h-4 w-4 lg:h-5 lg:w-5 bg-[#A594FD] rounded-full'></div>
                <span className='text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium'>Get Started</span>
              </button>
            </Link>
          </div>

          <Image quality={100} src={FooterImg} width={600} height={400} className='w-xl sm:w-2xl md:w-3xl lg:w-4xl xl:w-5xl max-w-full mx-auto mt-24 hidden md:block' alt='footer image'></Image>
          <Image quality={100} src={'https://drive.google.com/uc?export=view&id=1GCguWWadXs5tiO7KViD_52qB0cxrWc7l'} width={600}
            height={400} className='w-xl sm:w-2xl md:w-3xl lg:w-4xl xl:w-5xl max-w-full mx-auto mt-24 block md:hidden' alt='footer image'></Image>
        </div>
      </div>

      <div className='max-w-[1600px] mx-auto py-6 sm:py-7 md:py-8 lg:py-9 xl:py-10 px-4 sm:px-8 md:px-10 lg:px-12'>
        <div className='max-w-sm sm:max-w-md md:max-w-lg flex flex-col items-center mx-auto'>
          <h5 className='text-sm sm:text-base md:text-lg lg:text-xl'>Sign up to the Wise Things newsletter</h5>

          <div className="flex flex-col items-center w-full mt-9 sm:mt-10 md:mt-11 lg:mt-12 xl:mt-14">
            <div className="flex items-center w-full border-b border-black pb-1">
              <input
                type="email"
                className="flex-1 font-light text-xs outline-0 placeholder:text-black"
                placeholder="YOUR EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className={`font-light text-xs text-black ${!isChecked || !email ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                  }`}
                onClick={handleSubmit}
                disabled={!isChecked}
              >
                SUBMIT
              </button>
            </div>
            {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}
          </div>

          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 mt-2 sm:mt-3 md:mt-4">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="w-4 h-4 cursor-pointer"
            />
            <span className="text-[0.5rem] sm:text-[0.6rem] md:text-xs">
              I’ve read and accept the{" "}
              <Link href="https://www.wisethings.co/terms-of-use" className="hover:underline">
                terms & conditions
              </Link>
            </span>
          </div>
        </div>
      </div>

      <div className='px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12'>
        <div className='h-0.5 md:h-1 bg-black'></div>
      </div>

      <div className='px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex md:items-center max-w-5xl md:mx-[unset] flex-col md:flex-row gap-1 text-xs sm:text-sm md:text-base pt-5 pb-11 sm:pb-12 md:pb-13 lg:pb-14 xl:pb-15'>
        <div className='flex sm:items-center flex-1 flex-col sm:flex-row gap-4'>
          <div className='order-2 sm:order-1 flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5'>
            <p>&copy; Wise Things {date.getFullYear()}</p>
            <ul className='flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5'>
              <li className='hover:underline'><Link href={'https://www.wisethings.co/terms-of-use'}>Terms</Link></li>
              <li className='hover:underline'><Link href={'https://www.wisethings.co/contact'}>Get Demo</Link></li>
            </ul>
          </div>

          <div className='order-1 sm:order-2 flex justify-between'>
            <ul className='flex flex-col sm:flex-row sm:items-center gap-5'>
              <li className='hover:underline'><Link href={'https://www.linkedin.com/company/wise-things/'}>LinkedIn</Link></li>
              <li className='hover:underline'><Link href={'https://x.com/meetwisethings?s=21'}>Twitter</Link></li>
              <li className='hover:underline'><Link href={'https://www.instagram.com/wearewisethings/'}>Instagram</Link></li>
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
