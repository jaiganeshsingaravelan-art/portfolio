import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
// --- THIS IS THE NEW LINE YOU MUST ADD ---
import { TypographyH3, TypographyP } from "@/components/ui/typography";
// --- END OF NEW LINE ---
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
};

export type Skill = {
// ... (type definition is the same) ...
};

// --- MODIFIED: Added your skills to this object ---
const PROJECT_SKILLS = {
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  // DELETED THE 'supabase' BLOCK FROM HERE
};

export type Project = {
// ... (type definition is the same) ...
  live: string;
};

// --- MODIFIED: This is now YOUR project list from your resume ---
const projects: Project[] = [
  // 3DHUB Project (unchanged)
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
  // REAL-TIME CHAT (unchanged)
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
  // E-COMMERCE BACKEND (unchanged)
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
  // BLOG APP (THIS IS THE FIX)
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
    live: "https://github.com/jaiganesh0081/Blog-app",
    github: "https://github.com/jaiganesh0081/Blog-app",
    get content() {
      return (
        <div>
          {/* THIS LINE IS THE FIX:
            Changed Framework's to Framework&apos;s
          */}
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