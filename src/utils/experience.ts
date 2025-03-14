import { ExperienceProps } from "../components/Experience";

export const experienceData: ExperienceProps[] = [
  {
    href: "https://diracinc.com/",
    from: "2024",
    to: "2025",
    title: "Lead Software Engineer",
    company: "Dirac",
    desc: "Spearheaded a ground-up rewrite of Dirac's flagship React application, enhancing scalability with Vite, TypeScript, and Redux Toolkit. Designed a high-performance tree data structure central to tracking every piece of information against an uploaded CAD file, where parts are arranged hierarchically. Built a virtualized, highly responsive tree component library that enables seamless manipulation on both the React side (optimistically) and the Go server. Reduced load times by over 90%.\nPlayed a key role in designing data schemas, system architecture, and API contracts for file uploads, exports, path planning, sequencing, Redis caching, and DynamoDB storage. Standardized engineering best practices, mentored a growing team, and integrated gRPC for scalable API communication, contributing to the first platform to codify mechanical assembly.",
    stack: [
      "React",
      "Redux",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "gRPC",
      "Node",
    ],
    long: true,
  },
  {
    href: "https://www.flexe.com/",
    from: "2022",
    to: "2024",
    title: "Software Engineer",
    company: "Flexe",
    desc: "Within a rapidly growing engineering organization, designed new back end services, web and mobile client applications, and pixel-perfect UI implementation for the Flexe platform, which powers the world's largest on-demand warehousing network.",
    stack: ["Android", "Rails", "React", "Kotlin"],
    long: true,
  },
  {
    href: "https://www.boeing.com/",
    from: "2020",
    to: "2022",
    title: "Software Engineer",
    company: "Boeing",
    desc: "Developed a full-stack production tracking system for Boeing’s electronic products department, enabling real-time tracking of satellite components across the factory.",
    stack: ["Python", "Flask", "React", "JavaScript"],
    long: true,
  },
];
