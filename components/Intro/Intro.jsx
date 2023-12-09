import React from 'react'

export const Intro = () => {
    return (
        <div className='w-full h-full p-5'>
            <div className='flex gap-10 flex-col justify-center'>
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
                        About Me
                    </p>
                </div>
                <div className='flex align-middle flex-col justify-center h-full gap-10 sm:gap-6'>
                    <h2 className="text-base uppercase sm:text-xl md:text-2xl lg:text-4xl  transition-all duration-500 ease-in">
                        <i class="fa-solid fa-arrow-right blink"></i> Hi there, I am Nayak Shubham, A software Engineer from India with a passion of sTORY TELLING,I CAN TAKE THE IDEA AND TURN THEM INTO REALITY.
                    </h2>

                    <h2 className="text-base uppercase sm:text-xl md:text-2xl lg:text-4xl  transition-all duration-300 ease-in">
                        <i class="fa-solid fa-arrow-right blink"></i>   Armed with over 2 years of experience, I excel in creating interactive and user-friendly interfaces. My skills include optimizing performance, ensuring accessibility, responsiveness, and designing reusable components.
                    </h2>

                    <h2 className="text-base uppercase sm:text-xl md:text-2xl lg:text-4xl  transition-all duration-300 ease-in">
                        <i class="fa-solid fa-arrow-right blink"></i>   My expertise extends to UI feasibility and frontend engineering, covering both web and mobile interfaces. I have a knack for turning product challenges into minimalist and compelling user experiences.
                    </h2>

                    <h2 className="text-base uppercase sm:text-xl md:text-2xl lg:text-4xl  transition-all duration-300 ease-in">
                        <i class="fa-solid fa-arrow-right blink"></i>   Yet, my passion extends beyond the realm of technology. I take delight in actively sharing my wealth of knowledge and experiences through insightful blogs and engaging in face-to-face interactions.
                    </h2>
                </div>
            </div>
        </div>
    )
}
