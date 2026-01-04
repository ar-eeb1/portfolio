'use client'

import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Typewriter from './Typewriter'
import Connect from './Connect'
import Image from 'next/image'
import pp from '@/public/areeb.jpeg'
import Link from 'next/link'

const Hero = () => {
  const [name, setName] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const savedName = localStorage.getItem('username')
    if (savedName) {
      setName(savedName)
      setOpen(false)
    } else {
      setOpen(true)
    }
  }, [])

  const handleSubmit = () => {
    if (inputValue.trim()) {
      localStorage.setItem('username', inputValue)
      setName(inputValue)
      setOpen(false)
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center px-6">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Welcome to Areeb&apos;s Website</DialogTitle>
            <div className="flex gap-3 mt-4">
              <Input
                type="text"
                placeholder="Enter your good name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Button type="button" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {name && (
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:h-[calc(100%-300px)] px-5 md:px-20 gap-10">
          <div className="md:w-2/3 w-full flex flex-col gap-6">
            <h1 className="text-5xl md:text-9xl font-bold bg-linear-to-r from-blue-500 via-teal-400 to-green-500 bg-clip-text text-transparent animate-linear">
              Hello! {name}
            </h1>
            <Typewriter />

            <div className="flex items-center md:gap-4 gap-2 flex-wrap md:mt-4 mt-3">
              <Link href='/contact' className="bg-linear-to-r from-blue-500 via-teal-400 to-green-500 text-white font-semibold md:py-4 md:px-6 py-2 px-4 rounded-full shadow-lg hover:scale-105 hover:from-teal-400 hover:to-blue-500 transition-transform duration-300 cursor-pointer">
                Hire Me
              </Link>

              <div className="bg-linear-to-r from-blue-500 via-teal-400 to-green-500 text-white font-semibold py-1 px-1 rounded-full shadow-lg hover:scale-105 hover:from-teal-400 hover:to-blue-500 transition-transform duration-300 cursor-pointer">
                <a
                  href="/AreebAmirResume.pdf"
                  download
                  className="bg-black cursor-pointer dark:bg-gray-800 text-white font-semibold md:py-3 md:px-6 py-1 px-4 rounded-full shadow-lg transition-transform duration-300 inline-block"
                >
                  Download Resume
                </a>

              </div>
              <div>
                <Connect />
              </div>
            </div>
          </div>

          <div className="md:w-1/3 w-full flex flex-col justify-center items-center gap-6">
            {/* Profile Picture Section with Curved Background */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 md:flex hidden items-center justify-end">
              {/* Curved Background Shape */}
              <div className="absolute right-0 top-0 bottom-0 w-full bg-linear-to-br from-blue-500/20 via-teal-400/20 to-green-500/20"
                style={{
                  clipPath: 'ellipse(70% 50% at 100% 50%)',
                }}>
              </div>

              {/* Profile Image */}
              <div className="relative z-10 mr-12">
                <Image
                  src={pp.src}
                  width={300}
                  height={300}
                  alt="Areeb"
                  className="rounded-full hover:scale-105 transition-transform duration-300 object-cover shadow-2xl border-4 border-white/20"
                />
              </div>
            </div>

            {/* Mobile Profile Picture */}
            <div className="md:hidden w-full flex justify-center">
              <Image
                src={pp.src}
                width={250}
                height={250}
                alt="Areeb"
                className="rounded-full hover:scale-105 transition-transform duration-300 object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Hero
