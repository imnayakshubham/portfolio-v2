import { Typewriter } from 'react-simple-typewriter'
import React from 'react'
import { Socials } from '../Socials/Socials'

const AboutMe = () => {
    return (
        <section name="about" className='flex justify-center align-middle flex-col h-screen aboutme'>
            <h1 className="text-6xl font-bold text-center">
                {"Nayak Shubham"}
            </h1>
            <p className="text-600 my-4 text-center">
                Experienced {' '}
                <span style={{ color: '#673ab7', fontWeight: 'bold' }}>
                    <Typewriter
                        words={['Software Engineer', 'Frontend Developer']}
                        loop={1}
                        cursor
                        cursorStyle=' '
                        cursorBlinking={true}
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    // onLoopDone={handleDone}
                    // onType={handleType}
                    />
                    {" "}
                </span>
            </p>
            <Socials />
            <div className="flex justify-center gap-4 flex-wrap my-4  items-center">
                <i className="fa-solid fa-location-dot text-2xl"></i>
                <p className="text-600 text-center">
                    Ahmedabad, Gujarat, India
                </p>
            </div>
        </section>
    )
}

export default AboutMe