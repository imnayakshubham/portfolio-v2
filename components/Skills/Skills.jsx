import { useTheme } from 'next-themes'
import Image from 'next/image'
import React from 'react'
import { Data } from './useData'

export const Skills = () => {
    const { techStack } = Data()
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <section
            name="skills"
            className="snap-start p-7"
        >
            <div className="max-w-screen-2xl mx-auto flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
                        Skills
                    </p>
                    <p className="py-6">{"These are the technologies I've worked with and used them in my projects."}</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center sm:px-0">
                    {techStack.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`${currentTheme === "dark" ? "dark__shadow" : "light__shadow"} p-4 rounded-lg cursor-pointer max-w-md max-w-s`}
                        >
                            <p className="flex justify-center text-4xl sm:text-3xl">{src}</p>
                            <p className="mt-3 text-xl break-all">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}
