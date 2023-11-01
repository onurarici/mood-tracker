import React, { useState } from "react";
import Card from "./Card";


export default function Explication(){

    let [cardId,setCardId] = useState(1)


    function nextCard(){
        setCardId(cardId+1);
        
    }

    return(
        <div className="explication">

    <Card 
    id={cardId}
    nextCard={nextCard}
    />
    
        </div>
    )
}

