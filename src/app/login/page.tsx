"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import LoginImg from "../../../public/images/login-img.svg"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import Cookies from "js-cookie";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { baseUrl } from '../../../env'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  email: z.string().email('Invalid Email'),
  password: z.string().min(2, {
    message: "password must be at least 2 characters.",
  }),
})

export default function Login() {
  const date = new Date();
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsLoading(true)
    const apiUrl = `${baseUrl}/auth/login`

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(response => {
        toast.success(response.message)
        Cookies.set("pedestalIsLoging", "true", { expires: 7 });
        router.push('/')
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error(error.message);
      }).finally(() => setIsLoading(false));

  }

  return (
    <div className='flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-y-7 md:h-screen p-6 sm:p-7 md:p-8 max-w-[1600px] mx-auto'>
      <div className='flex flex-wrap md:hidden items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 font-glyphic'>
        <Link href={'/'} className='text-2xl text-[#1A1A32]'>PEDESTAL</Link>
        
        <Link href={'https://www.wisethings.co'}>
          <Image src={'https://framerusercontent.com/images/ysVyiAjOVpxgT0M5l3eBoqAPz9o.svg?scale-down-to=512'} width={100} height={100} unoptimized={true} quality={100} alt='Logo' className='w-[172px]'></Image>
        </Link>
      </div>

      <div className='order-2 md:order-1 flex flex-col'>
        <div className='hidden md:flex items-center font-glyphic gap-2 sm:gap-3 md:gap-4 lg:gap-5'>
          <Link href={'/'} className='text-2xl text-[#1A1A32]'>PEDESTAL</Link>

          <Link href={'https://www.wisethings.co'}>
            <Image src={'https://framerusercontent.com/images/ysVyiAjOVpxgT0M5l3eBoqAPz9o.svg?scale-down-to=512'} width={100} height={100} quality={100} alt='Logo' className='w-[172px]'></Image>
          </Link>
        </div>

        <div className='flex-1 flex items-center justify-center md:mt-7'>
          <div className='md:max-w-[388px] w-full md:pr-8'>
            <h4 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold'>Welcome Back!</h4>
            <div className='mt-6 sm:mt-7 md:mt-8 lg:mt-10 xl:mt-12'>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel className='text-black text-sm lg:text-base'>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Example@email.com" className='bg-[#F7FBFF] border-[#D4D7E3] placeholder:font-medium placeholder:text-[#8897AD] p-4 text-sm lg:text-base' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel className='text-black text-sm lg:text-base'>Password</FormLabel>
                        <FormControl>
                          <Input placeholder="At least 8 characters" className='bg-[#F7FBFF] border-[#D4D7E3] placeholder:font-medium placeholder:text-[#8897AD] p-4 text-sm lg:text-base' type='password' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className='flex justify-end'>
                    <Link href='mailto:forgotpassword@wisethings.co' className='text-[#A594FD] font-semibold text-sm lg:text-base'>Forgot Password?</Link>
                  </div>

                  <Button className='w-full' type="submit">{isLoading ? 'Loading...' : 'Sign in'}</Button>
                </form>
              </Form>
            </div>

            <p className='text-center mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-32 text-[#AEAEB2] text-sm lg:text-base'>© {date.getFullYear()} WISE THINGS ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>

      <div className='order-1 md:order-2 md:h-full overflow-y-hidden relative'>
        <p className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white text-2xl md:text-3xl text-center w-full uppercase font-glyphic px-4'>Make the right decision every time</p>
        <Image src={LoginImg} quality={100} alt='Login Image' className='aspect-square md:h-full w-full object-cover rounded-xl lg:rounded-2xl xl:rounded-3xl'></Image>
      </div>
    </div>
  )
}
