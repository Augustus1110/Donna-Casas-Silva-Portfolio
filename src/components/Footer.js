import profileImg from "../images/ProfileDCS.png"

function Footer() {
    return (
      <div className="App footer-size">
          <ul className="link-list">
            <li className="foot-link"><a target="blank" href="http://github.com/augustus1110">Github</a></li>
            <li className="foot-link"><a href="https://www.linkedin.com/in/meetawesomedonna/"><img className="link-img" src={profileImg}/></a></li>
            <li className="foot-link"><a href="http://github.com/augustus1110">Github</a></li>
          </ul>
      </div>
    );
  }
  
  export default Footer;
  