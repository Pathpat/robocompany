import React from "react";
import Card from "./Card.js";


// otan kanoyme loop se react prepei panta na thymomast na vazoyme to key**

const CardList = ({robots}) => {
    const CardArray = robots.map((user,i) => {return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />})
     return (
        <div>
        {CardArray}
        </div>
    );
}
export default CardList;