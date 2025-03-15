import React from 'react'
import Image from 'next/image'
import LockIcon from '../../public/images/icons/lock.svg'
import Link from 'next/link'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface Card {
    img: string | StaticImport,
    imageAlt: string,
    category: string,
    title: string,
    description: string,
    slug: string
}

export function Card({ img, imageAlt, category, title, description, slug }: Card) {
    return (
        <Link href={`/blog/${slug}`}>
            <div className='cursor-pointer'>
                <div className='aspect-[6/5] relative'>
                    <Image src={img} alt={imageAlt} width={100} height={100} className='w-full h-full object-cover rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl aspect-video'></Image>
                    <div className='h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 flex items-center justify-center rounded-full bg-[#A594FD] absolute top-1 right-1 sm:top-1.5 sm:right-1.5 md:top-2 md:right-2 lg:top-2.5 lg:right-2.5'>
                        <Image src={LockIcon} alt={'lock icon'} width={100} height={100} className='w-4 sm:w-5 md:w-6 lg:w-7'></Image>
                    </div>
                </div>
                <p className='font-grotesk font-light text-[0.4rem] sm:text-[0.5rem] md:text-[0.6rem] lg:text-xs uppercase mt-1 md:mt-2 lg:mt-3'>{category}</p>
                <h4 className='text-sm sm:text-base md:text-lg lg:text-xl font-glyphic mt-2 md:mt-3 lg:mt-4'>{title}</h4>
                <p className='font-grotesk font-light text-[0.6rem] sm:text-xs md:text-sm lg:text-base mt-1 md:mt-2 lg:mt-3'>{description.length > 80 ? description.slice(0, 80) + "..." : description}</p>
            </div>
        </Link>
    )
}