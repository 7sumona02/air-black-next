import React from 'react'
import { FaStar } from 'react-icons/fa'
import { LuFileBadge2 } from 'react-icons/lu'
import { TiTick } from 'react-icons/ti'

const CourseInfo = () => {
  return (
    <div className='-translate-y-44'>
      <div className='flex flex-col items-start justify-center px-10 gap-4'>
        <h1 className='text-3xl text-white font-thin'>Professional Online Makeup Course</h1>

        <div className='text-white flex items-center gap-4'>
            <div className='flex items-center gap-2 text-[12px] font-light bg-zinc-700 px-6 py-1 rounded-[8px]'>
                <LuFileBadge2 />
                <p>Certification Programme</p>
            </div>

            <div className='flex items-center gap-2 text-yellow-300 text-[12px]'>
                <FaStar />
                <p>Rated 4.85/5</p>
            </div>
        </div>

        <div className='flex flex-col items-start justify-center text-white text-sm gap-1'>
            <div className='flex items-center'>
                <TiTick />
                <p>India’s No.1 Online Makeup Course</p>
            </div>
            <div className='flex items-center'>
                <TiTick />
                <p>Learn by LIVE Do-it-Together Classes</p>
            </div>
            <div className='flex items-center'>
                <TiTick />
                <p>Unlimited Practise Session to master skills</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CourseInfo
