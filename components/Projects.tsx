import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import clean from "../public/img/projects/clean.png";
import videoTube from "../public/img/projects/videoTube.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={clean.src}
          title="Clean Blog"
          link="https://github.com/TaherBabuji/blogpost-project"
        />
        <ProjectCard
          img={videoTube.src}
          title="VideoTube"
          link="https://github.com/TaherBabuji/VideoTube_Backend-Youtube-clone-"
        />
      </div>
    </div>
  );
};

export default Projects;
