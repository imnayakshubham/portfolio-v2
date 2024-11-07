import React from 'react'
import { WordRotate } from '../ui/WordRotate/WordRotate'
import useElementHeight from '../../utils/useElementHeight';


export const AboutMeV3 = () => {
    const navbarHeight = useElementHeight("navbar__container")
    return (
        <section className="p-5"
            style={{
                height: `calc(100dvh - ${navbarHeight}px)`
            }}
        >
            <div className="relative h-full w-full ">

                <div className="absolute bottom-0 w-full">
                    <WordRotate
                        className={"text-[7.5vw] sm:text-[8.25vw] tracking-tighter uppercase leading-0"}
                        words={["Frontend Developer", "Software Engineer"]}
                    />
                </div>
            </div>
        </section>
    )
}
