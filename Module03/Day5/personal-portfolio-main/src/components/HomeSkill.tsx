import {
  ComputerDesktopIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

const skills = [
  {
    name: "React & Frontend",
    description:
      "Building responsive, scalable, and high-performance web applications using modern frontend technologies.",
    icon: (
      <ComputerDesktopIcon className="w-12 h-12 text-indigo-500" />
    ),
  },
  {
    name: "Problem Solving & Case Studies",
    description:
      "Transforming real-world challenges into practical digital solutions through research and structured thinking.",
    icon: (
      <LightBulbIcon className="w-12 h-12 text-yellow-500" />
    ),
  },
  
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="w-full bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-20"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
          My Expertise
        </h2>

        {/* Cards */}
        {/* make the card centered */}
        <div className="grid gap-8 md:grid-cols-3 justify-items-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-center">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-5">
                {skill.name}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;