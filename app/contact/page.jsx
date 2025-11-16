import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='w-screen h-screen px-52 flex flex-col gap-2 justify-center'>

        <Link target='blank' href='https://www.linkedin.com/in/areeb-amir-1a8208286/' className='flex items-center justify-between bg-blue-400/50 rounded-2xl p-2'>
          <div><h1 className='font-bold '>LinkedIn</h1></div>
          <div>
            <lord-icon
              src="https://cdn.lordicon.com/qjbuypqy.json"
              trigger="loop"
              delay="1500"
              state="in-reveal"
              style={{ width: 40, height: 40 }}>
            </lord-icon></div>
        </Link>

        <Link target='blank' href='https://github.com/ar-eeb1' className='flex items-center justify-between bg-gray-400/50 rounded-2xl p-2'>
          <div><h1 className='font-bold '>GitHub</h1></div>
          <div>
            <lord-icon
              src="https://cdn.lordicon.com/lllcnxva.json"
              trigger="loop"
              delay="1500"
              style={{ width: 40, height: 40 }}>
            </lord-icon></div>
        </Link>

        <Link target='blank' href="https://wa.me/+923171232544" className='flex items-center justify-between bg-green-400/50 rounded-2xl p-2'>
          <div><h1 className='font-bold '>WhatsApp</h1></div>
          <div>
            <lord-icon
              src="https://cdn.lordicon.com/vyyhrdzw.json"
              trigger="loop"
              delay="1500"
              style={{ width: 40, height: 40 }}>
            </lord-icon></div>
        </Link>

        <a href="mailto:areebamir.pk@gmail.com" className='flex items-center justify-between bg-red-400/50 rounded-2xl p-2'>
          <div><h1 className='font-bold '>E-Mail</h1></div>
          <div>
            <lord-icon
              src="https://cdn.lordicon.com/ozlkyfxg.json"
              trigger="loop"
              delay="1500"
              stroke="bold"
              colors="primary:#121331,secondary:#e83a30"
              style={{ width: 40, height: 40 }}>
            </lord-icon></div>
        </a>


      </div>
    </div >
  )
}

export default Contact
