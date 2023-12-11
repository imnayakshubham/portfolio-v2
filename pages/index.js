import Head from 'next/head'
import NavBar from '../components/NavBar'
import { Suspense, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
// import { Skills } from '../components/Skills/Skills';
import { FindMe } from '../components/FindMe/FindMe';
import { Projects } from '../components/Projects/Projects';
// import AboutMe from '../components/AboutMe/AboutMe';
import { AboutMeV2 } from '../components/AboutMe/AboutMeV2';
import CustomCursor from '../utils/CustomCursor';
import { Intro } from '../components/Intro/Intro';
import { SkillsV2 } from '../components/Skills/SkillsV2/SkillsV2';
import { useZoom } from '../utils/useZoom';
import { Loading } from '../components/loading';

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const { zoomLevel } = useZoom()

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(true);
    }, 2000);

    return () => timeout && clearTimeout(timeout)
  }, []);
  const currentTheme = theme === 'system' ? systemTheme : theme;


  if (!mounted) return <Loading />;
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Head>
          <title>Nayak Shubham</title>
          <meta name="description" content="A Front End Developer with a keen interest in developing highly interactive and intuitive user interfaces keeping in mind its performance, accessibility, responsiveness, reusability of components and overall stability." />
          <meta name="keywords" content="frontend developer, fullstack developer, engineer, developer, nayak shubham, portfolio website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/ns.png" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </Head>
        <section className={currentTheme === "dark" ? '' : "#faf9f7"}>
          <CustomCursor />
          <section>
            <NavBar />
            <AboutMeV2 />
          </section>
          <section>
            <Intro />
          </section>
          <section>
            <SkillsV2 />
          </section>
          <section className={currentTheme === "dark" ? '' : "#faf9f7"}>
            <Projects />
          </section>
          <section className='p-6'>
            <FindMe />
          </section>
        </section>
      </Suspense>
    </>
  )
}