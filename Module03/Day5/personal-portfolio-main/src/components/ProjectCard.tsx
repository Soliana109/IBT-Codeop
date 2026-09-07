import { Link } from "react-router-dom";

import type { ProjectItem } from "../data/Projects";

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">

      <div className="p-5">

        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {project.description.slice(0, 90)}...
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {(project.technologies ?? []).slice(0, 3).map((tech: string) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          to={`/projects/${project.slug}`}
          className="inline-block mt-5 text-indigo-600 font-medium hover:underline"
        >
          View Project →
        </Link>

      </div>
    </div>
  );
};

export default ProjectCard;