import { Parallax, Background } from 'react-parallax';
import liberty from '../images/Liberty.jpeg';


// Big difference b/w html and jsx are class is now className, img and input tags need to be self closing, and inline styles use {{}} instead of "", can inject JS
function About() {
let Robby = "Robby is a ghost"

  return (
    <Parallax
    blur={{ min: -15, max: 15 }}
    bgImage={liberty}
    bgImageAlt="Liberty"
    strength={100}>

    <div className="App">
        <h2>About</h2>
      <h3>I am sooo cool my name is Donna</h3>
      <img src="ghost.com" alt ="ghost" />
      <h3>{Robby}</h3>
    </div>


    <div style={{ height: '700px' }} />
    </Parallax>
  );
}

export default About;
