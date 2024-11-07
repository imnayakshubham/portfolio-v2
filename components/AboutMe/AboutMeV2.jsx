import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion';
import { AnimationEffect } from '../AnimationEffect/AnimationEffect';


export const AboutMeV2 = () => {
    return (
        <div className="my-10 w-full" style={{ height: `calc(100dvh - 50px)` }}>
            <div className='flex justify-around items-center flex-col gap-4 w-full h-full'>
                <div className='about__me__links sm:w-11/12 border-4 border-b-0'>
                    <Link rel="noopener noreferrer" target="_blank" href={"https://www.linkedin.com/in/imnayakshubham"}>
                        <i className="fa-brands fa-linkedin" aria-label="Linkedin" role="img">{" "}linkedin</i>
                    </Link>
                    <Link rel="noopener noreferrer" target="_blank" href={"https://github.com/imnayakshubham"}>
                        <i className="fa-brands fa-github" aria-label="Github" role="img">{" "}github</i>
                    </Link>
                </div>
                <span className='name__container'>
                    <p className='first__name'>Shubham</p>
                    <div className='flex justify-center items-end gap-6 w-full'>
                        {/* <div className='flex justify-between gap-4 flex-col'>
                            {["LinkedIN", "Github", "Hashnode"].map((res) => <>{
                                <Link rel="noopener noreferrer" target="_blank" href={"https://github.com/imnayakshubham"}>
                                    <i className="fa-brands fa-github text-3xl" aria-label="Github" role="img"></i>
                                    {" "}{res}
                                </Link>}
                            </>)}
                        </div> */}
                        <p className='last__name'>Nayak</p>
                    </div>
                </span>
                <div>
                    <h1 className="text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center uppercase transition-all duration-300 ease-in">
                        <span style={{ fontWeight: "500" }}>
                            {"A Frontend Developer From India".split(" ").map((el, i) => (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i / 2,
                                    }}
                                    key={i}
                                >
                                    {el}{" "}
                                </motion.span>
                            ))}

                        </span>
                    </h1>
                </div>
                <div className='about__me__links sm:w-11/12 border-4 border-t-0'>
                    <div className='custom__border'>
                        <Link rel="noopener noreferrer" target="_blank" href={"https://imnayakshubham.hashnode.dev/"}>
                            <i className="fa-brands fa-hashnode" aria-label="Hashnode" role="img">{" "} Blogs</i>
                        </Link>
                    </div>

                    <Link rel="noopener noreferrer" target="_blank" href={"https://twitter.com/imnayakshubham"}>
                        <i className="fa-brands fa-square-twitter" aria-label="Twitter" role="img"> {" "} twitter</i>
                    </Link>

                </div>
                <div className='uppercase text-1xl leading-3 blink'><i class="fa-solid fa-arrow-down"></i> {" "}Scroll</div>
            </div>
        </div >
    )
}
