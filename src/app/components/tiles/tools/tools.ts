export type ToolCategory = "Languages" | "Frontend" | "Backend & Databases" | "Cloud, DevOps & Tooling";

export type ToolItem = {
  name: string;
  category: ToolCategory;
  description: string;
  link: string;
  image: string;
};

export const toolsData: ToolItem[] = [
  // Languages
  {
    name: "TypeScript",
    category: "Languages",
    description: "Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    link: "https://www.typescriptlang.org/",
    image: "/tech/typescript.svg",
  },
  {
    name: "JavaScript",
    category: "Languages",
    description: "The versatile, ubiquitous programming language powering dynamic and interactive web applications.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    image: "/tech/js.svg",
  },
  {
    name: "C++",
    category: "Languages",
    description: "High-performance programming language engineered for computational speed, system architecture, and algorithms.",
    link: "https://isocpp.org/",
    image: "/tech/cpp.svg",
  },
  {
    name: "Python",
    category: "Languages",
    description: "Versatile language celebrated for rapid prototyping, backend APIs, data pipelines, and automation.",
    link: "https://www.python.org/",
    image: "/tech/python.svg",
  },
  {
    name: "HTML5",
    category: "Languages",
    description: "Semantic markup standard structuring the modern web with rich accessibility and technical SEO support.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    image: "/tech/html5.svg",
  },
  {
    name: "CSS3",
    category: "Languages",
    description: "Modern styling standard for responsive design, flexible layouts, and fluid micro-animations.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    image: "/tech/css3.svg",
  },

  // Frontend
  {
    name: "React",
    category: "Frontend",
    description: "Declarative, component-driven library for crafting high-performance, modular user interfaces.",
    link: "https://react.dev/",
    image: "/tech/react.svg",
  },
  {
    name: "Next.js",
    category: "Frontend",
    description: "Production React framework with App Router, Server Components, SSR, and built-in performance optimization.",
    link: "https://nextjs.org/",
    image: "/tech/nextjs2.svg",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Utility-first CSS framework for rapid development of modern, highly customized UI systems.",
    link: "https://tailwindcss.com/",
    image: "/tech/tailwindcss.svg",
  },
  {
    name: "Vite",
    category: "Frontend",
    description: "Ultra-fast frontend build tool and dev server utilizing native ES modules and Rollup bundling.",
    link: "https://vite.dev/",
    image: "/tech/vite.svg",
  },

  // Backend & Databases
  {
    name: "Node.js",
    category: "Backend & Databases",
    description: "Asynchronous event-driven JavaScript runtime built for high-throughput, scalable network applications.",
    link: "https://nodejs.org/",
    image: "/tech/nodejs.svg",
  },
  {
    name: "Express.js",
    category: "Backend & Databases",
    description: "Fast, unopinionated, minimalist web framework for Node.js used to build robust RESTful APIs.",
    link: "https://expressjs.com/",
    image: "/tech/express.svg",
  },
  {
    name: "MongoDB",
    category: "Backend & Databases",
    description: "Scalable document database providing JSON-like schema flexibility and high-volume data storage.",
    link: "https://www.mongodb.com/",
    image: "/tech/mongodb.svg",
  },
  {
    name: "Redis",
    category: "Backend & Databases",
    description: "Ultra-low latency in-memory data store utilized for caching, sessions, and real-time pub/sub messaging.",
    link: "https://redis.io/",
    image: "/tech/redis.svg",
  },
  {
    name: "PostgreSQL",
    category: "Backend & Databases",
    description: "Advanced open-source relational database known for enterprise reliability, ACID compliance, and speed.",
    link: "https://www.postgresql.org/",
    image: "/tech/postgresql.svg",
  },
  {
    name: "Firebase",
    category: "Backend & Databases",
    description: "Cloud app development platform providing real-time data synchronization, auth, and serverless backends.",
    link: "https://firebase.google.com/",
    image: "/tech/firebase.svg",
  },

  // Cloud, DevOps & Tooling
  {
    name: "Docker",
    category: "Cloud, DevOps & Tooling",
    description: "Industry-standard containerization platform ensuring consistent deployment across all cloud environments.",
    link: "https://www.docker.com/",
    image: "/tech/docker.svg",
  },
  {
    name: "Git",
    category: "Cloud, DevOps & Tooling",
    description: "Fast, distributed version control system for tracking changes, branch management, and collaboration.",
    link: "https://git-scm.com/",
    image: "/tech/git.svg",
  },
  {
    name: "GitHub",
    category: "Cloud, DevOps & Tooling",
    description: "Cloud-based collaboration hub for code repository hosting, team review workflows, and project tracking.",
    link: "https://github.com/",
    image: "/tech/github.svg",
  },
  {
    name: "GitHub Actions",
    category: "Cloud, DevOps & Tooling",
    description: "Native automation engine for CI/CD pipelines, automated testing, and seamless continuous delivery.",
    link: "https://github.com/features/actions",
    image: "/tech/githubactions.svg",
  },
  {
    name: "Vercel",
    category: "Cloud, DevOps & Tooling",
    description: "Global edge deployment platform providing instantaneous previews, serverless compute, and CDN routing.",
    link: "https://vercel.com/",
    image: "/tech/vercel.svg",
  },
  {
    name: "Linux",
    category: "Cloud, DevOps & Tooling",
    description: "Enterprise operating system kernel powering cloud VMs, server instances, containers, and shell environments.",
    link: "https://www.kernel.org/",
    image: "/tech/linux.svg",
  },
];
