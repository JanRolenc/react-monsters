import React from "react";
import "./Card.css";

const Card = ({ name, email, id }) => {
    return (
        <div className="card center">
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="monsters" />
            <h3>{name}</h3>
            <p>{email}</p>
        </div>

    );
}

export default Card;