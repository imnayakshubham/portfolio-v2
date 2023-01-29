import React from 'react'
import { Socials } from '../Socials/Socials'
import { HiArrowDown } from 'react-icons/hi';

export const FindMe = () => {
    return (
        <footer className="text-center p-4">
            <section
                name="contact"
                data-scroll-section
                className="flex items-center flex-wrap justify-around h-full gap-5"
            >
                <div className="uppercase text-4xl font-bold text-center">
                    {"Let's"}
                    <span className="fx-underline text-stroke">{" Connect"}</span>
                </div>
                <div className="col-span-4 grid place-content-center gap-6 text-xl text-center md:text-left ">
                    <span className='contact__icons__container'>Feel free to reach out me
                        <HiArrowDown className='hello' /></span>
                    <Socials />
                </div>
            </section>
        </footer>
    )
}
