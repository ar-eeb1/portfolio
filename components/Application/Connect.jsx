import Link from 'next/link'
import React from 'react'

function Connect() {
  return (
    <div className="connect w-full flex items-start justify-start flex-row md:gap-5 gap-2 md:flex-nowrap flex-wrap">
      <div className="" >
        <Link target='blank' href='https://www.linkedin.com/in/areeb-amir-1a8208286/' >
          <lord-icon
            src="https://cdn.lordicon.com/rqdhcgcm.json"
            trigger="loop"
            delay="1000"
            stroke="bold"
            colors="secondary:#00ca5d"
            style={{ width: 40, height: 40 }}>
          </lord-icon></Link>
      </div>
      <div className="git cursor-pointer">
        <Link href='' target='_blank'>
          <lord-icon
            src="https://cdn.lordicon.com/acgiczyg.json"
            trigger="loop"
            delay="1000"
            stroke="bold"
            colors="secondary:#00ca5d"
            style={{ width: 40, height: 40 }}>
          </lord-icon>
        </Link>
      </div>
    </div>
  )
}

export default Connect
