import Link from 'next/link';
import { useState } from 'react';
import DarkModeToggler from './DarkModeToggler/DarkModeToggler';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import { Socials } from './Socials/Socials';
import { HyperText } from './ui/HyperText/HyperText';
import { BlurFade } from './ui/BlurAnimation/BlurFadeAnimation';

const NavBar = () => {

  return (
    <nav className={`w-screen sticky top-0 z-50 backdrop-blur-sm`} id={"navbar__container"}>
      <BlurFade delay={0.25} inView>
        <div className="justify-between mx-auto lg:max-w-8xl flex py-4 px-5 backdrop-blur-sm gap-2 flex-col sm:flex-row">
          <div>
            <div className="flex items-center justify-between">
              {/* LOGO */}
              <div>
                <Link href="/">
                  <h2 className="text-2xl font-bold">
                    Nayak Shubham
                  </h2>
                </Link>
                <span className="uppercase flex items-center gap-2 font-thin text-gray-500">
                  <HyperText
                    className={"font-thin"}
                    text="Manifesting"
                  />
                  &
                  <HyperText
                    className={"font-thin"}
                    text="Working"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className={`flex gap-6 items-center justify-end`}>
            <div>
              <Socials />
            </div>
            <div className="flex items-center">
              <DarkModeToggler />
            </div>
          </div>
        </div>
      </BlurFade>
    </nav >
  );
}

export default NavBar;
