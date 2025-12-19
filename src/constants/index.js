import  HTML from "../assets/tech-stack/Html.png";
import React from "../assets/tech-stack/React.png";
import Cyber from "../assets/tech-stack/Cyber.png";
import aptech from "../assets/company/Aptech.png";
import digitalfortress from "../assets/company/Digital.png";
import zpoint from "../assets/company/zpoint.png";
import Webapp from "../assets/projects/Webapp1.png";
import Zpoint from "../assets/projects/Zpoint.png";
import Seven from "../assets/projects/Sevenai.png";
import {
  c,
   
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export var navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export var services = [
  { title:"HTML", icon: HTML },
  { title: "React", icon: React },
  { title: "Cyber", icon: Cyber },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "Cyber", icon: Cyber },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
   
];

export const experiences = [
  {
    title: "Software Engineering Student (ASDE)",
    company_name: "Aptech Computer Education",
    icon: aptech, // make sure to import this icon
    iconBg: "#161329",
    date: "2025 - Present",
    points: [
      "Currently pursuing an Advanced Diploma in Software Engineering (ASDE).",
      "Learning core programming concepts including JavaScript, C#, web development, and databases.",
      "Building real-world projects and strengthening problem-solving and software design skills.",
    ],
  },
  {
    title: "Cybersecurity Student",
    company_name: "Digital Fortress",
    icon: digitalfortress, // import icon
    iconBg: "#161329",
    date: "2025 - Present",
    points: [
      "Studying cybersecurity fundamentals including network security, ethical hacking, and system protection.",
      "Learning secure coding practices, vulnerability assessment, and basic penetration testing concepts.",
      "Developing awareness of cyber threats, attack vectors, and defensive strategies.",
    ],
  },
  {
    title: "Web Developer (Project-Based)",
    company_name: "Zpoint Sports",
    icon: zpoint, // import icon
    iconBg: "#161329",
    date: "2025",
    points: [
      "Designed and developed responsive websites for a sports company.",
      "Implemented modern UI designs using HTML, CSS, JavaScript, and React.",
      "Worked closely with client requirements to deliver functional and visually appealing web solutions.",
    ],
  },
];


export const projects = [
  {
    name: "One-Page E-Commerce Website",
    description:
     "This project is a modern one-page e-commerce website designed for selling furniture and clothing. It features a clean and user-friendly layout that allows customers to browse products, view details, and explore categories seamlessly without page reloads.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      {  color: "yellow-text-gradient" },
    ],
    image: Webapp,
    source_code_link: "https://t-code.netlify.app/",
  },
  {
    name: "Sports Journalism Website",
    description:
      "This website is a modern platform for sports journalism, delivering news, analysis, and updates on various sports. It features a clean, user-friendly layout with sections for articles, match reports, interviews, and highlights.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: Zpoint,
    source_code_link: "https://zpoint.netlify.app/pages/events",
  },
  {
    name: "SevenAI – Website Template",
    description:
      "SevenAI is a modern website template designed with a strong focus on clean aesthetics and exceptional user interface design. The template features a sleek layout, balanced typography, and well-structured sections that create a smooth and engaging user experience.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwind", color: "green-text-gradient" },
      { name: "Css", color: "pink-text-gradient" },
    ],
    image: Seven,
    source_code_link:
      "https://t-seven.netlify.app/",
  },
  // {
  //   name: "PayloadMaster",
  //   description:
  //     "Tool to automate payload creation using the Metasploit framework",
  //   tags: [
  //     { name: "shell", color: "blue-text-gradient" },
  //   ],
  //   image: payloadmaster,
  //   source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  // },
  // {
  //   name: "CompileVortex",
  //   description:
  //     "Tool to automate payload creation using the Metasploit framework",
  //   tags: [
  //     { name: "Javascript", color: "blue-text-gradient" },
  //     { name: "CSS", color: "green-text-gradient" },
  //     { name: "HTML", color: "pink-text-gradient" },
  //   ],
  //   image: CompileVortex,
  //   source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  // },
  // {
  //   name: "Sketcher",
  //   description:
  //     "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
  //   tags: [
  //     { name: "OpenCV", color: "blue-text-gradient" },
  //     { name: "Matplotlib", color: "green-text-gradient" },
  //     { name: "Python", color: "pink-text-gradient" },
  //   ],

  //   image: sketcher,
  //   source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  // },
];
