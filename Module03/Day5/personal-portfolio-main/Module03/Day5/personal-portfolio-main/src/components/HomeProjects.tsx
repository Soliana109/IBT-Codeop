import { Link } from "react-router-dom";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

import { projects } from "../data/Projects";

const HomeProjects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
            Projects
          </h2>
        </div>

        {/* Only show first 3 projects */}
        <div className="space-y-16">
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={project.slug}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                index % 2 !== 0 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`${
                  index % 2 !== 0 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="overflow-hidden rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={`${
                  index % 2 !== 0 ? "lg:col-start-1" : ""
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {project.technologies?.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mt-6">
                  <ul className="space-y-2">
                    {project.features?.slice(0, 3).map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-green-500">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-4">

                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
                  >
                    View Project
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                  </Link>

                 

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-20">
          <Link
            to="/projects"
            className="inline-flex items-center px-8 py-4 rounded-2xl bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-medium hover:scale-105 transition"
          >
            View All Projects
            <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;