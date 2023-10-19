import Project from "./Project";
import { Parallax, Background } from "react-parallax";
import pastel from "../images/Pastel.png";


function Portfolio() {
  const projects = [
    {
      title: "Code-E the Code Bot",
      description: "AI Powered chatbot to answer your coding questions",
      image: require("../images/Code-E.png"),
      github: "https://github.com/Cleffy/Best-Code-Bot-Ever",
      url: "https://best-code-bot-ever-6c020fa64dc5.herokuapp.com/",
    },
    {
      title: "Linguini Language App",
      description: "Begin your language journey today",
      image: require("../images/Linguini.png"),
      github: "https://github.com/MMerzoug/linguini-language-tutoring",
      url: "https://pasta-fagioli-b817a8e5488d.herokuapp.com/",
    },
    {
      title: "Job.BI",
      description: "Find your new career!",
      image: require("../images/Jobbi.png"),
      github: "https://github.com/markthos/Job.BI",
      url: "https://markthos.github.io/Job.BI/landingPage.html",
    },
    {
      title: "JavaScript Quiz",
      description: "Test your JavaScript knowledge",
      image: require("../images/Quiz.png"),
      github: "https://github.com/Augustus1110/Challenge-4-JavaScript-Quiz",
      url: "https://augustus1110.github.io/Challenge-4-JavaScript-Quiz/",
    },
    {
      title: "Weather Dashboard",
      description: "Find the weather in your city",
      image: require("../images/Weather.png"),
      github: "https://github.com/Augustus1110/Wonderful-Weather-Dashboard",
      url: "https://augustus1110.github.io/Wonderful-Weather-Dashboard/",
    },
    {
      title: "Work Day Scheduler",
      description: "Plan your work day",
      image: require("../images/Workday.png"),
      github: "https://github.com/Augustus1110/Wonderful-Work-Day-Scheduler",
      url: "https://augustus1110.github.io/Wonderful-Work-Day-Scheduler/",
    },
  ];
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={pastel}
      bgImageAlt="pastel"
      strength={100}
    >
      <div className="App">
        <h2 className="portfolio-text">Portfolio</h2>
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
