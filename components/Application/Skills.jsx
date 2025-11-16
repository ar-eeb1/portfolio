import React from 'react'

const Skills = () => {
    return (
        <div className='skills' id='skills'>
            <div className="dark:bg-black bg-white/60 dark:text-white md:p-28 pt-10">
                <div className="flex justify-center items-center md:pb-10 gap-3">
                    <lord-icon
                        src="https://cdn.lordicon.com/wgmzmyvv.json"
                        trigger="loop"
                        delay="1000"
                        stroke="bold"
                        colors="primary:#0e98f6,secondary:#00ca5d"
                        style={{ width: 70, height: 70 }}>
                    </lord-icon>
                    <h1 className="md:text-5xl text-3xl font-bold md:p-5  ">Skills & Technologies</h1>
                </div>

                <div className="cards flex justify-around flex-wrap gap-5">
                    <div className="card1 flex text-center flex-col bg-white/10 p-5 rounded-2xl hover:text-[#0e98f6] transition transform duration-200 hover:scale-[1.05] hover:shadow-blue-400/10 shadow-xl w-[240px] ">
                        <div className="headCard">
                            <h1 className="md:text-4xl text-3xl font-[MyFont]">Frontend</h1>
                            <lord-icon
                                src="https://cdn.lordicon.com/zcpmxjfa.json"
                                trigger="loop"
                                delay="1000"
                                stroke="bold"
                                state="in-reveal"
                                colors="primary:#0e98f6,secondary:#00ca5d"
                                style={{ width: 70, height: 70 }}>
                            </lord-icon>
                            <div className="list w-full h-full flex justify-center">
                                <ul className="dark:text-white flex items-center text-md flex-col ">
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Next</li>
                                    <li>Tailwind CSS</li>
                                    <li>GSAP (animation)</li>
                                    <li>Figma</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card2 flex text-center flex-col bg-white/10 p-5 rounded-2xl hover:text-[#0e98f6] transition transform duration-200 hover:scale-[1.05] hover:shadow-blue-400/10 shadow-xl w-[240px] ">
                        <div>
                            <h1 className="md:text-4xl text-3xl font-[MyFont]">BackEnd</h1>
                            <lord-icon
                                src="https://cdn.lordicon.com/eduzjjfi.json"
                                trigger="loop"
                                delay="1000"
                                stroke="bold"
                                colors="primary:#0e98f6,secondary:#00ca5d"
                                style={{ width: 70, height: 70 }}>
                            </lord-icon>
                        </div>
                        <div className="list w-full h-full flex justify-center ">
                            <ul className="dark:text-white   ">
                                <li>NodeJS</li>
                                <li>ExpressJS</li>
                                <li>APIs</li>
                                <li>Authentication</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card3 flex text-center flex-col bg-white/10 p-5 rounded-2xl hover:text-[#0e98f6] transition transform duration-200 hover:scale-[1.05] hover:shadow-blue-400/10 shadow-xl w-[240px] ">
                        <div>
                            <h1 className="md:text-4xl text-3xl font-[MyFont]">Tools</h1>
                            <lord-icon
                                src="https://cdn.lordicon.com/jzffwndw.json"
                                trigger="loop"
                                delay="1000"
                                stroke="bold"
                                colors="primary:#0e98f6,secondary:#00ca5d"
                                style={{ width: 70, height: 70 }}>
                            </lord-icon>
                        </div>
                        <div className="list w-full h-full flex justify-center ">
                            <ul className="dark:text-white flex   flex-col ">
                                <li>Git & GitHub</li>
                                <li>VS Code</li>
                                <li>Netlify / Vercel (deployment)</li>
                                <li>Railway (Hosting)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card4 flex text-center flex-col bg-white/10 p-5 rounded-2xl hover:text-[#0e98f6] transition transform duration-200 hover:scale-[1.05] hover:shadow-blue-400/10 shadow-xl w-[240px] ">
                        <div>
                            <h1 className="md:text-4xl text-3xl font-[MyFont]">DataBase</h1>
                            <lord-icon
                                src="https://cdn.lordicon.com/mnlnsxhq.json"
                                trigger="loop"
                                delay="1000"
                                stroke="bold"
                                colors="primary:#0e98f6,secondary:#00ca5d"
                                style={{ width: 70, height: 70 }}>
                            </lord-icon>
                            <div className="list w-full h-full flex justify-center ">
                                <ul className="dark:text-white flex   flex-col ">
                                    <li>MongoDB (Mongoose)</li>
                                    <li>MySQL</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills
