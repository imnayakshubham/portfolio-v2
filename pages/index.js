import Head from 'next/head'
import NavBar from '../components/NavBar'
import { useTheme } from 'next-themes';
import { FindMe } from '../components/FindMe/FindMe';
import { Projects } from '../components/Projects/Projects';
import { AboutMeV3 } from '../components/AboutMe/AboutMeV3';
import { Intro } from '../components/Intro/Intro';
import { SkillsV2 } from '../components/Skills/SkillsV2/SkillsV2';
import { BlurFade } from '../components/ui/BlurAnimation/BlurFadeAnimation';

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;


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

      <section className={currentTheme === "dark" ? '' : "#faf9f7"}>
        <div class="pattern__container pointer-events-none absolute left-0 top-0" />
        <NavBar />
        <BlurFade delay={0.25 * 2} inView>
          <AboutMeV3 />
        </BlurFade>

        <BlurFade delay={0.25 * 3} inView>
          <Intro />
        </BlurFade>

        <BlurFade delay={0.25 * 4} inView>
          <SkillsV2 />
        </BlurFade>

        <section className={currentTheme === "dark" ? '' : "#faf9f7"}>
          <Projects />
        </section>
        <section className='p-6'>
          <FindMe />
        </section>
      </section>
    </>
  )
}