import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  // --- NEW ICONS ADDED FOR YOUR SKILLS ---
  SiDjango,
  SiJsonwebtokens,
  SiStripe,
  SiZoho,
  SiHtml5,
  SiCss3,
  SiGit,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          {/* Changed to "Visit Link" as it might be GitHub */}
          Visit Link
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

// --- MODIFIED: Added your skills to this object ---
const PROJECT_SKILLS = {
  // --- NEW SKILLS ---
  django: {
    title: "Django",
    bg: "#092E20",
    fg: "#FFFFFF",
    icon: <SiDjango />,
  },
  drf: {
    title: "Django Rest FW",
    bg: "#092E20",
    fg: "#FFFFFF",
    icon: <SiDjango />,
  },
  jwt: {
    title: "JWT",
    bg: "#000000",
    fg: "#FFFFFF",
    icon: <SiJsonwebtokens />,
  },
  stripe: {
    title: "Stripe",
    bg: "#635BFF",
    fg: "#FFFFFF",
    icon: <SiStripe />,
  },
  zoho: {
    title: "Zoho",
    bg: "#E42525",
    fg: "#FFFFFF",
    icon: <SiZoho />,
  },
  html: {
    title: "HTML5",
    bg: "#E34F26",
    fg: "#FFFFFF",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "#1572B6",
    fg: "#FFFFFF",
    icon: <SiCss3 />,
  },
  git: {
    title: "Git",
    bg: "#F05032",
    fg: "#FFFFFF",
    icon: <SiGit />,
  },
  // --- EXISTING SKILLS ---
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "#3776AB",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "#336791",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

// --- MODIFIED: This is now YOUR project list from your resume ---
const projects: Project[] = [
  {
    id: "3dhub",
    category: "Backend Integration",
    title: "3DHub Platform Integration",
    src: "/assets/projects-screenshots/3dhub.jpg",
    screenshots: ["landing.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.django,
        PROJECT_SKILLS.stripe,
        PROJECT_SKILLS.zoho,
      ],
    },
    live: "https://github.com/jaiganesh0081",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-lg">
            Developed a comprehensive backend platform integrating multiple
            third-party services including Zoho Flow, Zoho Inventory, Zoho
            Drive, Zoho CRM, Stripe, and Go Sweet Spot (GSS).
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>
              Automated order workflows from creation to fulfillment.
            </li>
            <li>
              Managed payment handling and subscription logic using Stripe.
            </li>
            <li>
              Orchestrated logistics and tracking via API calls and webhook
              management.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "realtime-chat",
    category: "Real-time Application",
    title: "Real-time Chat App",
    src: "/assets/projects-screenshots/chatapp.jpg",
    screenshots: ["1.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.django,
        PROJECT_SKILLS.sockerio,
        PROJECT_SKILLS.jwt,
      ],
    },
    live: "https://github.com/jaiganesh0081/Chat-Application",
    github: "https://github.com/jaiganesh0081/Chat-Application",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-lg">
            Built a scalable, real-time chat application using Django Channels
            and WebSockets.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>
              Implemented secure authentication using JWT (JSON Web Tokens).
            </li>
            <li>
              Established role-based permissions for different user types
              (e.g., admin, user).
            </li>
            <li>
              Ensured low-latency message delivery with a WebSocket-based
              architecture.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "ecommerce-backend",
    category: "E-commerce API",
    title: "E-commerce Backend",
    src: "/assets/projects-screenshots/ecommerce.jpg",
    screenshots: ["1.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.drf,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "https://github.com/jaiganesh0081/Ecommerce",
    github: "https://github.com/jaiganesh0081/Ecommerce",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-lg">
            Developed a robust backend system for an e-commerce platform using
            Django Rest Framework (DRF) and PostgreSQL.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>
              Full order and payment management lifecycle.
            </li>
            <li>
              Secure, role-based access control for users, staff, and admins.
            </li>
            <li>
              Optimized database queries for handling large product catalogs.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "blog-app",
    category: "CMS / API",
    title: "Blog App (DRF API)",
    src: "/assets/projects-screenshots/blog.jpg",
    screenshots: ["1.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.drf,
        PROJECT_SKILLS.jwt,
      ],
    },
    live: "httpsax://github.com/jaiganesh0081/Blog-app",
    github: "https://github.com/jaiganesh0081/Blog-app",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-lg">
            Created a flexible Blog API using Django Rest Framework&apos;s APIView.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>
              Secure JWT authentication for creating and managing posts.
            </li>
            <li>Full CRUD (Create, Read, Update, Delete) functionality for blog entries.</li>
            <li>
              A custom admin panel for easy content management by non-technical
              users.
            </li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;