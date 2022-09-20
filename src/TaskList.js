import React from 'react'
import {useSelector} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import "./TaskList.scss";
import {useDispatch} from 'react-redux';
import { deleteTask } from './store/slices/task';


function TaskList() {
    const task= useSelector(state=>state.task.taskItems);
    const dispatch = useDispatch();
  

    function handleDelete(id){
        dispatch(deleteTask(id));
    }

  return (
        <div className="container">
            
        {task.map(item=>{
           return  (
           <div key={item.id} className="item" >
            <h3 className='title'>title:  {item.title}</h3>
            <p className='description'>description:{item.description}</p>
            <button onClick={()=>handleDelete(item.id)} className='deleteTask'>Delete</button>
            </div>)})
        }</div>
    )
}

export default TaskList