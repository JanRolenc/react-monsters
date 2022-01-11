import React from 'react';
import Card from './Card';
import "./CardList.css";

const CardList = ({ monsters }) => {
    const cardArray = monsters.map((monster) => {
        return (
            <Card
                key={monster.id}
                id={monster.id}
                name={monster.name}
                email={monster.email}
            />
        );
    });

    return (
        <div className="cardList">
            {cardArray}
        </div>

    );
}

export default CardList;