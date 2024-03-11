"use client"

import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const BlogPage = () => {
  const [blog, setBlog] = useState<Blog>();
  const [loading, setLoading] = useState(true);
  const {id} = useParams()

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
  return (
    <div className='flex flex-col justify-start pl-10 pt-10 items-start'>
        {
          blog !== null && blog !== undefined && (
            <>
              <p className='text-3xl text-main font-bold'>{blog?.title}</p>
              <div className='w-2/3 pt-10' dangerouslySetInnerHTML={{ __html: blog!.content }} />              
            </>
          )
        }
    </div>
  )
}

export default BlogPage