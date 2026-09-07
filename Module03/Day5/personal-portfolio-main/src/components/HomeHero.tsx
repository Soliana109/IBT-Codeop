import { motion } from "framer-motion";
import heroimg from "../assets/idphoto.jpg";
const HomeHero = () => {
  return (
<section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-indigo-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
             Soliana
            </span>
          </motion.h1>

          <motion.h2
            className="mt-4 text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
           Full Stack Developer 
          </motion.h2>

          <motion.p
            className="mt-6 text-gray-600 dark:text-gray-400 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I design and build modern, responsive, and user-friendly digital
            experiences. Passionate about clean UI, performance, and real-world
            impact.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 text-white rounded-2xl shadow-md hover:bg-indigo-700 transition-all duration-300"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* RIGHT CONTENT (IMAGE / VISUAL) */}
       <motion.div
  className="flex justify-center"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
>
<div className="w-80 h-80 md:w-[28rem] md:h-[34rem] rounded-3xl bg-gradient-to-tr from-indigo-500 to-purple-500 p-1 shadow-xl">    {/* Inner container with overflow-hidden */}
    <div className="w-full h-full rounded-3xl overflow-hidden bg-white dark:bg-gray-900 flex items-center justify-center">
      <img
        src={heroimg}
        alt="Hero"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default HomeHero;