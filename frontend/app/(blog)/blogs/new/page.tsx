"use client"

import { Input } from '@/components/ui/input'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Button } from '@/components/ui/button'
import TipTap from '@/components/TipTap'


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

const NewBlogPage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title: "",
          content: "",
        },
      })

      async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
      }
  return (
    <div className='h-full w-full flex items-center justify-center flex-col'>
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
                                <TipTap content={""} onChange={field.onChange}/>
                            </FormControl>                    
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                 </div>
                <Button type='submit' className='w-[35rem] bg-main hover:bg-main-hover mt-5'>Publish</Button>
            </form>
        </Form>
    </div>
  )
}

export default NewBlogPage