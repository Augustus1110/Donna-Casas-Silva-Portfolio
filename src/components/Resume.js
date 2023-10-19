import resume from '../images/DCSResume.pdf';
import { Parallax, Background } from "react-parallax";
import pastel from "../images/Pastel.png";

function Resume() {
  return (
    <Parallax
    blur={{ min: -15, max: 15 }}
    bgImage={pastel}
    bgImageAlt="pastel"
    strength={100}
  >
    <section className="my-5">
      <div className="my-2">
      <h2 className="resume">Resume</h2>  
      <p>
        Download my <a href={resume} download>resume</a>
        </p>
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
    <div style={{ height: "700px" }} />
    </Parallax>
  );
}

export default Resume;
  