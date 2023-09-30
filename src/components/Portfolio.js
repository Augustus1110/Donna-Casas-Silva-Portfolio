import Project from "./Project";
import { Parallax, Background } from "react-parallax";
import liberty from "../images/Liberty.jpeg";

function Portfolio() {
  const projects = [
    {
      title: "Linguini Language App",
      description: "Language learning app.",
      image: require("../images/Linguini.png"),
      github: "https://github.com/MMerzoug/linguini-language-tutoring",
      url: "https://pasta-fagioli-b817a8e5488d.herokuapp.com/",
    },
    {
      title: "Linguini Language App",
      description: "Language learning app.",
      image: require("../images/Linguini.png"),
      github: "https://github.com/MMerzoug/linguini-language-tutoring",
      url: "https://pasta-fagioli-b817a8e5488d.herokuapp.com/",
    },
    {
      title: "Linguini Language App",
      description: "Language learning app.",
      image: require("../images/Linguini.png"),
      github: "https://github.com/MMerzoug/linguini-language-tutoring",
      url: "https://pasta-fagioli-b817a8e5488d.herokuapp.com/",
    },
    {
      title: "Linguini Language App",
      description: "Language learning app.",
      image: require("../images/Linguini.png"),
      github: "https://github.com/MMerzoug/linguini-language-tutoring",
      url: "https://pasta-fagioli-b817a8e5488d.herokuapp.com/",
    },
    {
      title: "Linguini Language App",
      description: "Language learning app.",
      image: require("../images/Linguini.png"),
      github: "https://github.com/MMerzoug/linguini-language-tutoring",
      url: "https://pasta-fagioli-b817a8e5488d.herokuapp.com/",
    },
    {
      title: "Linguini Language App",
      description: "Language learning app.",
      image: require("../images/Linguini.png"),
      github: "https://github.com/MMerzoug/linguini-language-tutoring",
      url: "https://pasta-fagioli-b817a8e5488d.herokuapp.com/",
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
        <div className="project-flex">
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
      </div>
      <div style={{ height: "700px" }} />
    </Parallax>
  );
}

export default Portfolio;
