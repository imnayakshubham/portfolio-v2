import React, { useRef, useState } from 'react'
import { Data } from '../useData'
import { useTheme } from 'next-themes';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';

export const SkillsV2 = () => {
    const { techStack } = Data()
    const skillscontainer = useRef(null);
    const [hoveredSkillIndex, sethoveredSkillIndex] = useState(null);

    const { scrollYProgress } = useScroll({
        target: skillscontainer,
        offset: ["start 0.9", "start 0.25"]
    })

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])


    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    return (
        <motion.div className='w-full p-5' ref={skillscontainer} style={{ opacity }}>
            <div className='flex gap-5 flex-col justify-center align-middle'>
                <div>
                    <p className="text-3vw text-4xl font-bold border-b-4 border-gray-500 inline">
                        Skills
                    </p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-6 sm:px-0 md:px-0 items-center justify-center skill__cards py-10">
                    {techStack.map(({ id, src, title, style }) => (
                        <div className={`${currentTheme === "dark" ? "dark__shadow" : "light__shadow"} p-4 md:p-6 cursor-pointer border border-gray-200 transition duration-300 ease-in-out hover:border-[#00ffaa] hover:shadow-lg hover:border-1 ${hoveredSkillIndex === null ? 'hovered_card' : hoveredSkillIndex === id ? 'hovered_card' : ''}`} key={id}
                            onMouseEnter={() => sethoveredSkillIndex(id)}
                            onMouseLeave={() => sethoveredSkillIndex(null)}
                        >
                            <p className="md:text-4xl sm:text-2xl">{src}</p>
                            <p className="mt-3 md:text-xl break-all sm:text-sm">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
