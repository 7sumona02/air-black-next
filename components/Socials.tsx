import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Socials = () => {
  return (
    <div className='h-screen bg-socials translate-y-[240px]'>
      <div className='px-10 flex flex-col gap-10 items-center'>
        <h1 className='text-5xl text-white text-center pt-40 leading-32'>Join our growing 
        community of 
        35,000+ alumni</h1>
        <Button className="w-full bg-button">Apply Now</Button>
        <Image src='/SocialLinks.svg' 
            width={100}
            height={100}
            alt=''
            className='w-72' />
      </div>
    </div>
  )
}

export default Socials
