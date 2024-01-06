import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DarkModeToggler from './DarkModeToggler/DarkModeToggler';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import { Typewriter } from 'react-simple-typewriter';
import { Socials } from './Socials/Socials';

const NavBar = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [cursorStyle, setcursorStyle] = useState("🖋️")

  const handleDone = (value) => {
    setcursorStyle(" ")
    return
  }

  return (
    <nav className={`w-full fixed top-0 left-0 right-0 z-10000 ${isMobileView ? "bg-[#121212] text-[#fff]" : ""}`}>
      <div className="justify-between mx-auto lg:max-w-8xl md:items-center md:flex md:px-4 backdrop-blur-sm">
        <div>
          <div className="flex items-center justify-between md:block">
            {/* LOGO */}
            <Link href="/">
              <h2 className="text-2xl font-bold">
                Nayak Shubham
              </h2>
            </Link>
            <div className="changing-text text-4xl font-bold"></div>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden flex gap-3 items-center">
              <DarkModeToggler />
              <button onClick={() => setIsMobileView(!isMobileView)} className='px-2 py-2 font-bold text-2xl' aria-label="menu-icons">
                {!isMobileView ? <GiHamburgerMenu /> : <ImCross />}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`flex justify-center pb-3 md:block md:pb-0 md:mt-0 ${isMobileView ? 'md:p-0 block backdrop-blur-md h-screen' : 'hidden'}`}
        >
          <ul className={`h-full md:h-auto items-center justify-between md:flex align-middle max-h-[80%] ${isMobileView ? 'flex flex-col justify-evenly' : null}`}>
            {/* {isMobileView ? */}
            <>
              <li className="text-xl py-2 md:px-2 md:border-b-0  hover:underline md:hover:bg-transparent cursor-pointer max-w-fit">
                <Link href="#about" onClick={() => setIsMobileView(false)}>
                  About
                </Link>
              </li>
              <li className={`text-xl py-2 md:px-2  md:border-b-0  hover:underline md:hover:bg-transparent cursor-pointer max-w-fit`}>
                <Link href="#skills" onClick={() => setIsMobileView(false)}>
                  Skills
                </Link>
              </li>
              <li className={`text-xl py-2 md:px-2  md:border-b-0 hover:underline md:hover:bg-transparent cursor-pointer max-w-fit`}>
                <Link href="#projects" onClick={() => setIsMobileView(false)}>
                  Projects
                </Link>
              </li>
              <li className={`text-xl py-2 md:px-2  md:border-b-0  hover:underline md:hover:bg-transparent cursor-pointer max-w-fit`}>
                <Link href="#contact" onClick={() => setIsMobileView(false)}>
                  Contact
                </Link>
              </li>
            </>
            {/* :
              <li className={`text-xl py-2  md:border-b-0 hover:underline md:hover:bg-transparent cursor-pointer max-w-fit`}>
                <Socials />
              </li> */}
            {/* } */}
            {(!isMobileView) &&
              <li className={`text-xl py-2 md:px-2  md:border-b-0 hover:underline md:hover:bg-transparent cursor-pointer max-w-fit`}>
                <DarkModeToggler />
              </li>
            }
          </ul>
        </div>
        {isMobileView &&
          <div className='sticky bottom-4'>
            <Socials />
          </div>
        }
      </div>
    </nav>
  );
}

export default NavBar;
