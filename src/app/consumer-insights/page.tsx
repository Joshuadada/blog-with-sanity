import React from 'react'
import MainLayout from '../main/layout'
import { Card } from '@/components/Card'
import { getCustomerBlogs } from '@/sanity/sanity-utils'

export default async function ConsumerInsights() {
    const blogs: any[] = await getCustomerBlogs()

    return (
        <MainLayout>
            <div>
                {
                    blogs.length > 0 && (
                        <div className='max-w-[1600px] mx-auto py-6 sm:py-7 md:py-8 lg:py-10 xl:py-12 2xl:py-14 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 2xl:px-32'>
                            <h4 className='font-grotesk text-center text-xs sm:text-sm md:text-base lg:text-lg uppercase'>CONSUMER INSIGHTS</h4>

                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 lg:gap-x-4 gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-y-12 mt-6 sm:mt-7 md:mt-8 lg:mt-9 xl:mt-10 2xl:mt-12'>
                                {
                                    blogs.map((card) => (
                                        <Card key={card._id} slug={card.slug} img={card.image} imageAlt={card.title} title={card.title} description={card.description} category={card.category.tagName}></Card>
                                    ))
                                }

                            </div>
                        </div>
                    )
                }
            </div>
        </MainLayout>
    )
}
