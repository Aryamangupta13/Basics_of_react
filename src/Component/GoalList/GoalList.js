import React from "react";
const GoalList=(props)=>{
    //here props are being collected which are passed by parent
    const CoursGoals=props.goals;

    return(
    <>
    {/* Here that data is render  */}
    {
        CoursGoals.map((ele)=>{
            return <li key={ele.id}>{ele.text}</li>
        })
    }    
    </>)
}
export default GoalList;