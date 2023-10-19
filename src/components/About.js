import { Parallax, Background } from 'react-parallax';
import pastel from '../images/Pastel.png';
import ImgProfile from '../images/ProfileDCS.png';


// Big difference b/w html and jsx are class is now className, img and input tags need to be self closing, and inline styles use {{}} instead of "", can inject JS
function About() {


  return (
    <Parallax
    blur={{ min: -15, max: 15 }}
    bgImage={pastel}
    bgImageAlt="Pastel"
    strength={100}>

    <div className="App">
        <h2>About Me</h2>
        <img className="powerpuff" src={ImgProfile} alt ="Powerpuff Donna" />
      <p>My name is Donna and I am a recent graduate of the UC Berkeley Extension Coding Bootcamp.</p> 
      <p>I am based in the San Francisco Bay Area and with my newly acquired range of front-end and back-end development skills, I am embarking on a new career in web development.</p> 
      <p>My front-end proficiencies include HTML, CSS, JavaScript, jQuery, responsive design, React, and Bootstrap.</p> 
      <p>My back-end proficiencies include APIs, Node, Express, MySQL, Sequelize, MongoDB, Mongoose, REST, and GraphQL.</p> 
      <p>With this skill set, I am well-equipped to work on a range of web development projects and contribute to the development of dynamic and engaging web applications.</p>
    </div>




    <div style={{ height: '700px' }} />
    </Parallax>
  );
}

export default About;
