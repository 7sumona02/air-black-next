import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Features from './Features'

const Join = () => {
  return (
    <div className='h-screen bg-socials -translate-y-20'>
       <div className='px-10 flex flex-col gap-10 relative'>
       <h1 className='text-4xl text-white text-center pt-40 leading-32'>Why Should You <br /> 
       Join Airblack?</h1>
       <Features />
        <Button className="w-full bg-button">Apply Now</Button>
        <Image src='/Arrows.svg' 
                width={100}
                height={100}
                alt=''
                className='w-[400px] absolute top-[210px]' />
       </div>
    </div>
  )
}

export default Join
