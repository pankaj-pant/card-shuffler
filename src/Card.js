import React from 'react';

function Card({src, alt}) {
    return (
        <div>
            <img className="Card" src={src} alt={alt}/>
        </div>
    )
}

export default Card;
