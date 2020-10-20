import React from 'react';
import './card.css';

export const Card = props => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.farmer.id}?set=set5&size=160x160`} alt="manager" />
        <h1 className='farmer-name'> {props.farmer.name} </h1>
        <p className='farmer-email'> {props.farmer.email} </p>
    </div>
);

// Robots lovingly delivered by Robohash.org