import { useTheme } from 'next-themes';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Project = ({ name, backend_code, frontend_code, code_link, desc, demo_link, url }) => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <div className={`rounded-xl shadow-md overflow-hidden ${currentTheme === "dark" ? "dark__shadow" : "light__shadow"} p-2 project`}>
            <div className="md:flex">
                <div className="md:shrink-0">
                    <Image className="w-full object-cover md:h-full md:w-62 sm:w-30 rounded-md" src={url} alt={name ?? ""} width={1000} height={500} />
                </div>
                <div className="p-4 pt-2 flex gap-2 flex-col">
                    <h2 className="uppercase text-bold font-semibold">{name}</h2>
                    <p className="mt-2">{desc}</p>
                    <div className="flex justify-start gap-5 flex-wrap">
                        {
                            code_link ?
                                <button className={`bg-transparent hover:bg-indigo-500 font-semibol py-2 px-4 border hover:border-transparent rounded ${currentTheme === "dark" ? "dark__shadow hover:text-white" : "light__shadow"}`}>
                                    <Link href={code_link} target="_blank" rel="noopener noreferrer">Code</Link>
                                </button> : <>
                                    <button className={`bg-transparent hover:bg-indigo-500 font-semibol py-2 px-4 border hover:border-transparent rounded ${currentTheme === "dark" ? "dark__shadow hover:text-white" : "light__shadow"}`}>
                                        <Link href={frontend_code} target="_blank" rel="noopener noreferrer">Frontend Code</Link>
                                    </button>
                                    <button className={`bg-transparent hover:bg-indigo-500 font-semibol py-2 px-4 border hover:border-transparent rounded ${currentTheme === "dark" ? "dark__shadow hover:text-white" : "light__shadow"}`}>
                                        <Link href={backend_code} target="_blank" rel="noopener noreferrer">Backend Code</Link>
                                    </button>
                                </>
                        }
                        <button className={`bg-transparent hover:bg-indigo-500 font-semibol py-2 px-4 border hover:border-transparent rounded ${currentTheme === "dark" ? "dark__shadow hover:text-white" : "light__shadow"}`}>
                            <Link href={demo_link ?? ""} target="_blank" rel="noopener noreferrer">Demo</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
