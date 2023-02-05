import Head from 'next/head'
import NavBar from '../components/NavBar'
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Skills } from '../components/Skills/Skills';
import { FindMe } from '../components/FindMe/FindMe';
import { Projects } from '../components/Projects/Projects';
import AboutMe from '../components/AboutMe/AboutMe';

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
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
      <section className={currentTheme === "dark" ? 'background-svg' : "bg-slate-50"}>
        <NavBar />
        <AboutMe />
      </section>
      <section>
        <Skills />
      </section>
      <section className={currentTheme === "dark" ? '' : "bg-slate-50"}>
        <Projects />
      </section>
      <section className='p-6'>
        <FindMe />
      </section>
    </>
  )
}