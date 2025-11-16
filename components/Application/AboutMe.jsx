import React from 'react'

const AboutMe = () => {
    return (
        <div id='about'>
            <div className="bg-[#1112] text-center md:pl-[300px] md:pr-[300px] md:pt-[100px] md:pb-[100px] p-4 border-b border-gray-500">
                <div className="bg-white dark:bg-[#111] rounded-xl p-5 border border-red-50 hover:shadow-2xl transition duration-200 hover:scale-[1.03]">
                    <h1 className="text-3xl md:text-5xl font-bold p-5">
                        About Me
                    </h1>
                    <h4 className="md:text-xl teext-md ">
                        Hi, I'm <span className="font-semibold">Areeb Amir</span>, an aspiring
                        <span className="text-green-400"> MERN Stack Developer </span> passionate about
                        building full-stack web applications with MongoDB, Express.js, React, and Node.js.
                        Alongside MERN, I have developed several projects showcasing my skills in
                        <span className="font-semibold"> Next.js, GSAP animations, NextAuth, React Hook Form,</span>
                        and various Next.js components.
                        I enjoy creating engaged and responsive <span className="font-semibold">front-end experiences </span>
                        that bring designs to life. While the <span className="font-semibold">back-end</span> often challenges me,
                        I push through to ensure a smooth and seamless flow between both ends of the application.
                        Explore my projects section to see how I turn ideas into interactive, responsive,
                        and user-friendly web experiences.
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
