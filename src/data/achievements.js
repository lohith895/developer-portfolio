import { FaRobot, FaHospital, FaLaptopCode, FaBrain, FaUsers } from 'react-icons/fa';

export const ACHIEVEMENTS_DATA = [
  {
    id: "ach-1",
    title: "President, AIIM Club",
    description: "Led club initiatives, events, workshops, and student member engagement across campus.",
    icon: FaUsers,
    color: "text-amber-400",
    category: "Leadership & Club",
    period: "Oct 2024 – Jan 2026"
  },
  {
    id: "ach-2",
    title: "Design and Implementation of a Scalable Real-Time Attendance Management System Using Deep Learning-Based Face Recognition",
    description: "Developed AI-powered attendance system using YOLOv8 face detection, InsightFace verification, and OpenCV.",
    icon: FaRobot,
    color: "text-blue-400",
    category: "AI & Computer Vision",
    period: "2025"
  },
  {
    id: "ach-3",
    title: "Hospital Management System Architecture",
    description: "Architected Spring Boot REST microservices backend with RBAC security, PostgreSQL indexing, and AI virtual assistant.",
    icon: FaHospital,
    color: "text-purple-400",
    category: "Java Enterprise SaaS",
    period: "2024 – 2025"
  },
  {
    id: "ach-4",
    title: "Trainee Software Employee at B2B Infotech",
    description: "Built & maintained scalable MERN stack web applications and cross-platform Flutter mobile applications for Android & iOS.",
    icon: FaLaptopCode,
    color: "text-emerald-400",
    category: "Full-Stack & Mobile",
    period: "2024 – Present"
  },
  {
    id: "ach-5",
    title: "AI/ML & Generative AI Internships",
    description: "Built predictive analytics models (XGBoost, Keras DNN) at Blackbucks and GenAI/NLP chatbot at Aimers Society.",
    icon: FaBrain,
    color: "text-rose-400",
    category: "Machine Learning & GenAI",
    period: "2024"
  }
];

export const achievements = ACHIEVEMENTS_DATA;
export default ACHIEVEMENTS_DATA;
