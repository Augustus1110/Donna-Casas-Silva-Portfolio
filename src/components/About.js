import { Parallax, Background } from 'react-parallax';
import pastel from '../images/Pastel.png';


// Big difference b/w html and jsx are class is now className, img and input tags need to be self closing, and inline styles use {{}} instead of "", can inject JS
function About() {
let Robby = "Robby is a ghost"

  return (
    <Parallax
    blur={{ min: -15, max: 15 }}
    bgImage={pastel}
    bgImageAlt="Pastel"
    strength={100}>

    <div className="App">
        <h2>About Me</h2>
      <h3>Recent UC Berkeley Extension Coding Bootcamp graduate embarking on new Web Development career.</h3>
      <img src="ghost.com" alt ="ghost" />
      <h3>{Robby}</h3>
    </div>


    <div style={{ height: '700px' }} />
    </Parallax>
  );
}

export default About;
