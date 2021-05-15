import React from 'react';
import './Card.css';

function Card(props) {
    let {title, price, image, alt} = props
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 card'>
            <div className="wrapper">
                <img className='card_img' src={image}></img>
                <div className="cardInfo">
                    <h2>{title}</h2>
                    <h2>{price}</h2>
                </div>
            </div>
        </div>
    )
}

export default Card;
