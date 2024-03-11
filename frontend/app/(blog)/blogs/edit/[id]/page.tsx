"use client"
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { UseFormReturn, useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
  } from "@/components/ui/form"
import { Button } from '@/components/ui/button'
import TipTap from '@/components/TipTap'
import Loader from '@/components/Loader'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useParams, useRouter } from 'next/navigation'
import useUserStore from '@/store/userStore'

const formSchema = z.object({
    title: z.string().min(10,{
        message:"Title is required"
    }),
    content: z.string().min(50,{
        message: "content should contain atleast 50 characters"
    }).max(2000, {
        message: "content should not exceed 2000 characters"
    }),
  })

const EditBlogPage = () => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    const user = useUserStore((state) => state.user);
    const router = useRouter()
    const {id} = useParams()

    useEffect(()=>{
        if(user !== null){
            setLoading(false)
        }else{
            router.push("/login")
        }
      },[])

    useEffect(()=>{
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${id}`);
                setBlog(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching blogs:", error);
                setLoading(false);
            }
          }
          fetchBlog()
    },[])
    let form: UseFormReturn<z.infer<typeof formSchema>, any, undefined> = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            content: '',
        },
    });

    useEffect(() => {
        if (blog) {
            form.reset({
                title: blog.title,
                content: blog.content,
            });
        }
    }, [blog, form]);

      async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
          setLoading(true)
          await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/user/${user!.userId}/blog/${id}`, {...values}).then(()=>{
            toast.success("Successfully updated the blog");
            form.reset()
            router.push("/my-blogs")
            setLoading(false);
          })
        } catch (error) {
          setLoading(false)
          toast.error("Cannot publish the blog. Please try again")
          console.log(error)
        }
      }

      if(loading) return <Loader/>
  return (
    <div className='h-full w-full flex items-center justify-center flex-col'>
    {
        blog && (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-y-3'>                    
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className='w-[35rem]' placeholder='title' {...field}/>
                                </FormControl>                    
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <TipTap content={blog.content} onChange={field.onChange}/>
                                </FormControl>                    
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type='submit' className='w-[35rem] bg-main hover:bg-main-hover mt-5'>Update</Button>
                </form>               
            </Form>
        )
    }
</div>
    )
}

export default EditBlogPage