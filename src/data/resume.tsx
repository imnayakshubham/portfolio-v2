import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoPython } from 'react-icons/io';
import { SiJavascript, SiNextdotjs, SiExpress, SiMongodb, SiFastapi } from 'react-icons/si'
import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

export const DATA = {
  name: "Nayak Shubham",
  initials: "NS",
  url: "https://imnayakshubham.vercel.app/",
  location: "India",
  description: "Actual Indian (AI)-powered engineer building real products that matter.",
  summary:
    `
I'm a software engineer from India with 4+ years of experience creating frontend interfaces that solve real user problems. I focus on usability, performance, and clean design. I enjoy turning ideas into products that people love.

While most of my work centers on frontend engineering-building reusable components, optimizing performance, and ensuring accessibility across web and mobile,
I lead with trust and clarity-collaborating closely, staying grounded, and owning what I build.

I enjoy working through product challenges to design simple, engaging user journeys. It's humbling to see how small improvements can make a big difference.

Outside of coding, I write technical blogs and foster thoughtful conversations-because sharing knowledge is how I grow and help others grow.
`,
  skills: [
    {
      id: 1,
      icon: <AiFillHtml5 className="size-5" />,
      title: "HTML",
      className: "hover:ring-2",
    },
    {
      id: 2,
      icon: <IoLogoCss3 className="size-5" />,
      title: "CSS",
      className: "hover:ring-2",
    },
    {
      id: 3,
      icon: <SiJavascript className="size-5" />,
      title: "JavaScript",
      className: "hover:ring-2",
    },
    {
      id: 4,
      icon: <FaReact className="size-5" />,
      title: "React",
      className: "hover:ring-2",
    },
    {
      id: 5,
      icon: <SiNextdotjs className="size-5" />,
      title: "Next JS",
      className: "hover:ring-2",
    },
    {
      id: 8,
      icon: <BsGithub className="size-5" />,
      title: "Git",
      className: "hover:ring-2",
    },
    {
      id: 6,
      icon: <FaNodeJs className="size-5" />,
      title: "NodeJs",
      className: "hover:ring-2",
    },
    {
      id: 10,
      icon: <SiExpress className="size-5" />,
      title: "Express",
      className: "shadow hover:ring-2",
    },
    {
      id: 11,
      icon: <SiMongodb className="size-5" />,
      title: "MongoDB",
      className: "hover:ring-2",
    },
    {
      id: 12,
      icon: <IoLogoPython className="size-5" />,
      title: "Python",
      className: "hover:ring-2",
    },
    {
      id: 13,
      icon: <SiFastapi className="size-5" />,
      title: "Fast API",
      className: "hover:ring-2",
    },
    {
      id: 14,
      icon: <FaDocker className="size-5" />,
      title: "Docker",
      className: "hover:ring-2",
    }
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      Hashnode: {
        name: "Blogs",
        url: "https://imnayakshubham.hashnode.dev",
        icon: Icons.hashnode,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/imnayakshubham",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/imnayakshubham",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/imnayakshubham",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Polymerize",
      href: "https://polymerize.io/",
      badges: [],
      location: "Remote",
      title: "SDE-3",
      logoUrl: null,
      start: "Sept 2021",
      end: "Present",
      description:
        `
Worked on core product(s) and product features like role-based access, billing, and user management. Improved performance and user experience by reducing dashboard load times, fixing critical bugs, and refactoring legacy code to make it cleaner and more reliable.
      
Set up end-to-end testing with Cucumber and Cypress, which boosted code coverage by 68% and helped ship more stable releases. Collaborated with cross-functional teams to deliver complex features and turned POCs into fully adopted products.

**Tech Stack:** React + TypeScript, Redux Saga, Ant Design, FastAPI, MongoDB.

`,
    }
  ],
  education: [
    {
      school: "Gandhinagar Institute of Technology (GIT)",
      href: "https://gandhinagaruni.ac.in/institute-git-home/",
      degree: "B.E Computer Engineering",
      start: "2017",
      end: "2021",
      logoUrl: null
    }
  ],
  projects: [
    {
      image: "https://media.istockphoto.com/id/1054899222/photo/anonymous-woman-covering-face-with-paper.webp?b=1&s=170667a&w=0&k=20&c=aoW05MhxXmLkBBUCGFGnGwOXk_z9PHsLHcxLg3V1cvc=&auto=format&fit=crop&w=500&q=60",
      title: "Hushork - Confidential Employee Communication Platform",
      description: "The platform empowers users to connect, post job opportunities, and engage in one-on-one conversations, all while prioritizing user anonymity.",
      tags: ["React.js", "Tailwind CSS", "Redux Saga", "Node.js", "Express.js", "MongoDB Atlas", "Websocket", "Firebase"],
      frontend_code: "https://github.com/imnayakshubham/CorpConvFrontend",
      backend_code: "https://github.com/imnayakshubham/CorpConvBackend",
      video: null,
      href: "https://hushwork.vercel.app/",
      links: [
        {
          title: "Preview",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://hushwork.vercel.app/",
        },
        {
          title: "Frontend Code",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/imnayakshubham/CorpConvBackend",
        },
        {
          title: "Backend Code",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/imnayakshubham/CorpConvFrontend",
        },
      ],
      dates: null
    },
    {
      image: "/projects/build-app-with.png",
      title: "Build-App-With: Production-Grade Project Scaffolder",
      description: "Architected an intelligent CLI tool to automate the initialization of modern web applications. Streamlines developer workflows by configuring frameworks, testing suites, and deployment scripts, significantly reducing time-to-market for new products.",
      tags: ["Node.js", "JavaScript", "Fastify", "Jest", "Webpack", "CLI", "Automation"],
      video: null,
      href: "https://www.npmjs.com/package/build-app-with",
      links: [
        {
          title: "NPM",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.npmjs.com/package/build-app-with",
        },
        {
          title: "Source Code",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/imnayakshubham/build-app-with",
        },
      ],
      dates: null
    },
    {
      image: "/projects/accesibilify.png",
      title: "Accesibilify: Inclusive Web Experience Enhancer",
      description: "Developed a comprehensive Chrome Extension dedicated to digital accessibility. Empowers users with customizable reading modes, high-contrast themes, and ADHD-friendly interfaces, ensuring web content is universally perusable and inclusive.",
      tags: ["TypeScript", "React", "Vite", "Tailwind CSS", "Chrome Extension", "A11y"],
      video: null,
      href: "https://accesibilify.vercel.app",
      links: [
        {
          title: "Live",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://accesibilify.vercel.app",
        },
        {
          title: "Source Code",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/imnayakshubham/Accesibilify",
        },
      ],
      dates: null
    },
    {
      image: "/projects/job-scraper.png",
      title: "Intelligent Job Intelligence & Parsing Engine",
      description: "Engineered a robust web scraping and data extraction pipeline that transforms unstructured job postings into high-fidelity, structured JSON. Utilizes sophisticated parsing logic to enable seamless data integration for career-tech platforms.",
      tags: ["Python", "FastAPI", "BeautifulSoup4", "Requests", "Data Extraction", "JSON"],
      video: null,
      href: "https://github.com/imnayakshubham/job-post-info-scraper",
      links: [
        {
          title: "Source Code",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/imnayakshubham/job-post-info-scraper",
        },
      ],
      dates: null
    },
    {
      image: "/projects/resume-match.png",
      title: "AI-Powered Resume Optimization & Matching System",
      description: "Built a cutting-edge RAG-based application that leverages Llama LLMs to analyze job descriptions and optimize resumes for maximum alignment. Integrates Selenium for real-time data retrieval and ChromaDB for high-dimensional vector search.",
      tags: ["Python", "LangChain", "LLMs", "Groq", "Selenium", "Streamlit", "ChromaDB"],
      video: null,
      href: "https://github.com/imnayakshubham/Resume-Match-using-Selenium-and-llama",
      links: [
        {
          title: "Source Code",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/imnayakshubham/Resume-Match-using-Selenium-and-llama",
        },
      ],
      dates: null
    },
    {
      image: "/projects/quiz-app.png",
      title: "Timebound: Real-Time Interactive Assessment Platform",
      description: "Designed and implemented a high-performance web application for conducting synchronized, time-constrained assessments. Focused on low-latency state management and responsive UI/UX to ensure a seamless competitive user experience.",
      tags: ["React", "JavaScript", "CSS3", "HTML5", "State Management", "Responsive Design"],
      video: null,
      href: "https://github.com/imnayakshubham/Timebound-Quiz-App",
      links: [
        {
          title: "Live",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://timebound-quiz-app.vercel.app",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/imnayakshubham/Timebound-Quiz-App",
        },
      ],
      dates: null
    },
  ],
} as const;
