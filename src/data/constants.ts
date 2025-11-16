// We cannot change this enum, as it matches the 3D model's keycap names.
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  VIM = "vim",
  VERCEL = "vercel",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

// --- THIS OBJECT IS NOW 100% UPDATED WITH YOUR SKILLS ---
export const SKILLS: Record<SkillNames, Skill> = {
  // Keycap 'js' now shows PYTHON
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "Python",
    shortDescription: "Building scalable and robust backend systems.",
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  // Keycap 'ts' now shows DJANGO
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "Django",
    shortDescription:
      "The web framework for perfectionists with deadlines.",
    color: "#092E20",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  // Keycap 'react' now shows DRF
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "Django Rest Framework",
    shortDescription: "Creating powerful and secure web APIs.",
    color: "#A40000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  // Keycap 'postgres' (You have this skill!)
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "A powerful, open-source object-relational database.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  // Keycap 'nodejs' now shows WEBSOCKETS
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "WebSockets",
    shortDescription: "Building real-time, bidirectional web applications.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  },
  // Keycap 'express' now shows JWT
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "JWT Authentication",
    shortDescription: "Implementing secure, token-based authentication systems.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jsonwebtokens/jsonwebtokens-original.svg",
  },
  // Keycap 'tailwind' now shows STRIPE
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Stripe",
    shortDescription: "Integrating payment and subscription management.",
    color: "#635BFF",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg",
  },
  // Keycap 'aws' now shows ZOHO
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "Zoho Integrations",
    shortDescription: "Automating workflows with Zoho CRM, Flow, and Inventory.",
    color: "#E42525",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zoho/zoho-original.svg",
  },
  // Keycap 'html' (You have this skill!)
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML5",
    shortDescription: "The foundational structure of the web.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  // Keycap 'css' (You have this skill!)
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS3",
    shortDescription: "Styling and designing responsive web content.",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  // Keycap 'git' (You have this skill!)
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Version control for tracking code changes.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  // Keycap 'github' (You have this skill!)
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Hosting, reviewing, and managing code repositories.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  // --- The rest of the keys are re-purposed or cleaned up ---
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "SQLite",
    shortDescription: "Lightweight, serverless, self-contained database.",
    color: "#003B57",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "APIView",
    shortDescription: "Crafting Django APIs with class-based views.",
    color: "#092E20",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Serializers",
    shortDescription: "Validating and de-serializing complex data in DRF.",
    color: "#A40000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Clean Code",
    shortDescription: "Following best practices for readable code.",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "Problem Solving",
    shortDescription: "Strong analytical and problem-solving abilities.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Collaboration",
    shortDescription: "Working effectively in team environments.",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "...",
    shortDescription: "More skills to be added.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "...",
    shortDescription: "More skills to be added.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "...",
    shortDescription: "More skills to be added.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "...",
    shortDescription: "More skills to be added.",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "...",
    shortDescription: "More skills to be added.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "...",
    shortDescription: "More skills to be added.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
};

export const themeDisclaimers = {
// ... rest of the file is unchanged ...
  light: [
// ...
  ],
  dark: [
// ...
  ],
};