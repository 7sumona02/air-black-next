import Certification from '@/components/Certification'
import CourseInfo from '@/components/CourseInfo'
import Form from '@/components/Form'
import Home from '@/components/Home'
import Join from '@/components/Join'
import Socials from '@/components/Socials'
import React from 'react'

const page = () => {
  return (
    <div className='max-w-[640px]'>
      <Home />
      <CourseInfo />
      <Form />
      <Join />
      <Certification />
      <Socials />
    </div>
  )
}

export default page
