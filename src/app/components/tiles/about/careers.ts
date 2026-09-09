export type CareerProject = {
  name: string;
  image: string;
  link?: string;
};

export type CareerSkill = {
  name: string;
  icon: string;
};

export type CareerEntry = {
  id: string;
  role: string;
  company: string;
  period: string;
  badge: string;
  current: boolean;
  logo: string;
  overview: string;
  myRole: string;
  projects: CareerProject[];
  skills: CareerSkill[];
};

export const careersData: CareerEntry[] = [
  {
    id: "gfg",
    role: "Campus Mantri",
    company: "GeeksforGeeks (SPSU Udaipur)",
    period: "June 2026 - Present",
    badge: "Representative",
    current: true,
    logo: "/company/gfg.svg",
    overview:
      "Official campus ambassador bridging GeeksforGeeks and Sir Padampat Singhania University (SPSU), driving competitive programming, DSA workshops, and student tech resources.",
    myRole:
      "Organizing university-wide coding contests, tech webinars, and DSA cohorts to prepare peers for high-impact software engineering roles.",
    projects: [],
    skills: [
      { name: "Community Leadership", icon: "/tech/git.svg" },
      { name: "DSA Mentorship", icon: "/tech/cpp.svg" },
      { name: "Public Speaking", icon: "/tech/js.svg" },
      { name: "Event Management", icon: "/tech/react.svg" },
    ],
  },
  {
    id: "worthfinding",
    role: "Founder & Full Stack Lead",
    company: "Building Worthfinding",
    period: "2026 - Present",
    badge: "Founder",
    current: true,
    logo: "/company/worthfinding.svg",
    overview:
      "Digital flagships, sub-second web architecture, and organic search dominance for luxury hospitality, heritage palaces, and modern brands in Udaipur and across India.",
    myRole:
      "Architecting high-performance Next.js Server Components, custom JSON-LD schemas, and lead acquisition pipelines.",
    projects: [
      {
        name: "Worthfinding Studio Flagship",
        image: "/projects/worthfinding-real.png",
        link: "https://worthfinding.com",
      },
    ],
    skills: [
      { name: "Next.js", icon: "/tech/nextjs2.svg" },
      { name: "TypeScript", icon: "/tech/typescript.svg" },
      { name: "Tailwind", icon: "/tech/tailwindcss.svg" },
      { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
      { name: "Vercel", icon: "/tech/vercel.svg" },
    ],
  },
  {
    id: "gssoc",
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSSoC'26)",
    period: "May 2026 - Present",
    badge: "Contributor",
    current: true,
    logo: "/company/opensource.svg",
    overview:
      "Selected as open-source contributor for GirlScript Summer of Code 2026, contributing to production repositories, resolving issues, and reviewing pull requests.",
    myRole:
      "Collaborating with maintainers, shipping full-stack bug fixes, writing modular tests, and optimizing documentation across open-source ecosystems.",
    projects: [],
    skills: [
      { name: "Git & GitHub", icon: "/tech/git.svg" },
      { name: "TypeScript", icon: "/tech/typescript.svg" },
      { name: "Open Source", icon: "/tech/githubactions.svg" },
      { name: "Docker", icon: "/tech/docker.svg" },
    ],
  },
  {
    id: "dmv",
    role: "Full Stack Intern",
    company: "DMV CoreTech",
    period: "May 2026 - Present",
    badge: "Internship",
    current: true,
    logo: "/company/dmv.svg",
    overview:
      "Enterprise technology studio building scalable cloud applications, intelligent backend services, and interactive dashboards.",
    myRole:
      "Engineered full-stack features and REST APIs using the MERN stack, optimized database query execution, and handled production bug resolution.",
    projects: [],
    skills: [
      { name: "React", icon: "/tech/react.svg" },
      { name: "Node.js", icon: "/tech/nodejs.svg" },
      { name: "Express", icon: "/tech/express.svg" },
      { name: "MongoDB", icon: "/tech/mongodb.svg" },
      { name: "REST APIs", icon: "/tech/postman.svg" },
    ],
  },
];
