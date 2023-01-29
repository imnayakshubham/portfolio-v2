import Link from 'next/link'
import React from 'react'

export const Socials = () => {
    return (
        <div className="flex justify-center gap-6 flex-wrap snap-start">
            <Link rel="noopener noreferrer" target="_blank" href={"https://github.com/imnayakshubham"}>
                <i className="fa-brands fa-github text-3xl" aria-label="Github" role="img"></i>
            </Link>

            <Link rel="noopener noreferrer" target="_blank" href={"https://www.linkedin.com/in/imnayakshubham"}>
                <i className="fa-brands fa-linkedin text-3xl" aria-label="Linkedin" role="img"></i>
            </Link>

            <Link rel="noopener noreferrer" target="_blank" href={"https://imnayakshubham.hashnode.dev/"}>
                <i className="fa-brands fa-hashnode text-3xl" aria-label="Hashnode" role="img"></i>
            </Link>

            <Link rel="noopener noreferrer" target="_blank" href={"https://twitter.com/imnayakshubham"}>
                <i className="fa-brands fa-square-twitter text-3xl" aria-label="Twitter" role="img"></i>
            </Link>
        </div>
    )
}
