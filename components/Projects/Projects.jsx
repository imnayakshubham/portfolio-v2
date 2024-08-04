import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { Data } from '../Skills/useData'
import { Project } from './Project'
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';

export const Projects = () => {
    const projectList = Data().projectList
    const projectscontainer = useRef(null);

    const { scrollYProgress } = useScroll({
        target: projectscontainer,
        offset: ["start 0.9", "start 0.5"]
    })

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
    return (
        <motion.section
            name="projects"
            className="p-7 snap-start"
            ref={projectscontainer} style={{ opacity }}
        >
            <div className="max-w-screen-2xl mx-auto flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-200 inline">
                        Projects
                    </p>
                </div>
                <div className="w-full mt-10 mb-5 flex gap-5 flex-col projects__container">
                    {projectList.map((data, key) => (
                        <Project projectData={data} key={key} />
                    ))}
                </div>
            </div>
        </motion.section >
    )
}
