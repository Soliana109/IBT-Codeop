import Bimage1 from "../assets/Bimage1.png";
import Bimage2 from "../assets/Bimage2.png";

export type ProjectItem = {
  slug: string;
  title: string;
  description: string;
  category?: string;
  image: string;
  images: string[];
  liveLink?: string;
  github?: string;
  technologies: string[];
  features: string[];
  challenge?: string;
  solution?: string;
  note?: string;
  role?: string[];
  collaboration?: string;
  duration?: string;
  status?: string;
};

export const projects: ProjectItem[] = [
  {
    slug: "budgeting-app",
    title: "Budget App",
    description: "An app you use to track all your money.",
    category: "Frontend",
    image: Bimage1,
    images: [Bimage1, Bimage2],
    liveLink: "https://budget-website-two.vercel.app/",
    github: "https://github.com/Soliana109/IBT-Codeop",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: [
      "Responsive website",
      "Simple budget planning",
    ],
    challenge: "Finding a simple and understandable website to budget on.",
    solution: "Design a simple and understandable website to budget on.",
  },
];
