import React, { useState } from "react";
import GoalList from "./Component/GoalList/GoalList";
import NewGoal from "./Component/NewGoal/NewGoal";
import './App.css'

const App=()=>{
    //this usestate is there to show which are the components of our list
    const [courseGoals,changeCourseGoals]=useState([
        {id:'cg1',text:'finish the course'},
        {id:'cg2',text:'Learn all about the course main topics'}
        ,{id: 'cg3',text:"hello aryaman go hard"}
    ]);

    const addNewGoalHandler=(newGoal)=>{
        
        //here We use funtion because it garenteeses you latest execution
        changeCourseGoals((prevCourseGoals)=>{
            return prevCourseGoals.concat(newGoal);
        });
    }


    return(
    <div>
        <h2 className="Goals">Course goals</h2>
        {/* here when we click button this funtion will be runned because pointer is passed here */}
        <NewGoal onAddGoal={addNewGoalHandler}/>

        <ul className="goal-list">
            {/* Here data is passed from parent to child */}
           <GoalList goals={courseGoals}/>
        </ul>
    </div>)    
}

export default App;