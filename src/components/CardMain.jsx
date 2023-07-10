import React from "react";
import Card from "./Cards";


function CardMain(props){
   return (
    <div>
        {/* <Card expenseData = {props.expenseData[0].text} />
        <Card expenseData = {props.expenseData[1].text} /> */}

        {props.expenseData.map(expense => <Card expenseData1 = {expense.text} />)}

    </div>
   )
}

export default CardMain;

