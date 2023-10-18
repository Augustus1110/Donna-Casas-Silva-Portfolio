import{Link} from 'react-router-dom'

function NavBar() {
    return (
      <div id="success" className="NavBar">
        <ul className = "navlist">
            {/* Link to is linked to path end points in App.js */}
           <li><Link to="/">About Me</Link></li>
           <li><Link to="/portfolio">Portfolio</Link></li>
           <li><Link to="/contact">Contact</Link></li>
           <li><Link to="/resume">Resume</Link></li>
        </ul>        
      </div>
    );
  }
  
  export default NavBar;
  
