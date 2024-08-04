
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoReact, IoLogoCss3, IoLogoPython } from 'react-icons/io';
import { SiJavascript, SiNextdotjs, SiExpress, SiMongodb, SiFastapi } from 'react-icons/si';

import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

export const Data = () => {
  const techStack = [
    {
      id: 1,
      src: <AiFillHtml5 />,
      title: "HTML",
      style: "hover:ring-2",
    },
    {
      id: 2,
      src: <IoLogoCss3 />,
      title: "CSS",
      style: "hover:ring-2",
    },
    {
      id: 3,
      src: <SiJavascript />,
      title: "JavaScript",
      style: "hover:ring-2",
    },
    {
      id: 4,
      src: <FaReact />,
      title: "React",
      style: "hover:ring-2",
    },
    {
      id: 5,
      src: <SiNextdotjs />,
      title: "Next JS",
      style: "hover:ring-2",
    },
    {
      id: 8,
      src: <BsGithub />,
      title: "Git",
      style: "hover:ring-2",
    },
    {
      id: 6,
      src: <FaNodeJs />,
      title: "NodeJs",
      style: "hover:ring-2",
    },
    {
      id: 10,
      src: <SiExpress />,
      title: "Express",
      style: "shadow hover:ring-2",
    },
    {
      id: 11,
      src: <SiMongodb />,
      title: "MongoDB",
      style: "hover:ring-2",
    },
    {
      id: 12,
      src: <IoLogoPython />,
      title: "Python",
      style: "hover:ring-2",
    },
    {
      id: 13,
      src: <SiFastapi />,
      title: "Fast API",
      style: "hover:ring-2",
    },
    {
      id: 14,
      src: <FaDocker />,
      title: "Docker",
      style: "hover:ring-2",
    }
  ];

  const projectList = [
    {
      url: "https://media.istockphoto.com/id/1054899222/photo/anonymous-woman-covering-face-with-paper.webp?b=1&s=170667a&w=0&k=20&c=aoW05MhxXmLkBBUCGFGnGwOXk_z9PHsLHcxLg3V1cvc=&auto=format&fit=crop&w=500&q=60",
      name: "CorpConv - Confidential Employee Communication Platform",
      desc: "The platform empowers users to connect, post job opportunities, and engage in one-on-one conversations, all while prioritizing user anonymity.",
      tech_stack_used: ["React.js", "Tailwind CSS", "Redux Saga", "Node.js", "Express.js", "MongoDB Atlas", "Websocket", "Firebase"],
      code_link: null,
      frontend_code: "https://github.com/imnayakshubham/CorpConvFrontend",
      backend_code: "https://github.com/imnayakshubham/CorpConvBackend",
      demo_link: "https://corp-conv-frontend.vercel.app/",
    },
    {
      url: "https://plus.unsplash.com/premium_vector-1682311022739-114ad8dcab6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwc3VydmV5fGVufDB8fDB8fHww",
      name: "Survey Form Builder",
      desc: "The Survey Form Builder is a user-friendly tool designed to create and manage surveys effortlessly using Ant Design components. This project aims to streamline the process of survey creation by providing an intuitive interface and robust features.",
      tech_stack_used: ["React", "Ant Design(UI library)"],
      code_link: "https://github.com/imnayakshubham/Survey-form-builder",
      demo_link: "https://survey-form-builder-teal.vercel.app/",
      backend_code: "https://github.com/imnayakshubham/blog-app-backend",
      frontend_link: "https://github.com/imnayakshubham/Survey-form-builder",
    },
    {
      url: "https://images.unsplash.com/photo-1604933762023-7213af7ff7a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Blog App",
      desc: "Blog App is a web-app to post, update, delete and like blogs.",
      tech_stack_used: ["React", "Ant Design(UI library)", "Redux Saga", "Nodejs", "Expressjs", "MongoDB"],
      code_link: null,
      frontend_code: "https://github.com/imnayakshubham/blog-app-frontend",
      backend_code: "https://github.com/imnayakshubham/blog-app-backend",
      demo_link: "https://blog-app-frontend-one.vercel.app/",
    },
    {
      url: "https://images.unsplash.com/photo-1600783245891-f275a1575d93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bm90ZXMlMjBhcHB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "Notes App",
      tech_stack_used: ["React", "Ant Design(UI library)", "Redux", "Nodejs", "Expressjs", "MongoDB"],
      desc: "Notes App is MERN Stack web app that allow user to Create a note Delete a note and Edit a note.",
      frontend_code: "",
      backend_code: "",
      code_link: "https://github.com/imnayakshubham/mern-mynotesapp",
      demo_link: null,
    },
    {
      url: "https://bit.ly/3MihNOy",
      name: "Invoice Creator",
      tech_stack_used: ["React", "HTML", "CSS", "Redux", "Firebase"],
      desc: "An invoice creator is a web-app that helps users to generate, manage, and download the invoices.",
      code_link: "https://github.com/imnayakshubham/Invoice-Creator",
      frontend_code: "",
      backend_code: "",
      demo_link: "https://invoicecreator.netlify.app/",
    },
  ];

  return { techStack, projectList }
}
