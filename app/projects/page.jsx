'use client'
import ProjectCard from '@/components/Application/ProjectCard'
import React, { useState } from 'react'
import ViewsCounter from '@/components/Application/ViewsCounter';

const Projects = () => {

    return (
        <div className='mt-25'>
            <div>
                <h1 className='text-center text-4xl font-bold'>Recent Projects</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 m-10 gap-10'>
                <ProjectCard
                    src={["https://res.cloudinary.com/dliahmplq/image/upload/v1763217760/c3c4e523-1df0-44cf-9946-49afc48b387d.png", "https://res.cloudinary.com/dliahmplq/image/upload/v1763288978/d17ee86d-09b6-475e-9271-f11736d7db07.png"]}
                    projName="Portfolio Website"
                    description="This portfolio is display of my technical skills, creative thinking, and practical experience in building modern web applications. It highlights my ability to develop clean, responsive, and user-focused interfaces using Next.js, React, and Tailwind CSS."
                    url='http://localhost:3000/'
                    tags={['Portfolio', 'Project', 'Personal']}
                    date='November-2025'
                />
                <ProjectCard
                    src={["https://res.cloudinary.com/dliahmplq/image/upload/v1763218574/d452acc2-4c2e-4a11-99a9-6d163cbbc379.png", "https://res.cloudinary.com/dliahmplq/image/upload/v1763288805/8e1b6584-0e57-4642-9e06-0102c37e8723.png", "https://res.cloudinary.com/dliahmplq/image/upload/v1763288864/fff020e7-023a-45ac-afc6-1d14a0929b21.png", "https://res.cloudinary.com/dliahmplq/image/upload/v1763289065/7ad87aeb-eb20-4c44-8acb-c3be921ce477.png"]}
                    projName="La-Klosette"
                    description="Build this responsive e-commerce store using NextJS, Shadcn, Tailwind contains many functionality Like Admin Panel, Basicities of E-Commerce (Managing categories, Products , Users and Orders), Two factor authentication, Graphs, Coupons, Filters, Search, Dark Mode, last but not least Ratings & Reviews. Yes this took time and tutorials but at the end it was worth it."
                    url='https://laklosette.vercel.app/'
                    tags={['NextJS', 'Full Stack', 'Personal', 'E-Commerce']}
                    date='October-2025'
                />
                <ProjectCard
                    src={["https://res.cloudinary.com/dliahmplq/image/upload/v1763294162/08674d7d-b816-415d-8d0e-dfbfa1699943.png", "https://res.cloudinary.com/dliahmplq/image/upload/v1763294228/b8f8a130-01f6-4b6e-a4f8-811eae328eab.png", "https://res.cloudinary.com/dliahmplq/image/upload/v1763294377/5bfe4e5d-4352-4605-9261-25e01f8e65cd.png"]}
                    projName="Maxnet Internet Service Provider"
                    description="One of my iniital Project, where i played my role as a Jr.Network Manager. The application includes few useful sections such as Network trubleshooting guide, Shop page for placing an order, and a Connection request form.Build this application using NextJS, React.The UI/UX enhanced with animated icons, GSAP an easy to use and engaging Web Experience."
                    url='https://maxnet.vercel.app/'
                    tags={['Network Management', 'ISP Web Portal', 'Client-Side Application']}
                    date='September-2025'
                />
            </div>
            <div>
                <h1 className='text-center text-4xl font-bold'>Hands-On Practice Projects</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 m-10 gap-10'>

                <ProjectCard
                    src={["https://res.cloudinary.com/dliahmplq/image/upload/v1763301908/347bc7cc-2bca-4e1c-975c-dad23b5d45e0.png"]}
                    projName="Github Card"
                    description="Cretaed a GitHub profile card generator web app where users can enter a GitHub username and generate a polished, downloadable card summarizing their profile. The card displays key details like avatar, bio, repository stats, and other public profile information."
                    url='https://creategitcard.netlify.app/'
                    tags={['NextJS', 'Tailwind', 'API Calls', 'Save']}
                    date='September-2025'
                />
                <ProjectCard
                    src={["https://res.cloudinary.com/dliahmplq/image/upload/v1763301294/73906948-02be-4722-a93a-0cd8ba3b1504.png"]}
                    projName="Currency Converter"
                    description="This is a currency converter web app built using React and Tailwind, Users can input an amount, select both the source and target currencies, and instantly convert between them using real time exchange rate data."
                    url='https://currency-converter-by-areeb.netlify.app/'
                    tags={['Vite-React', 'Tailwind', 'API Calls', 'Responsive']}
                    date='September-2025'
                />
                <ProjectCard
                    src={["https://res.cloudinary.com/dliahmplq/image/upload/v1763301319/8c688cf5-af35-4dcd-85b3-83e1eebf278f.png"]}
                    projName="Generate Password"
                    description="I designed the UI to be simple and intuitive, allowing users to easily pick options and copy the generated password to their clipboard. The project helped me deepen my understanding of React randomness functions and form handling."
                    url='https://create-password-by-areeb.netlify.app/'
                    tags={['React', 'Random', 'Responsive']}
                    date='September-2025'
                />
                <ProjectCard
                    src={["https://res.cloudinary.com/dliahmplq/image/upload/v1763300970/9e3b8318-3588-4ef3-a86b-0d6e62fa6419.png"]}
                    projName="Task Manager"
                    description="Build as a practice for basic operations of Web Application. Simple, elegant, and efficient Add, edit, delete, and mark tasks as done Everything persists with local storage, so nothing is lost Super easy to manage daily tasks!"
                    url='https://task-manager-by-areeb.netlify.app/'
                    tags={['React', 'Tailwind', 'JavaScript', 'Responsive']}
                    date='August-2025'
                />
                <ProjectCard
                    src={["https://res.cloudinary.com/dliahmplq/image/upload/v1763300511/a96892b9-c6a6-46db-aae2-90d638bda0d0.png"]}
                    projName="Pass Man"
                    description="Built with React Uses animated icons for a smooth UI Integrated React Toastify for clean notifications All passwords are securely saved to local storage"
                    url='https://pass-manager-by-areeb.netlify.app/'
                    tags={['React', 'CSS', 'Responsive', 'GSAP']}
                    date='August-2025'
                />
                <ProjectCard
                    src={["https://res.cloudinary.com/dliahmplq/image/upload/v1763296475/bb86c0d1-1ff7-4eb4-88b4-97ba9ccae46a.png"]}
                    projName="Spotify Clone"
                    description="Created this single-page application using core website-management concepts in JavaScript. This project served as my practice for applying advanced JavaScript techniques, users can play songs, seek, moving to previous/next and all of that using JS."
                    url='https://spotify-by-areeb.netlify.app/'
                    tags={['API Calls', 'Project', 'Advance JS']}
                    date='July-2025'
                />
                <ProjectCard
                    src={["https://res.cloudinary.com/dliahmplq/image/upload/v1763300329/7a292113-1f60-4e3e-9eda-d535b4ca2376.png"]}
                    projName="My Bindle"
                    description="This project was developed as part of my front-end development make it responsive and applied GSAP for a smooth User Experience  "
                    url='https://mybindle-by-areeb.netlify.app/'
                    tags={['HTML', 'CSS', 'JavaScript', 'Responsive', 'GSAP']}
                    date='July-2025'
                />
                <ProjectCard
                    src={["https://res.cloudinary.com/dliahmplq/image/upload/v1763299048/b287ecda-9f39-4f76-adbb-446f53702a82.png"]}
                    projName="Bonsai"
                    description="This project was developed as part of my front-end development using HTML, CSS, JS and make it responsive "
                    url='https://bonsai-by-areeb.netlify.app/'
                    tags={['HTML', 'CSS', 'JavaScript']}
                    date='July-2025'
                />
                <ProjectCard
                    src={["https://res.cloudinary.com/dliahmplq/image/upload/v1763298810/16ea072a-d06c-4463-980b-c941c83840e1.png"]}
                    projName="Pulse"
                    description="This project was developed as part of my front-end development practice"
                    url='https://pulse-by-areeb.netlify.app/'
                    tags={['HTML', 'CSS']}
                    date='July-2025'
                />
                <ProjectCard
                    src={["https://res.cloudinary.com/dliahmplq/image/upload/v1763296972/616877a3-8ac9-4336-a7c4-ce87674f2311.png"]}
                    projName="Netlflix Clone"
                    description="This was my very first clone project created with HTML and CSS. It marks the beginning of my interest in web development. While it isn&apos;t perfect or fully responsive, I&apos;ve intentionally kept it unchanged as a reference to my starting point and to highlight how far I&apos;ve progressed in front-end development. "
                    url='https://net-flix-by-areeb.netlify.app/'
                    tags={['HTML', 'CSS', 'JavaScript']}
                    date='December-2024'
                />
            </div>

            <div className='w-full h-1/2 text-center flex-col justify-center hidden'>
                <ViewsCounter />
            </div>


        </div>
    )
}

export default Projects
