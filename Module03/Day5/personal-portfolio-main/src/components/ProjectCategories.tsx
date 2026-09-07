import { useState } from "react";
import { categories } from "../data/categories";

type Props = {
  onSelect: (cat: string) => void;
};

const ProjectCategories = ({ onSelect }: Props) => {
  const [active, setActive] = useState<string>("All");

  const handleClick = (cat: string) => {
    setActive(cat);
    onSelect(cat);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 mb-12">

      <div className="flex flex-wrap justify-center gap-3">

        {categories.map((cat: string) => {
          const isActive = active === cat;

          return (
            <button
              key={cat}
              onClick={() => handleClick(cat)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                ${
                  isActive
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-lg scale-105"
                    : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:border-indigo-500 hover:text-indigo-500"
                }
              `}
            >
              {cat}
            </button>
          );
        })}

      </div>

    </section>
  );
};

export default ProjectCategories;