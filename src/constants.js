// ================== SKILLS LOGOS ==================
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

// ================== EDUCATION LOGOS ==================
import acropolisLogo from "./assets/education_logo/Acropilis.png";
import svpcLogo from "./assets/education_logo/SVPC.PNG";
import mpbseLogo from "./assets/education_logo/MPBSE.png";

// ================== COMPANY LOGOS ==================
import webverseLogo from "./assets/company_logo/webverse_logo.png";

// ================== PROJECT LOGOS ==================
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import portfolioLogo from "./assets/work_logo/portfolio.png";
import removebgLogo from "./assets/work_logo/remove_bg.png"; // ✅ FIXED

// ================== SKILLS ==================
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C++", logo: cppLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "MongoDB Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

// ================== EDUCATION ==================
export const education = [
  {
    id: 0,
    img: acropolisLogo,
    school: "Acropolis Institute of Technology and Research, Indore",
    date: "Aug 2024 - May 2027",
    grade: "6.00 CGPA",
    degree:
      "Bachelor of Technology - B.Tech (Computer Science and Engineering - Regional Language)",
    desc:
      "Currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering (Regional Language) at Acropolis Institute of Technology and Research, Indore (Aug 2024 – May 2027, 6.00 CGPA), with a focus on software development, data structures, algorithms, and modern web technologies. Actively building full-stack projects and strengthening problem-solving skills through coding challenges.",
  },
  {
    id: 1,
    img: svpcLogo,
    school: "Shri Vaishnav Polytechnic College, Indore",
    date: "Sept 2020 - December 2023",
    grade: "7.54 CGPA",
    degree: "Diploma - Polytechnic (Computer Science)",
    desc:
      "Completed Polytechnic (Diploma) in Computer Science with strong fundamentals in programming, databases, and web development. Worked on academic projects applying theoretical knowledge.",
  },
  {
    id: 2,
    img: mpbseLogo,
    school: "Presidensi Public School, Indore",
    date: "Apr 2019 - Mar 2020",
    grade: "60.5%",
    degree: "MP Board (Class X)",
    desc:
      "Completed Class X from Presidensi Public School, Indore (MP Board, Apr 2019 – Mar 2020) with 60.5%.",
  },
];

// ================== EXPERIENCES ==================
export const experiences = [
  {
    id: 2,
    img: webverseLogo,
    role: "Freelance Web Developer",
    company: "Fiverr, Upwork",
    date: "Jan 2022 – Present",
    desc: "Developed and delivered full stack web applications for global clients using modern technologies. Worked on frontend, backend, database integration, authentication, and deployment with a strong focus on performance and scalability.",
    skills: ["HTML", "CSS", "JavaScript", "React","Node.js", "Express", "MongoDB","MySQL","Firebase"],
  },
];

// ================== PROJECTS ==================
export const projects = [
  {
    id: 0,
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built with React.js showcasing projects, skills, and education with smooth UI and animations.",
    image: portfolioLogo,
    tags: ["React JS", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Piyush200516/piyush-Portfolio-website",
    webapp: "https://piyush-portfolio-website-dx18.vercel.app/",
  },
  {
    id: 1,
    title: "CS Prep",
    description:
      "A quiz-based platform for students to practice and track performance with analytics.",
    image: csprepLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express"],
    github: ".",
    webapp: ".",
  },
  {
    id: 2,
    title: "Movie Recommendation App",
    description:
      "A React app that recommends movies using API-based filtering.",
    image: movierecLogo,
    tags: ["React JS", "API"],
    github: ".",
    webapp: ".",
  },
  {
    id: 3,
    title: "Image Background Remover",
    description:
      "Remove image backgrounds instantly using API integration.",
    image: removebgLogo,
    tags: ["React JS", "API"],
    github: ".",
    webapp: ".",
  },
];
