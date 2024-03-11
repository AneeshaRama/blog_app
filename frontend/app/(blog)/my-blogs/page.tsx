"use client"

import Loader from '@/components/Loader';
import MyBlogCard from '@/components/MyBlogCard';
import useUserStore from '@/store/userStore';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const MyBlogsPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const user = useUserStore((state) => state.user);
    const router  = useRouter()

    useEffect(()=>{
        if(user !== null){
            setLoading(false)
        }else{
            router.push("/login")
        }
     },[])

    useEffect(() => {
        const fetchMyBlogs = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/${user?.userId}/blogs`);
                setBlogs(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching blogs:", error);
                setLoading(false);
            }
        }

        fetchMyBlogs();
    }, []);

    if(loading) return <Loader/>
  return (
    <div className='w-full flex items-center justify-center flex-col gap-y-3 pt-10 text-sm'>
        {
            blogs.length === 0 && (
                <>
                    <h1>You do not have any blogs</h1>
                    <p>You can publish blog
                        <Link className='text-main ml-2' href={"/blogs/new"}>
                         here
                        </Link>
                    </p>
                </>
            )
        }
        {
            blogs.map((b:Blog)=>{
                return (<MyBlogCard key={b.id} blog={b} setBlogs={setBlogs}/>)
            })
        }
    </div>
  )
}

export default MyBlogsPage