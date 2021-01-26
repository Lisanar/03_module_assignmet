import React from 'react';
import './Char.css'

const char = (props) => {
    return (
        <div className="char" onClick={props.click}>
            <p>{props.char}</p>
        </div>
    );
};

export default char;