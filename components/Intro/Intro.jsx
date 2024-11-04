import React from 'react'

export const Intro = () => {
    const totalExperience = new Date().getFullYear() - 2021

    return (
        <section className='w-full h-full p-5'>
            <div className='flex gap-10 flex-col justify-center'>
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
                        About Me
                    </p>
                </div>
                <div className='flex align-middle flex-col justify-center h-full gap-12 sm:gap-6'>
                    <h6 className="text-base uppercase sm:text-xl md:text-2xl lg:text-4xl transition-all duration-300 ease-in flex gap-2 text-balance">
                        <i className="fa-solid fa-arrow-right blink"></i>
                        <p>
                            {`Hi there! I'm Nayak Shubham, a software engineer from India with a passion for storytelling. I love taking ideas and bringing them to life.`}
                        </p>
                    </h6>

                    <h6 className="text-base uppercase sm:text-xl md:text-2xl lg:text-4xl  transition-all duration-300 ease-in flex  gap-2 text-balance">
                        <i className="fa-solid fa-arrow-right blink"></i>
                        <p>
                            {`Armed with over ${totalExperience} years of experience, I excel in creating interactive and user-friendly interfaces. My skills include optimizing performance, ensuring accessibility, responsiveness, and designing reusable components.`}
                        </p>
                    </h6>

                    <h6 className="text-base uppercase sm:text-xl md:text-2xl lg:text-4xl  transition-all duration-300 ease-in flex  gap-2 text-balance">
                        <i className="fa-solid fa-arrow-right blink"></i>
                        <p>
                            {"I have a strong background in UI feasibility and frontend engineering for both web and mobile platforms. I enjoy transforming product challenges into simple and engaging user experiences."}
                        </p>
                    </h6>

                    <h6 className="text-base uppercase sm:text-xl md:text-2xl lg:text-4xl  transition-all duration-300 ease-in flex  gap-2 text-balance">
                        <i className="fa-solid fa-arrow-right blink"></i>
                        <p>
                            {"Outside of technology, I'm passionate about sharing my knowledge and experiences. I love writing insightful blogs and engaging in meaningful conversations."}
                        </p>
                    </h6>
                </div>
            </div>
        </section>
    )
}
