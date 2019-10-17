import React, { useState } from 'react';
import './Card.css'

function Card({src, alt}) {
    //transform: translate(10px, 40px) rotate(15deg);
    let degree = Math.random() * 90 -45;
    let xCoord = Math.random() * 40 -20;
    let yCoord = Math.random() * 40 -20;

    const [style, setStyle] = useState(`translate(${xCoord}px, ${yCoord}px) rotate(${degree}deg)`);

    return (
        <div>
            <img className="Card" src={src} alt={alt} style={{transform: style}}/>
        </div>
    )
}

export default Card;
