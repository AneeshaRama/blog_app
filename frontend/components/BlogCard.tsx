import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import Link from 'next/link';

const BlogCard = ({blog}: {blog:Blog}) => {
  const truncateDescription = (description: string, maxLength = 100) => {
    if (description.length <= maxLength) {
      return description;
    } else {
      return description.substring(0, maxLength) + "...";
    }
  };

  return (
    <Card className="w-1/2">
        <CardHeader>
            <CardTitle className='text-main'>{blog.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='truncate' dangerouslySetInnerHTML={{ __html: truncateDescription(blog.content) }} />
        </CardContent>
        <CardFooter className='flex items-center justify-between px-5'>
            <Link href={`/blogs/${blog.id}`}>
              <Button className='bg-main hover:bg-main-hover'>Read more</Button>
            </Link>
            <span className='text-main font-semibold text-sm'>{`by ${blog.author}`}</span>
        </CardFooter>
    </Card>
  )
}

export default BlogCard

