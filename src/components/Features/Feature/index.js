import React from 'react';
import './style.scss';

const Feature = ({ title, text }) => {
    return (
        <div className="feature">
            <h4 className="feature__title">{title}</h4>
            <p className="paragraph paragraph--small">{text}</p>
        </div>
    );
}

export default Feature;
