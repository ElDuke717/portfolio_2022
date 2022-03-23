import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div id="root">
        <header>
            <div className="wrap footer--flex">
                <h3 className="header--logo">Social</h3>
                
                <nav className="footer--nav">
                    <React.Fragment>
                        <Link className="social-nav" to="www.twitter.com/nickhuemmer">Twitter</Link>
                        <Link className="social-nav" to="https://github.com/ElDuke717">Github</Link>
                    </React.Fragment>
                </nav>
                <p className="copyright">&copy; 2020, Nick Huemmer</p>
            </div>
        </header>
        </div>
      );
  };

export default Footer;