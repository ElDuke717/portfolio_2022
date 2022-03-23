import React from 'react';
import { useWindupString } from "windups";

const Main = () => {
    const [text] = useWindupString(
            "Please stay awhile and check out what I've been up to."
          );
    return (
        <div className="grid-container">
            <div className="name-title">
                <h1 className="name">Nick Huemmer</h1>
                <div>{text}</div>
            </div>
        </div>

    )

}

export default Main;