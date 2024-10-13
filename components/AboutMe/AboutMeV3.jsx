import React from 'react'
import { WordRotate } from '../ui/WordRotate/WordRotate'
import { HyperText } from '../ui/HyperText/HyperText'

export const AboutMeV3 = () => {
    return (
        <section className=" h-[85vh] sm:h-[91vh] p-5">
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
