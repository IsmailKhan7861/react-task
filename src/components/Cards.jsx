import "./Cards.css";
import React from "react";
function Card(props){
    return (
      <div className="box">
         <h2 className="text">{props.expenseData1}</h2>
      </div>
    )
}

export default Card;