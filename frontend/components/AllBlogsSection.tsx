"use client"
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import BlogCard from './BlogCard';
import Loader from './Loader';

const AllBlogsSection = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchAllBlogs = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`);
                setBlogs(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching blogs:", error);
                setLoading(false);
            }
        }

        fetchAllBlogs();
    }, []);

    if(loading) return <Loader/>
  return (
    <>
        {
            blogs.length === 0 && <h1>No blogs to show</h1>
        }
        {
            blogs.map((b:Blog)=>{
                return (<BlogCard key={b.id} blog={b}/>)
            })
        }
    </>
  )
}

export default AllBlogsSection