import profileImg from "../images/ProfileDCS.png"
import linkedIn from "../images/LinkedIn.png"
import gitHub from "../images/GitHub.png"
import face from "../images/FB.png"

function Footer() {
    return (
      <div className="App footer-size">
          <ul className="link-list">
            <li className="foot-link"><a target="blank" href="http://github.com/augustus1110/"><img className="git-img" src={gitHub}/></a></li>
            <li className="foot-link"><a target="blank" href="http://github.com/augustus1110/"><img className="face-img" src={face}/></a></li>
            <li className="foot-link"><a target="blank" href="https://www.linkedin.com/in/meetawesomedonna/"><img className="link-img" src={linkedIn}/></a></li>
          </ul>
      </div>
    );
  }
  
  export default Footer;
  