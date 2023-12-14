import { useTheme } from 'next-themes';
import React from 'react'

const DarkModeToggler = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const handleToggler = (e) => {
        document.documentElement.classList.add('transition');
        if (currentTheme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return (
        <label htmlFor={"toggler"} className="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" checked={currentTheme === "dark" ? true : false} className="sr-only peer" onChange={(e) => handleToggler(e)} id={"toggler"} />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
        </label>
    )
}

export default DarkModeToggler