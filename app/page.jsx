
import React from 'react'
import Hero from '@/components/Application/Hero'
import pp from '@/public/areeb.png'
import Image from 'next/image'
import AboutMe from '@/components/Application/AboutMe'
import Skills from '@/components/Application/Skills'

const page = () => {
  return (
    <div className=' overflow-x-hidden bg-white dark:bg-[#101828]'>
      <Hero />
      <AboutMe />
      <Skills />
    </div>
  )
}

export default page
