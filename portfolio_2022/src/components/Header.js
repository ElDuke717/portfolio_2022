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
                    <Link className="social-nav resume" to="/resume">Resume</Link>
                    <Link className="social-nav blog" to="/blog">Blog</Link>
                </React.Fragment>
                {/* <a className="social-nav github" href="https://github.com/ElDuke717">GitHub</a> */}
                </nav>
            </div>
        </header>
        </div>
      );
      
  };

export default Header;