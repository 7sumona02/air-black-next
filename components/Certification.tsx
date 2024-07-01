import Image from 'next/image'
import React from 'react'

const Certification = () => {
  return (
    <div className='flex justify-center'>
      <div className='px-10 flex flex-col gap-10 relative'>
        <div className='-translate-y-48 relative'>
            <h1 className='text-3xl text-white text-center pt-40 leading-32 max-w-96'>Get Certified From 
            India’s Biggest <br />
            Beauty Platform</h1>
            <Image src='/Arrows.svg' 
                width={100}
                height={100}
                alt=''
                className='w-[400px] absolute top-[210px]' />
        </div>

        <div>
            <Image src='/Certificate.svg' 
                width={100}
                height={100}
                alt=''
                className='w-[400px] absolute top-[210px]' />
        </div>
      </div>
    </div>
  )
}

export default Certification
