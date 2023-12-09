import React from 'react'
import { Data } from '../useData'
import { useTheme } from 'next-themes';

export const SkillsV2 = () => {
    const { techStack } = Data()
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    return (
        <div className='w-full h-screen p-5'>
            <div className='flex gap-10 flex-col justify-center align-middle'>
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
                        Skills
                    </p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 text-center sm:px-0 md:px-0 items-center" style={{ height: "80vh" }}>
                    {techStack.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                        >
                            <div className={`${currentTheme === "dark" ? "dark__shadow" : "light__shadow"} p-4`}>
                                <p className="flex justify-center md:text-4xl sm:text-2xl">{src}</p>
                                <p className="mt-3 md:text-xl break-all sm:text-sm">{title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
