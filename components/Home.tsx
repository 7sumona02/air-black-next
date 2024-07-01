import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='h-96 '>
      <div className='flex justify-center items-center flex-col gap-5 relative'>
        <Image
        src='/Logo.svg'
        alt="airblack"
        width={80}
        height={80}
        className='pt-10'
        />
        <h1 className='text-white tracking-widest'>PRESENTS</h1>
        <div className='absolute top-0'>
        <Image src='/Background.svg' width={640} height={640} alt='' className='background' />
      </div>
      </div>
    </div>
  )
}

export default Home
