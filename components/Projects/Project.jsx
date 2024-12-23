import { useTheme } from 'next-themes';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Project = ({ projectData }) => {
    const { name, desc, demo_link, code_link, url, frontend_code, backend_code, tech_stack_used } = projectData
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <div className={`rounded-xl overflow-hidden ${currentTheme === "dark" ? "dark__shadow" : "light__shadow"} p-2 project border-gray-200 border`}>
            <div className="md:flex">
                <div className="md:shrink-0">
                    <Image className="w-full object-cover md:h-full md:w-62 sm:w-30 rounded-md" src={url} alt={name ?? ""} width={1000} height={500} />
                </div>
                <div className="p-4 pt-2 flex gap-2 flex-col">
                    <h2 className="uppercase text-bold font-bold">{name}</h2>
                    <p className="mt-2">{desc}</p>
                    {tech_stack_used.length && <p className='text-left text-gray-500 dark:text-gray-400'>Tech Stack : <span>{tech_stack_used.join(", ")}.</span></p>}
                    <div className="flex justify-start gap-5 flex-wrap">
                        {
                            code_link ?
                                <button className="border p-2 rounded-md hover:border-[#00ffaa] shimmer__button">
                                    <Link href={code_link} target="_blank" rel="noopener noreferrer">
                                        Code
                                    </Link>
                                </button>
                                : <>
                                    <button className="border p-2 rounded-md hover:border-[#00ffaa] shimmer__button">
                                        <Link href={frontend_code} target="_blank" rel="noopener noreferrer">Frontend Code</Link>
                                    </button>
                                    <button className="border p-2 rounded-md hover:border-[#00ffaa] shimmer__button">
                                        <Link href={backend_code} target="_blank" rel="noopener noreferrer">Backend Code</Link>
                                    </button>
                                </>
                        }
                        {
                            demo_link ?
                                <button className="border p-2 rounded-md hover:border-[#00ffaa] shimmer__button">
                                    <Link href={demo_link ?? "#"} target="_blank" rel="noopener noreferrer">Demo</Link>
                                </button>
                                : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
