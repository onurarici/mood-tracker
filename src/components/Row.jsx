import React from "react";

export default function Row(){

    let monthlyBoxRow = [];
    

   

    for (let month = 1; month < 13; month++){
        monthlyBoxRow.push(React.createElement("div",{className:"box"}))
    }


    
        return(
            <div className="row">
            {monthlyBoxRow}
            </div>
        
            
        )
    
}


