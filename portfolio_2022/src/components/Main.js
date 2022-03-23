import React from 'react';
import { useWindupString, CharWrapper } from "windups";

const Main = () => {
    
    const [text] = useWindupString(
            "Please stay awhile and check out what I've been up to.", {
            pace: (char) => (char === " " ? 20 : 20),
            });
    return (
        <div className="grid-container">
            <div className="name-title">
                <h1 className="name">Nick Huemmer</h1>
                
            </div>
            <div className='typedout'>{text}</div>
        </div>

    )

}

export default Main;