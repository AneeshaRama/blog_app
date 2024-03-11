import { LoaderIcon } from 'lucide-react'
import React from 'react'

const Loader = () => {
  return (
    <div className='fixed top-0 bottom-0 right-0 left-0 z-50 flex items-center justify-center bg-main'>
        <LoaderIcon className='text-white h-10 w-10 animate-spin'/>
    </div>
  )
}

export default Loader