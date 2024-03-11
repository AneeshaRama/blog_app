import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

const BlogCard = () => {
  return (
    <Card className="w-1/2">
        <CardHeader>
            <CardTitle className='text-main'>This is the blog title</CardTitle>
        </CardHeader>
        <CardContent className='truncate'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, aliquam aliquid? Maiores ullam dolorem voluptatem, aliquid non labore quibusdam fuga quasi? Non a maxime dignissimos aspernatur suscipit enim velit aliquid!
        </CardContent>
        <CardFooter className='flex items-center justify-between px-5'>
            <Button className='bg-main hover:bg-main-hover'>Read more</Button>
            <span className='text-main font-semibold text-sm'>by James</span>
        </CardFooter>
    </Card>
  )
}

export default BlogCard