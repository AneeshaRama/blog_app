"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
  } from "@/components/ui/form"
import { useRouter } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'
import Loader from '@/components/Loader'
import useUserStore from '@/store/userStore'
import { setItemToLocalStorage } from '@/lib/utils'

  const formSchema = z.object({
      email: z.string().min(2,{
          message:"Email is required"
      }).email("Please enter valid email address"),
      password: z.string().min(6,{
          message: "Password is required"
      }).max(50),
    })

const LoginPage = () => {
    const [loading, setLoading] = useState(true);
    const user = useUserStore((state) => state.user);
    const addUser = useUserStore((state) => state.addUser);
    const router = useRouter();

    useEffect(()=>{
        if(user !== null){
            router.push("/")
        }else{
            setLoading(false)
        }
    },[])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      })

      async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setLoading(true);
            await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/login`, {...values}).then((data:any)=>{
                setLoading(false)
                toast.success("Successfully logged in!")
                setItemToLocalStorage('user', data.data);
                addUser(data.data)
                form.reset();
                router.push("/");
            })
        } catch (error: any) {
            setLoading(false)
            if(error.response.data.message){
                toast.error(error.response.data.message)
            }else{
                toast.error("Something went wrong. Please try again.")
            }
        }
      }

      if(loading) return <Loader/>

  return (
    <div className='h-full flex flex-col gap-y-2 items-center justify-start w-full pt-40'>
        <h1 className='font-bold text-2xl text-main'>LOGIN</h1>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-y-3'>                    
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                            <Input className='w-80' placeholder='Email' {...field}/>
                            </FormControl>                    
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                            <Input type='password' className='w-80' placeholder='Password' {...field}/>
                            </FormControl>                    
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                 </div>
                <Button type='submit' className='w-80 bg-main hover:bg-main-hover mt-5'>Login</Button>
            </form>
        </Form>
        <p className="text-sm text-muted-foreground">Do not have an account?
            <Link href={"/register"}>
                <span className='px-1 text-main font-semibold'>Register</span>
            </Link>
            now.
        </p> 
    </div>
  )
}

export default LoginPage