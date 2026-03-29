// ================== RESPONSIVE SKILLS LOGOS ==================
// Mobile-optimized smaller logos (if separate assets exist; otherwise use same with size hint)
// For now, using same logos but with responsive config in data
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
import kafkaLogo from "../assets/kafka.png";
import supabaseLogo from "./assets/tech_logo/supabase.png";
import Manualtasting from "./assets/tech_logo/Manualtasting.png";
import STLC from "./assets/tech_logo/STLC.png";
import TestCase from "./assets/tech_logo/TestCase.png";
import Bugreport from "./assets/tech_logo/Bugreport.png";
import CIMS from "./assets/tech_logo/CIMS.png";

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
import removebgLogo from "./assets/work_logo/remove_bg.png";

// ================== RESPONSIVE UTILITY ==================
// Hook-friendly responsive config
export const responsiveConfig = {
  breakpoints: {
    mobile: 'sm',
    tablet: 'md',
    desktop: 'lg'
  },
  logoSizes: {
    mobile: 'w-6 h-6',
    tablet: 'w-8 h-8',
    desktop: 'w-10 h-10'
  },
  textSizes: {
    mobile: 'text-xs',
    tablet: 'text-sm',
    desktop: 'text-base'
  }
};

// ================== RESPONSIVE SKILLS ==================
// Responsive variants: shortened names for mobile, grouped for better mobile layout
export const responsiveSkillsInfo = [
  {
    title: "Frontend",
    skills: {
      mobile: [ // Fewer/prioritized for mobile grid
        { name: "HTML", logo: htmlLogo },
        { name: "CSS", logo: cssLogo },
        { name: "JS", logo: javascriptLogo },
        { name: "React", logo: reactjsLogo },
        { name: "Redux", logo: reduxLogo }
      ],
      tablet: [
        { name: "HTML", logo: htmlLogo },
        { name: "CSS", logo: cssLogo },
        { name: "SASS", logo: sassLogo },
        { name: "JavaScript", logo: javascriptLogo },
        { name: "React JS", logo: reactjsLogo },
        { name: "Redux", logo: reduxLogo },
        { name: "Next JS", logo: nextjsLogo }
      ],
      desktop: [ // Full list
        { name: "HTML", logo: htmlLogo },
        { name: "CSS", logo: cssLogo },
        { name: "SASS", logo: sassLogo },
        { name: "JavaScript", logo: javascriptLogo },
        { name: "React JS", logo: reactjsLogo },
        { name: "Redux", logo: reduxLogo },
        { name: "Next JS", logo: nextjsLogo },
        { name: "Tailwind CSS", logo: tailwindcssLogo },
        { name: "GSAP", logo: gsapLogo },
      ]
    }
  },
  {
    title: "Backend",
    skills: {
      mobile: [
        { name: "Node", logo: nodejsLogo },
        { name: "Express", logo: expressjsLogo }
      ],
      tablet: [
        { name: "Node JS", logo: nodejsLogo },
        { name: "Express JS", logo: expressjsLogo },
        { name: "Kafka", logo: kafkaLogo }
      ],
      desktop: [
        { name: "Node JS", logo: nodejsLogo },
        { name: "Express JS", logo: expressjsLogo },
        { name: "APACHE KAFKA", logo: kafkaLogo }
      ]
    }
  },
  // Add similar for other categories (DataBase, Languages, Tools, Testing) ...
  {
    title: "Database",
    skills: {
      mobile: [
        { name: "MySQL", logo: mysqlLogo },
        { name: "MongoDB", logo: mongodbLogo }
      ],
      tablet: [
        { name: "MySQL", logo: mysqlLogo },
        { name: "MongoDB", logo: mongodbLogo },
        { name: "Firebase", logo: firebaseLogo },
        { name: "Supabase", logo: supabaseLogo }
      ],
      desktop: [
        { name: "MySQL", logo: mysqlLogo },
        { name: "MongoDB", logo: mongodbLogo },
        { name: "Firebase", logo: firebaseLogo },
        { name: "Supabase", logo: supabaseLogo },
        { name: "PostgreSQL", logo: postgreLogo }
      ]
    }
  },
  {
    title: "Languages",
    skills: {
      mobile: [{ name: "C++", logo: cppLogo }],
      tablet: [{ name: "C++", logo: cppLogo }, { name: "TS", logo: typescriptLogo }],
      desktop: [
        { name: "C++", logo: cppLogo },
        { name: "TypeScript", logo: typescriptLogo }
      ]
    }
  },
  {
    title: "Tools",
    skills: {
      mobile: [{ name: "Git", logo: gitLogo }, { name: "VS Code", logo: vscodeLogo }],
      tablet: [
        { name: "Git", logo: gitLogo },
        { name: "GitHub", logo: githubLogo },
        { name: "VS Code", logo: vscodeLogo },
        { name: "Postman", logo: postmanLogo }
      ],
      desktop: [
        { name: "Git", logo: gitLogo },
        { name: "GitHub", logo: githubLogo },
        { name: "VS Code", logo: vscodeLogo },
        { name: "Postman", logo: postmanLogo },
        { name: "MongoDB Compass", logo: mcLogo },
        { name: "Vercel", logo: vercelLogo },
        { name: "Netlify", logo: netlifyLogo }
      ]
    }
  },
  {
    title: "Testing",
    skills: {
      mobile: [{ name: "Manual", logo: Manualtasting }],
      tablet: [
        { name: "Manual Testing", logo: Manualtasting },
        { name: "STLC", logo: STLC },
        { name: "Test Cases", logo: TestCase }
      ],
      desktop: [
        { name: "Manual Testing", logo: Manualtasting },
        { name: "STLC", logo: STLC },
        { name: "Test Cases", logo: TestCase },
        { name: "Bug Reporting", logo: Bugreport },
        { name: "CIMS Basics", logo: CIMS }
      ]
    }
  }
];

// Helper to get skills based on breakpoint (use in components with useBreakpoint hook)
export const getResponsiveSkills = (categoryTitle, breakpoint = 'desktop') => {
  const category = responsiveSkillsInfo.find(cat => cat.title === categoryTitle);
  return category ? category.skills[breakpoint] || category.skills.desktop : [];
};

// ================== RESPONSIVE EDUCATION ==================
export const responsiveEducation = education.map(edu => ({
  ...edu,
  shortDesc: edu.desc.length > 100 ? edu.desc.substring(0, 100) + '...' : edu.desc, // Mobile short
  fullDesc: edu.desc
}));

// ================== RESPONSIVE EXPERIENCES ==================
export const responsiveExperiences = experiences.map(exp => ({
  ...exp,
  shortDesc: exp.desc.length > 120 ? exp.desc.substring(0, 120) + '...' : exp.desc,
  shortSkills: exp.skills.slice(0, 4), // Mobile: top 4 skills
  fullSkills: exp.skills
}));

// ================== RESPONSIVE PROJECTS ==================
export const responsiveProjects = projects.map(proj => ({
  ...proj,
  shortTitle: proj.title.length > 20 ? proj.title.substring(0, 20) + '...' : proj.title,
  shortDescription: proj.description.length > 80 ? proj.description.substring(0, 80) + '...' : proj.description
}));

// Backward compatibility - original exports
export const SkillsInfo = responsiveSkillsInfo.map(cat => ({
  title: cat.title,
  skills: cat.skills.desktop // Default to desktop for existing components
}));
export const education = responsiveEducation;
export const experiences = responsiveExperiences;
export const projects = responsiveProjects;

// Usage in components:
// const skills = getResponsiveSkills('Frontend', currentBreakpoint);
// <img className={responsiveConfig.logoSizes[currentBreakpoint]} src={skill.logo} />

