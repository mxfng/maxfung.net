import { ExperienceProps } from "../components/Experience";

export const experienceData: ExperienceProps[] = [
  {
    href: "https://diracinc.com/",
    from: "2024",
    to: "2025",
    title: "Lead Software Engineer",
    company: "Dirac",
    desc: "Spearheaded the overhaul of Dirac’s flagship React app, improving scalability with TypeScript, Redux, and TailwindCSS. Developed a high-performance data structure and tree component, reducing load times by 90%, while standardizing best practices and mentoring the engineering team. Integrated gRPC for scalable API communication and collaborated on microservices development for the first platform to codify mechanical assembly.",
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
