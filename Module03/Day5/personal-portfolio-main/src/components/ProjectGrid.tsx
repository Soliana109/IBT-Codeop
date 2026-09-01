import ProjectCard from "./ProjectCard";
import type { ProjectItem } from "../data/Projects";

const ProjectGrid = ({ projects }: { projects: ProjectItem[] }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project) => ( 
          <ProjectCard key={project.slug} project={project} />
        ))}

      </div>

    </section>
  );
};

export default ProjectGrid;