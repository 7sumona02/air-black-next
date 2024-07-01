import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div className='grid grid-cols-3 gap-10'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <Image src='/Icon1.svg' 
            width={100}
            height={100}
            alt=''
            className='w-10' />
        <p className='text-white text-medium text-center font-sans'>Do-it-together, live on zoom</p>
      </div>
      <div className='flex flex-col items-center justify-center gap-4'>
        <Image src='/Icon2.svg' 
            width={100}
            height={100}
            alt=''
            className='w-10' />
        <p className='text-white text-medium text-center font-sans'>Do-it-together, live on zoom</p>
      </div>
      <div className='flex flex-col items-center justify-center gap-4'>
        <Image src='/Icon3.svg' 
            width={100}
            height={100}
            alt=''
            className='w-10' />
        <p className='text-white text-medium text-center font-sans'>Do-it-together, live on zoom</p>
      </div>
    </div>
  )
}

export default Features
