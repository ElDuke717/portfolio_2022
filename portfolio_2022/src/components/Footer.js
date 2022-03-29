import React from 'react';
import { Link } from 'react-router-dom';
import { useWindupString, CharWrapper } from "windups";


const Footer = () => {
    //Reference settings for typed out text here https://windups.gwil.co/guides
    const [windupText] = useWindupString(
        "Please stay awhile and check out what I've been up to.", {
        pace: (char) => (char === " " ? 20 : 20),
        });
    return (
        <div id="root">
        <footer>
            <div className="wrap footer--flex">
                <nav className="footer--nav">
                    <React.Fragment>
                        <Link className="social-nav contact" to="/blog">Contact</Link>    
                        <Link className="social-nav blog" to="/blog">Blog</Link>
                    </React.Fragment>
                </nav>
                {windupText}
                <p className="copyright">&copy; 2022, Nick Huemmer</p>
            </div>
        </footer>
        </div>
      );
  };

export default Footer;