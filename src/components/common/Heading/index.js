import React from 'react';
import './style.scss';

const Heading = ({ num, part1, part2 }) => {
    return (
        <h2 className="heading-secondary">
            <span className="heading-secondary__number">{num}</span>
            <span className="heading-secondary__part-one"> {part1}</span>
            <span className="heading-secondary__part-two"> {part2}</span>
        </h2>
    );
}

export default Heading;
