import React from 'react';
import Twitter from './Twitter';
import GitHub from './GitHub';
import LinkedIn from './LinkedIn';

const Main = () => {
    
    
    return (
        <div className="grid-container">
            <div className="name-title">
                <h1 className="name">Nick Huemmer</h1>
            </div>
            <GitHub />
            <LinkedIn />
            <Twitter />
        </div>

    )

}

export default Main;