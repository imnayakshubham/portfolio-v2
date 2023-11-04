import { Typewriter } from 'react-simple-typewriter'
import React from 'react'
import { Socials } from '../Socials/Socials'

const AboutMe = () => {
    return (
        <section name="about" className='flex justify-center align-middle flex-col h-screen gap-2 aboutme'>
            <h1 className="text-6xl font-bold text-center">
                {"Nayak Shubham"}
            </h1>
            <p className="text-600 text-center">
                <span style={{ color: '#673ab7', fontWeight: 'bold' }}>
                    <Typewriter
                        words={['A Software Engineer', " ", 'A Frontend Developer']}
                        loop={1}
                        cursor
                        cursorStyle={<span style={{ opacity: 0 }}>{"..."}</span>}
                        cursorBlinking={true}
                        typeSpeed={50}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                    {"  "}
                </span>
            </p>
            <div className="flex justify-center gap-2 flex-wrap items-center">
                <i className="fa-solid fa-location-dot text-2xl"></i>
                <p className="text-600 text-center">
                    Ahmedabad, Gujarat, India
                </p>
            </div>
            <Socials />
        </section>
    )
}

export default AboutMe