import Image from 'next/image'
import { Card } from '@/components/Card'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import { getAllBlogs, getAllTags, getBlog } from '@/sanity/sanity-utils'
import DownloadIcon from '../../../../public/images/icons/download.svg'
import Link from 'next/link'
import { BlogPost } from '@/app/types/blog.type'
import { Tag } from '@/app/types/tag.type'

type Props = {
    params: { blogSlug: string }
}

export default async function Blog({ params }: Props) {
    const parameters = await params
    const slug = parameters.blogSlug
    const recentBlogs: BlogPost[] = await getAllBlogs(1, 4)
    const blog = await getBlog(slug)
    const tags: Tag[] = await getAllTags();

    return (
        <div>
            <div className='max-w-[1600px] mx-auto'>
                <div className='flex flex-col items-center mx-auto gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 max-w-[823px] py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-24 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 2xl:px-32'>
                    {
                        blog?.titleImageUrl && (
                            <div>
                                <Image src={blog.titleImageUrl} alt='Hero Image' width={100} height={100} className='w-[823px] max-w-full rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl'></Image>
                            </div>
                        )
                    }

                    <div className='text-center flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14'>
                        {
                            blog?.category?.tagName && (
                                <p className='font-grotesk font-light text-[0.4rem] sm:text-[0.5rem] md:text-[0.6rem] lg:text-xs uppercase'>{blog.category.tagName}</p>
                            )
                        }

                        {
                            blog?.title && (
                                <h3 className='text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-glyphic'>{blog.title}</h3>
                            )
                        }

                        {
                            blog?.description && (
                                <p className='font-grotesk text-[0.6rem] sm:text-xs md:text-sm lg:text-base'>{blog.description}</p>
                            )
                        }

                        {
                            blog.pdfUrl && (
                                <Link href={blog.pdfUrl} className='cursor-pointer'>
                                    <button className='flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2.5 bg-[#E5E5EA] py-0.5 sm:py-1 md:py-1.5 px-2 sm:px-3 md:px-4 rounded-3xl sm:rounded-[40px] md:rounded-[70px] lg:rounded-[100px] cursor-pointer'>
                                        <span className='text-sm sm:text-base md:text-lg lg:text-xl font-medium'>Download as PDF</span>
                                        <Image src={DownloadIcon} alt='download icon' width={100} height={100} className='w-4 sm:w-5 md:w-6'></Image>
                                    </button>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>

            <div>
                <div className='mx-8 sm:mx-12 md:mx-16 lg:mx-20 xl:mx-28 2xl:mx-32 h-[1px] bg-black'></div>
            </div>

            {/* Section one */}
            {
                (blog?.sectionOneImgUrl || blog?.sectionOneText?.[0]) && (
                    <div className='max-w-[1600px] mx-auto'>
                        <div className='grid grid-cols-12 gap-6 sm:gap-8 md:gap-9 lg:gap-10 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16 px-8 sm:px-12 md:px-20 lg:px-28 xl:px-40 2xl:px-52'>
                            {
                                blog?.sectionOneImgUrl && (
                                    <div className='col-span-12 lg:col-span-4'>
                                        <Image src={blog.sectionOneImgUrl} alt='Section one image' height={100} width={100} className='w-full aspect-[2/3] object-cover max-w-[473px] mx-auto'></Image>
                                    </div>
                                )
                            }

                            {
                                blog?.sectionOneText?.[0] && (
                                    <p className='col-span-12 lg:col-span-8 text-xs sm:text-sm md:text-base lg:text-lg'>{blog.sectionOneText[0]}</p>
                                )
                            }
                        </div>
                    </div>
                )
            }

            {
                (blog?.sectionTwoImgOneUrl || blog?.sectionTwoImgTwoUrl) && (
                    <div className='max-w-[1600px] mx-auto'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-9 lg:gap-10 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16 px-8 sm:px-16 md:px-28 lg:px-40 xl:px-52 2xl:px-64'>
                            {
                                blog?.sectionTwoImgOneUrl && <Image src={blog.sectionTwoImgOneUrl} width={100} height={100} alt='section Two Img One' className='w-full aspect-square object-cover mx-auto'></Image>
                            }

                            {
                                blog?.sectionTwoImgTwoUrl && <Image src={blog.sectionTwoImgTwoUrl} width={100} height={100} alt='section Two Img Two' className='w-full aspect-square object-cover mx-auto'></Image>
                            }
                        </div>
                    </div>
                )
            }

            {
                (blog?.sectionThreeText?.[0] || blog?.sectionThreeDescription) && (
                    <div className='max-w-[1600px] mx-auto'>
                        <div className='py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16 px-8 sm:px-12 md:px-20 lg:px-28 xl:px-40 2xl:px-52'>
                            {
                                blog?.sectionThreeText?.[0] && (
                                    <p className='text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl'>{blog.sectionThreeText[0]}</p>
                                )
                            }

                            {
                                blog?.sectionThreeDescription && (
                                    <p className='text-center mt-6 sm:mt-7 md:mt-8 lg:mt-10 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl uppercase'>{blog.sectionThreeDescription}</p>
                                )
                            }


                        </div>
                    </div>
                )
            }

            {
                blog?.sectionFourImgUrl && (
                    <div className='max-w-[1600px] mx-auto'>
                        <div className='py-1 sm:py-2 md:py-3 lg:py-4 xl:py-5 2xl:py-6 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 2xl:px-32'>
                            <Image src={blog.sectionFourImgUrl} alt='Section Four Img' width={100} height={100} className='w-full aspect-[3/2] object-cover mx-auto max-w-[853px]'></Image>
                        </div>
                    </div>
                )
            }

            {
                blog?.sectionFiveImgUrl && (
                    <div className='max-w-[1600px] mx-auto'>
                        <div className='py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 2xl:px-32 w-full '>
                            <Image src={blog.sectionFiveImgUrl} alt='Section Five Img' width={100} height={100} className='w-full aspect-[2/1] object-cover mx-auto'></Image>
                        </div>
                    </div>
                )
            }

            {
                (blog?.sectionSixImgUrl || blog?.sectionSixText?.[0]) && (
                    <div className='max-w-[1600px] mx-auto'>
                        <div className='flex items-start flex-col xl:flex-row gap-6 sm:gap-8 md:gap-9 lg:gap-10 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16 px-8 sm:px-12 md:px-20 lg:px-28 xl:px-40 2xl:px-52'>
                            {
                                blog?.sectionSixImgUrl && (
                                    <Image src={blog.sectionSixImgUrl} alt='Section Six Img' width={100} height={100} className='w-full aspect-[7/6] object-cover mx-auto lg:max-w-[473px]'></Image>
                                )
                            }

                            {
                                blog?.sectionSixText?.[0] && (
                                    <p className='text-xs sm:text-sm md:text-base lg:text-lg flex-1'>{blog.sectionSixText[0]}</p>
                                )
                            }
                        </div>
                    </div>
                )
            }


            {
                blog?.sectionSevenCarousel?.length > 0 && (
                    <div className='max-w-[1600px] mx-auto'>
                        <Carousel className="w-full max-w-3/4 mx-auto">
                            <CarouselContent>
                                {blog.sectionSevenCarousel.map((image: {imageUrl: string}, index: string) => (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <Image src={image.imageUrl} alt='Image' width={100} height={100} className='max-w-[280px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[540px] xl:max-w-[590px] w-full aspect-square object-cover mx-auto'></Image>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                )
            }

            {
                blog?.sectionEightText?.[0] && (
                    <div className='max-w-[1600px] mx-auto'>
                        <div className='py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16 px-8 sm:px-12 md:px-20 lg:px-28 xl:px-40 2xl:px-52'>
                            <p className='text-xs sm:text-sm md:text-base lg:text-lg'>{blog.sectionEightText[0]}</p>
                        </div>
                    </div>
                )
            }

            {
                tags.length > 0 && (
                    <div className='max-w-[1600px] mx-auto'>
                        <div className='py-6 sm:py-7 md:py-8 lg:py-10 xl:py-12 2xl:py-14 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 2xl:px-32'>
                            <h4 className='font-grotesk text-center text-[0.5rem] sm:text-[0.6rem] md:text-xs lg:text-sm uppercase'>ALL TAGS</h4>

                            <div className='flex items-center justify-center sm:justify-start flex-wrap gap-5 sm:gap-6 md:gap-7 lg:gap-8 mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8'>
                                {
                                    tags.map((tag: Tag) => (
                                        <div key={tag._id} className='bg-[#F2F2F7] py-1 sm:py-2 md:py-3 px-5 sm:px-6 md:px-7 lg:px-8 rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl'>{tag.tagName}</div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                )
            }

            {
                recentBlogs?.length > 0 && (
                    <div className='max-w-[1600px] mx-auto'>
                        <div className='py-6 sm:py-7 md:py-8 lg:py-10 xl:py-12 2xl:py-14 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 2xl:px-32'>
                            <h4 className='font-grotesk text-center text-xs sm:text-sm md:text-base lg:text-lg uppercase'>Recent DATA AND INSIGHTS</h4>

                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 lg:gap-x-4 gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-y-12 mt-6 sm:mt-7 md:mt-8 lg:mt-9 xl:mt-10 2xl:mt-12'>
                                {
                                    recentBlogs.map((card) => (
                                        <Card key={card._id} slug={card.slug} img={card.image || ''} imageAlt={card.title} title={card.title} description={card.description} category={card.category.tagName}></Card>
                                    ))
                                }

                            </div>

                            <button className='mx-auto block font-medium text-base sm:text-lg md:text-xl lg:text-2xl border-2 border-black px-5 sm:px-6 md:px-7 lg:px-8 py-1 md:py-2 lg:py-3 rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl mt-6 sm:mt-7 md:mt-8 lg:mt-9 xl:mt-10 2xl:mt-12 cursor-pointer'>View All Insights</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
