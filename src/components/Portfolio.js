import Project from "./Project";
import { Parallax, Background } from "react-parallax";
import liberty from "../images/Liberty.jpeg";

function Portfolio() {
  const projects = [
    {
      title: "project 1",
      description: "this is a project 1 description.",
      image: "pathtoimage",
      github: "github.com/project1",
      url: "github.io/project1",
    },
    {
      title: "project 2",
      description: "this is a project 2 description.",
      image: "pathtoimage",
      github: "github.com/project2",
      url: "github.io/project2",
    },
  ];
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={liberty}
      bgImageAlt="Liberty"
      strength={100}
    >
      <div className="App">
        <h2>Portfolio</h2>
        {projects.map((project) => {
          return (
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
              github={project.github}
              url={project.url}
            />
          );
        })}
      </div>

      <div style={{ height: "700px" }} />
    </Parallax>
  );
}

export default Portfolio;
