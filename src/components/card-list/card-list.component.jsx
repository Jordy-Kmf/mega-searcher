import React from 'react';
import { Card } from '../card/card.component';
import './card-list.css'

export const CardList = props => (

    <div className='card-list'>
        {props.manager.map(manager => (

            // manager is passed from CardList into Card
            <Card key={manager.id} farmer={manager} />
        ))}
    </div>
);