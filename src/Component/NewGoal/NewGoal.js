import React, { useState } from "react";
import './NewGoal.css'


const NewGoal=(props)=>{
    const [entertext,setentertext]=useState("");

    const addGoalHandler=(e)=>{
        e.preventDefault();
        //here the new goal is created as schema
        const newGoal={
            id:Math.random().toString(),
            text:entertext
        }
        //the funtion which we passed from parent ie app will be called and new goal will be sent to add
        props.onAddGoal(newGoal);
        setentertext("");
    }
    const onchageofinput=(event)=>{
        //here the event is passed and which has value
        setentertext(event.target.value);
    }

    return(
    <div className="new-goal">
    {/* here this form is for collection of user defined data and addGoalHandler will be called when we hit submit */}
        <form onSubmit={addGoalHandler}>
            {/* here the input field is used so first "value is used to what we want to show at begin" and we have given that an usestate */}
            {/* and also onchangeinput funtion will run whenever there is key hit on that form */}
            <input type="text" value={entertext} onChange={onchageofinput}/>
            <button type="submit">Add Goal</button>
        </form>
    </div>)
}


export default NewGoal;