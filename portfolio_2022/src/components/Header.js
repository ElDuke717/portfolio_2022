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
                    <Link className="social-nav portfolio" to="/portfolio">GitHub</Link>
                    <Link className="social-nav resume" to="/resume">Resume</Link>
                    <Link className="social-nav blog" to="/blog">Blog</Link>
                </React.Fragment>
                </nav>
            </div>
        </header>
        </div>
      );
      
  };

export default Header;