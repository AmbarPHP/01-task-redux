import {createSlice} from "@reduxjs/toolkit";


const initialState={
    taskItems:[{
    id:1,
    title:"task 1",
    description:"description task 1",
    completed:"false"},
    {
        id:2,
        title:"task 2",
        description:"description task 2",
        completed:"false"}]

    };

export const taskSlice=createSlice({
    name:'task',
    initialState,
    reducers:{
        addTask:(state, action)=>{
            console.log("state:",state)
           console.log("add action: ", action);
           let tempItem = { 
            id:action.payload.id,
            title:action.payload.title,
            description:action.payload.description,
            };
          //si estaba en ceros
          state.taskItems.push(tempItem);
        
        }
    }
})
export const {addTask} = taskSlice.actions;
export default taskSlice.reducer;