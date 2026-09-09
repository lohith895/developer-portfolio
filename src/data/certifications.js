import { FaReact, FaPython, FaDatabase, FaCode, FaBrain, FaCloud } from 'react-icons/fa';
import { SiUdemy, SiHackerrank } from 'react-icons/si';

export const CERTIFICATIONS_DATA = [
  {
    id: "cert-1",
    title: "Python Programming and Data Structures",
    issuer: "CodeTantra",
    date: "2024",
    credentialId: "CODETANTRA-PY-DS",
    credentialUrl: "https://codetantra.com",
    icon: FaPython,
    color: "#3776AB",
    skills: ["Python", "Data Structures", "Algorithms", "Problem Solving"]
  },
  {
    id: "cert-2",
    title: "Frontend Development",
    issuer: "CodeTantra",
    date: "2024",
    credentialId: "CODETANTRA-FE-DEV",
    credentialUrl: "https://codetantra.com",
    icon: FaReact,
    color: "#61DAFB",
    skills: ["HTML5", "CSS3", "JavaScript", "Frontend Development", "UI/UX"]
  },
  {
    id: "cert-3",
    title: "Artificial Intelligence",
    issuer: "Great Learning",
    date: "2024",
    credentialId: "GREATLEARNING-AI-2024",
    credentialUrl: "https://mygreatlearning.com",
    icon: FaBrain,
    color: "#8B5CF6",
    skills: ["Artificial Intelligence", "Machine Learning", "Neural Networks", "AI Models"]
  },
  {
    id: "cert-4",
    title: "AWS Simulation",
    issuer: "Forage",
    date: "2024",
    credentialId: "FORAGE-AWS-SIM",
    credentialUrl: "https://theforage.com",
    icon: FaCloud,
    color: "#FF9900",
    skills: ["AWS Services", "Cloud Computing", "Infrastructure", "Cloud Architecture"]
  },
  {
    id: "cert-5",
    title: "Database Management Systems",
    issuer: "Udemy and Great Learning",
    date: "2024",
    credentialId: "DBMS-GL-UDEMY",
    credentialUrl: "https://udemy.com",
    icon: FaDatabase,
    color: "#4169E1",
    skills: ["DBMS", "SQL", "Database Design", "Relational Databases", "Indexing"]
  },
  {
    id: "cert-6",
    title: "AI, NLP, ML, DevOps Essentials",
    issuer: "Infosys Springboard",
    date: "2024",
    credentialId: "INFOSYS-AI-NLP-ML-DEVOPS",
    credentialUrl: "https://springboard.infosys.com",
    icon: FaCode,
    color: "#007CC3",
    skills: ["AI", "NLP", "Machine Learning", "DevOps Essentials", "CI/CD Pipelines"]
  },
  {
    id: "cert-7",
    title: "Full Stack Web Development – MEAN, MERN, MongoDB",
    issuer: "Udemy",
    date: "2024",
    credentialId: "UDEMY-FS-98421",
    credentialUrl: "https://udemy.com",
    icon: SiUdemy,
    color: "#A435F0",
    skills: ["MEAN Stack", "MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js"]
  },
  {
    id: "cert-8",
    title: "Backend Development with Node.js",
    issuer: "HackerRank",
    date: "2024",
    credentialId: "HR-NODE-77319",
    credentialUrl: "https://hackerrank.com",
    icon: SiHackerrank,
    color: "#2EC866",
    skills: ["Node.js", "RESTful APIs", "Express.js", "Backend Architecture"]
  }
];

export const certifications = CERTIFICATIONS_DATA;
export default CERTIFICATIONS_DATA;
