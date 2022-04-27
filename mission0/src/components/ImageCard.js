import React from 'react';
import './ImageCard.css'

function ImageCard(props) {
    return (
        <div className='ImageCard'>
            <img src={props.image} alt='dashboard_icon' className='ImageCard-Image' />
            <div className='ImageCard-TextContainer'>
                <h2 className='ImageCardPrimaryText'>Rocks</h2>
                <h3 className='ImageCardSecondaryText'>Rocks</h3>
            </div>
        </div>
    );
}

export default ImageCard;