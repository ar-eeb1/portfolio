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
import pp from '@/public/areeb.png'
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

          <div className="md:w-1/3 w-full flex flex-col items-center gap-6">
            <Image
              src={pp}
              width={200}
              height={200}
              alt="Areeb"
              className="rounded-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Hero
