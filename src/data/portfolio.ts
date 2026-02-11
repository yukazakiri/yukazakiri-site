
// Personal Portfolio Data
// This file contains all the static data for the portfolio website.

export const personalDetails = {
  name: "Yukazaki",
  role: "Web Application Developer",
  company: "Koamishin.org",
  summary: "Focused Web Application Developer specializing in Laravel ecosystems, building robust and scalable backends at Koamishin.org. My background as an IT Administrator in data centers provides me with a unique technical edge in server optimization, network infrastructure, and system security, ensuring that every application is high-performing and mission-critical ready.",
  socials: {
    github: "https://github.com/yukazakiri",
    linkedin: "https://linkedin.com/in/yukazaki",
    twitter: "https://twitter.com/yukazaki",
  },
  email: "yukazaki@koamishin.org",
};

export const skills = {
  technical: [
    "PHP / Laravel Framework",
    "MySQL / Eloquent ORM",
    "RESTful API Development",
    "Vue.js / Alpine.js",
    "Tailwind CSS",
    "Redis / Caching Strategies",
    "Git / GitHub Actions",
    "System Security & Hardening",
    "Network Infrastructure Management",
    "Data Center Operations",
  ],
  soft: [
    "Analytical Problem Solving",
    "Technical Documentation",
    "Strategic Planning",
    "Agile Methodologies",
    "Stakeholder Communication",
  ],
};

export const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Data Center College of the Philippines",
    score: "N/A",
    duration: "20XX – 20XX",
  },
];

export const projects = [
  {
    title: "KoaScholarships",
    description: "A specialized scholarship management platform built with Laravel, designed to streamline applications and administrative workflows.",
    tech: ["Laravel", "MySQL", "Tailwind"],
    link: "https://github.com/koamishin/KoaScholarships",
  },
  {
    title: "Coamifee Shop",
    description: "An e-commerce solution tailored for boutique digital and physical products, featuring high-performance checkout and inventory management.",
    tech: ["Laravel", "Vue.js", "Tailwind"],
    link: "https://github.com/koamishin/coamifee-shop",
  },
  {
    title: "KoamiStarterKit",
    description: "A production-ready Laravel starter kit optimized for rapid deployment with built-in security, authentication, and UI patterns.",
    tech: ["Laravel", "PHP", "Alpine.js"],
    link: "https://github.com/koamishin/KoamiStarterKit",
  },
  {
    title: "Shadcthemes Tools",
    description: "A collection of utility tools and custom themes for enhancing the Shadcn/UI ecosystem within modern web applications.",
    tech: ["TypeScript", "React", "Tailwind"],
    link: "https://github.com/yukazakiri/shadcthemes-tools",
  },
];

export const experience = [
  {
    role: "Founder & Lead Developer",
    company: "Koamishin.org",
    duration: "2024 - PRESENT",
    responsibilities: [
      "Architecting the core identity and digital infrastructure for the Koamishin branding initiative.",
      "Developing a suite of specialized web applications focused on performance, security, and Laravel excellence.",
      "Providing high-level technical consultancy for modern web ecosystem deployments and system hardening.",
      "Engineering custom UI/UX frameworks that bridge the gap between technical complexity and aesthetic minimalism."
    ],
  },
  {
    role: "Web Application Developer & IT Administrator",
    company: "Data Center College Of The Philippines",
    duration: "2024 - PRESENT",
    responsibilities: [
      "Leading the modernization of institutional web systems through the implementation of advanced Laravel architectures.",
      "Orchestrating mission-critical data center operations, ensuring 99.9% uptime for campus-wide network infrastructure.",
      "Developing and maintaining secure student information systems, integrating complex database schemas with real-time analytics.",
      "Automating server-side deployment pipelines and implementing systematic network security audits to protect sensitive academic data.",
      "Bridging the gap between software development and infrastructure management to streamline operational workflows."
    ],
  },
];

export const certifications = [
  {
    name: "Laravel Certified Developer",
    link: "#",
  },
  {
    name: "Network Security Professional",
    link: "#",
  },
];
