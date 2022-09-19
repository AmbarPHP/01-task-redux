import React from 'react'
import {useSelector} from "react-redux";
import { v4 as uuidv4 } from 'uuid';

function TaskList() {
    const task= useSelector(state=>state.task.taskItems);
    console.log("el state",task);
    console.log(uuidv4)

  return (
        <div>
            
        {task.map(item=>{
           return  (<div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            
            </div>)})
        }</div>
    )
}

export default TaskList