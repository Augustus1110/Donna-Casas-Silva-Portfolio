
// big difference b/w html and jsx are  class is now className, img and input tags need to be self closing, and inline styles use {{}} instead of "", can inject JS
function About() {
let Robby = "Robby is a ghost"

  return (
    <div className="App">
        <h2>About</h2>
      <h3>I am sooo cool my name is Donna</h3>
      <img src="ghost.com" alt ="ghost" />
      <h3>{Robby}</h3>
    </div>
  );
}

export default About;
