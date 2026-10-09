import { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/Projects";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.slug === slug);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 dark:text-gray-300">
        Project Not Found
      </div>
    );
  }

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const maxIndex = (project.images?.length || 1) - 1;

    if (index < 0) index = maxIndex;
    if (index > maxIndex) index = 0;

    container.scrollTo({
      left: container.offsetWidth * index,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const index = Math.round(
      container.scrollLeft / container.offsetWidth
    );

    setActiveIndex(index);
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen relative">
      {/* ================= BACK BUTTON ================= */}

      <button
        onClick={() => navigate(-1)}
        className="
          fixed top-6 left-6 z-50
          flex items-center gap-2
          px-4 py-2
          rounded-full
          bg-white/80 dark:bg-gray-800/80
          backdrop-blur-md
          shadow-md
          hover:scale-105
          transition
        "
      >
        <ChevronLeftIcon className="w-5 h-5" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
          Back
        </span>
      </button>

      {/* ================= GALLERY ================= */}

      <section className="max-w-7xl mx-auto px-6 pt-16">
        <div className="relative">
          {/* LEFT ARROW */}

          <button
            onClick={() => scrollToIndex(activeIndex - 1)}
            className="
              absolute left-3 top-1/2
              -translate-y-1/2 z-10
              bg-white/80 dark:bg-gray-800/80
              p-2 rounded-full shadow
              hover:scale-110 transition
            "
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>

          {/* RIGHT ARROW */}

          <button
            onClick={() => scrollToIndex(activeIndex + 1)}
            className="
              absolute right-3 top-1/2
              -translate-y-1/2 z-10
              bg-white/80 dark:bg-gray-800/80
              p-2 rounded-full shadow
              hover:scale-110 transition
            "
          >
            <ArrowRightIcon className="w-5 h-5" />
          </button>

          {/* IMAGE SLIDER */}

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="
              flex
              overflow-x-auto
              scroll-smooth
              snap-x
              snap-mandatory
              no-scrollbar
            "
          >
            {(project.images ?? []).map((img, index) => (
              <div
                key={index}
                className="min-w-full snap-center px-2"
              >
                <img
                  src={img}
                  alt={`${project.title} ${index + 1}`}
                  className="
                    w-full
                    h-[420px]
                    md:h-[520px]
                    object-cover
                    rounded-3xl
                    shadow-xl
                  "
                />
              </div>
            ))}
          </div>

          {/* DOTS */}

          <div className="flex justify-center gap-2 mt-6">
            {(project.images ?? []).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === index
                    ? "w-8 h-3 bg-indigo-600"
                    : "w-3 h-3 bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ================= TITLE ================= */}

        <div className="mt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h1>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            {project.description}
          </p>

          {/* LIVE WEBSITE BUTTON */}

          {project.liveLink && project.liveLink !== "#" && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                mt-6
                px-6 py-3
                bg-indigo-600
                text-white
                rounded-xl
                hover:bg-indigo-700
                transition
              "
            >
              Visit Live Website
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            </a>
          )}
        </div>
      </section>

      {/* ================= DETAILS ================= */}

      <section className="max-w-7xl mx-auto px-6 pb-20 mt-16">
        {/* TECHNOLOGIES */}

        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Technologies
        </h2>

        <div className="flex flex-wrap gap-3 mb-12">
          {project.technologies?.map((tech) => (
            <span
              key={tech}
              className="
                px-4 py-2
                rounded-full
                bg-indigo-100
                text-indigo-700
                dark:bg-indigo-900
                dark:text-indigo-300
                text-sm
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* FEATURES */}

        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Key Features
        </h2>

        <ul className="space-y-3 mb-12">
          {project.features?.map((feature) => (
            <li
              key={feature}
              className="text-gray-700 dark:text-gray-300"
            >
              ✓ {feature}
            </li>
          ))}
        </ul>

        {/* CHALLENGE */}

        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Challenge
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
          {project.challenge}
        </p>

        {/* SOLUTION */}

        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Solution
        </h2>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {project.solution}
        </p>
         <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {project.note}
        </p>
      </section>
    </div>
  );
};

export default ProjectDetails;