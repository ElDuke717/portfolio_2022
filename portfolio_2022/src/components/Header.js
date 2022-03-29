import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div id="root">
        <header>
            <div className="wrap header--flex">                
                <nav className="footer--nav">
                <React.Fragment>
                    <Link className="social-nav portfolio" to="/portfolio">Portfolio</Link>
                    <Link className="social-nav resume" to={{ pathname: "https://elduke717.github.io/tdfewd-project-9/experience.html"}}>Resume</Link>
                </React.Fragment>
                
                
                </nav>
            </div>
        </header>
        </div>
      );
      
  };

export default Header;