import React, { useState } from 'react'
import "./FormTask.scss";
import { v4 as uuidv4 } from 'uuid';
import Form from "react-bootstrap/Form";
import { Container,Row, Col } from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {addTask} from "./store/slices/task";


function TaskForm() {
 
    const [task, setTask]=useState({

        title:"react",
        description:"aprender"
    });

    const dispatch = useDispatch();

    function handleChange(event){
        const {name, value} = event.target
        setTask({...task,[name]:value});
        console.log("la task", task);
    }

    function handleSubmit(event){
        setTask({...task});
        event.preventDefault();
        dispatch(addTask({...task, id:uuidv4()}));
    }

  return (
    <Form onSubmit={handleSubmit}>
       
                <Container className="form-content">
                    <div className="form-items">
                        <h3>Register Task for Today</h3>
                        <p>Fill in the data below.</p>
                     </div>
                    

                     <Row md={12}>
                              <input 
                              className="form-control " 
                              type="text" 
                              name="title" 
                              placeholder="title" 
                              value= {task.title}
                              onChange={handleChange} 
                              required/>
                    </Row>
                    <Row md={12}>
                              <input 
                              className="form-control" 
                              type="text" 
                              name="description"
                              value= {task.description}
                              onChange={handleChange} 
                              placeholder="description" required/>  
                    </Row>
                          
                    <Row className="mt-3">
                        <button id="submit" 
                        type="submit" 
                        className="btn btn-primary">Register</button>
                    </Row>
                </Container>
                
                   
    </Form>


  )
}
//rfce
export default TaskForm