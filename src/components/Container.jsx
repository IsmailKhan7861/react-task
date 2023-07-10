import "./Container.css";
import {useState} from "react";


function Container(props){
    const [currentTitle,setTitle] = useState("") 
    console.log(useState())

    const getData = (event) =>{
     setTitle(event.target.value);
    }
    const submitFunc = (event) =>{
          event.preventDefault();
          let expenseData = {
            title:currentTitle
          }
          props.onSave(expenseData);
       
    }
return (
    <form className="container-box" onSubmit={submitFunc}>
        <h2 className="course-goal">Course Goal</h2>
        <input type = "text" onChange={getData}></input>
        <button type = "submit" className="btnSubmit">Add Goal</button>
    </form>
)
}
export default Container; 









