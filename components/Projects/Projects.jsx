import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Data } from '../Skills/useData'
import { Project } from './Project'

export const Projects = () => {
    const { ProjectList } = Data()

    return (

        <section
            name="projects"
            className="p-8 snap-start"
        >
            <div className="max-w-screen-2xl mx-auto flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
                        Projects
                    </p>
                </div>

                <div className="w-full mt-10 mb-5 flex gap-5 flex-col projects__container">
                    {ProjectList.map(({ name, desc, demo_link, code_link, url, frontend_code, backend_code }, key) => (
                        <Project name={name} backend_code={backend_code} frontend_code={frontend_code} code_link={code_link} desc={desc} demo_link={demo_link} key={key} url={url} />

                    ))}
                </div>
            </div>
        </section >
    )
}
