import React from 'react'
import MainLayout from '../main/layout'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { getAllBlogs, getFeatureBlogs, getHeadlineBlogs } from '@/sanity/sanity-utils'
import Link from 'next/link'
import LockIcon from '../../../public/images/icons/lock.svg'
import { BlogPost, BlogResponse } from '../types/blog.type'

export default async function Main() {
  const headlineBlogs: BlogPost[] = await getHeadlineBlogs()
  const featureBlogs: BlogPost[] = await getFeatureBlogs()
  const blogResponse: BlogResponse = await getAllBlogs(1, 8)
  const recentBlogs = blogResponse.blogs

  return (
    <MainLayout>
      <div>
        {
          headlineBlogs.length > 0 &&
          <div className='max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-start py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 2xl:px-32'>
            <div className='order-2 md:order-1 flex flex-col gap-8 sm:gap-10 md:gap-16 lg:gap-24 xl:gap-36 2xl:gap-40'>
              <div className='flex flex-col gap-1'>
                <p className='font-grotesk font-light text-[0.6rem] lg:text-xs uppercase'>{headlineBlogs[0].category.tagName}</p>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-glyphic'>{headlineBlogs[0].title}</h3>
              </div>
              <p className='font-grotesk text-xs md:text-sm lg:text-base'>{headlineBlogs[0].description.length > 200 ? headlineBlogs[0].description.slice(0, 200) + "..." : headlineBlogs[0].description}</p>
            </div>

            <div className='order-1 md:order-2 relative'>
              <Image src={headlineBlogs[0].image || ''} alt={headlineBlogs[0].title} height={100} width={100} className='w-full aspect-square object-cover rounded-[10px] md:rounded-[12px] lg:rounded-[15px]'></Image>
              <div className='h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 flex items-center justify-center rounded-full bg-[#A594FD] absolute top-1 right-1 sm:top-1.5 sm:right-1.5 md:top-2 md:right-2 lg:top-2.5 lg:right-2.5'>
                <Image src={LockIcon} alt={'lock icon'} width={100} height={100} className='w-4 sm:w-5 md:w-6 lg:w-7'></Image>
              </div>
            </div>
          </div>
        }

        <div>
          <div className='mx-8 sm:mx-12 md:mx-16 lg:mx-20 xl:mx-28 2xl:mx-32 h-[1px] bg-black dark:bg-white'></div>
        </div>

        {
          featureBlogs.length > 0 && <div className='max-w-[1600px] mx-auto'>
            <div className='flex flex-col w-full items-center mx-auto gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 max-w-[823px] py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-[107px] px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 2xl:px-32'>
              <div className='relative'>
                <Image src={featureBlogs[0].image || ''} height={100} width={100} alt={featureBlogs[0].title} className='w-[826px] max-w-full rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl aspect-[6/4] object-cover'></Image>
                <div className='h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 flex items-center justify-center rounded-full bg-[#A594FD] absolute top-1 right-1 sm:top-1.5 sm:right-1.5 md:top-2 md:right-2 lg:top-2.5 lg:right-2.5'>
                  <Image src={LockIcon} alt={'lock icon'} width={100} height={100} className='w-4 sm:w-5 md:w-6 lg:w-7'></Image>
                </div>
              </div>

              <div className='text-center flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14'>
                <p className='font-grotesk font-light text-[0.4rem] sm:text-[0.5rem] md:text-[0.6rem] lg:text-xs uppercase'>{featureBlogs[0].category.tagName}</p>

                <h3 className='text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-glyphic'>{featureBlogs[0].title}</h3>

                <p className='font-grotesk text-xs md:text-sm lg:text-base'>{featureBlogs[0].description.length > 200 ? featureBlogs[0].description.slice(0, 200) + "..." : featureBlogs[0].description}</p>
              </div>
            </div>
          </div>
        }

        <div>
          <div className='mx-8 sm:mx-12 md:mx-16 lg:mx-20 xl:mx-28 2xl:mx-32 h-[1px] bg-black dark:bg-white'></div>
        </div>

        {
          recentBlogs.length > 0 && (
            <div className='max-w-[1600px] mx-auto'>
              <div className='py-6 sm:py-7 md:py-8 lg:py-10 xl:py-12 2xl:py-14 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 2xl:px-32'>
                <h4 className='font-grotesk text-center text-xs sm:text-sm md:text-base lg:text-lg uppercase'>RECENT DATA AND INSIGHTS</h4>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 lg:gap-x-4 gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-y-12 mt-6 sm:mt-7 md:mt-8 lg:mt-9 xl:mt-10 2xl:mt-12'>
                  {
                    recentBlogs.map((card) => (
                      <Card key={card._id} slug={card.slug} img={card.image || ''} imageAlt={card.title} title={card.title} description={card.description} category={card.category.tagName}></Card>
                    ))
                  }

                </div>

                <Link href={'/all-insights'}><button className='mx-auto block font-medium text-base sm:text-lg md:text-xl lg:text-2xl border-2 border-black px-5 sm:px-6 md:px-7 lg:px-8 py-1 md:py-2 lg:py-3 rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl mt-6 sm:mt-7 md:mt-8 lg:mt-9 xl:mt-10 2xl:mt-12 cursor-pointer'>View All Insights</button></Link>
              </div>
            </div>
          )
        }
      </div>
    </MainLayout>
  )
}
