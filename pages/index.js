import Head from 'next/head'
import NavBar from '../components/NavBar'
import { useTheme } from 'next-themes';
import { FindMe } from '../components/FindMe/FindMe';
import { Projects } from '../components/Projects/Projects';
import { AboutMeV3 } from '../components/AboutMe/AboutMeV3';
import { Intro } from '../components/Intro/Intro';
import { SkillsV2 } from '../components/Skills/SkillsV2/SkillsV2';
import { BlurFade } from '../components/ui/BlurAnimation/BlurFadeAnimation';
import { useEffect, useState } from 'react';
import { cn } from '../utils';

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  return (
    <>
      <Head>
        <title>Nayak Shubham</title>
        <meta name="description" content="A Front End Developer with a keen interest in developing highly interactive and intuitive user interfaces keeping in mind its performance, accessibility, responsiveness, reusability of components and overall stability." />
        <meta name="keywords" content="frontend developer, fullstack developer, engineer, developer, nayak shubham, portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ns.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>

      <div className={cn(`${isClient && `${currentTheme !== "dark" ? 'pattern__container' : "pattern__container__dark"}`} pointer-events-none absolute left-0 top-0`)} />
      <NavBar />
      <BlurFade delay={0.25} inView>
        <AboutMeV3 />
      </BlurFade>

      <BlurFade delay={0.25} inView>
        <Intro />
      </BlurFade>

      <BlurFade delay={0.25} inView>
        <SkillsV2 />
      </BlurFade>

      <BlurFade delay={0.25} inView>
        <Projects />
      </BlurFade>
      <BlurFade delay={0.25} inView>
        <FindMe />
      </BlurFade>
    </>
  )
}