const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-20"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:space-x-12">

        
        {/* Text Content */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
            About Me
          </h2>

          <p className="text-gray-700 dark:text-gray-200 text-lg md:text-xl leading-relaxed">
            Hi! I’m <span className="font-semibold">Soliana</span>, a GC{" "}
            <span className="font-semibold text-indigo-600">
              and a full stack developer
            </span>{" "}
            currently getting my degree in{" "}
            <span className="font-medium text-indigo-500">
              Computer Science
            </span>.
            <br /><br />

            During my university years, I have worked and still am working on several team-based projects
            that help me strengthen my skills in collaboration, problem-solving,
            and real-world system development.
            <br /><br />

            I mainly focus on{" "}
            <span className="text-indigo-500 font-medium">
            frontend development
            </span>, and I enjoy creating clean, user-friendly digital experiences
            that are both functional and visually engaging.
          </p>

          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-500 transition-all font-medium"
          >
            See My Work
          </a>
        </div>
      </div>

      {/* Floating Animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-bounce {
            animation: bounce 2s infinite;
          }
        `}
      </style>
    </section>
  );
};

export default AboutSection;