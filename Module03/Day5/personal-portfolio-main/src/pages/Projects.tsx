import ProjectHero from "../components//ProjectHero";
import ProjectGrid from "../components//ProjectGrid";
import { projects } from "../data/Projects";

const Projects = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">

      <ProjectHero />

      <ProjectGrid projects={projects} />

    </div>
  );
};

export default Projects;