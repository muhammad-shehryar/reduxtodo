import { createSlice } from "@reduxjs/toolkit";

const initialState={
    tasks:[],
};

const todoSlice = createSlice({
    name:"todos",
    initialState:initialState,
    reducers:{
        addTask:(state,action)=>{
            state.tasks.push({id:Date.now(),text:action.payload,completed:false});
        },
        toggleTask:(state,action)=>{
            const task = state.tasks.find((task)=>task.id === action.payload);
            if(task){
                task.completed = !task.completed;
            }
        },
        removeTask:(state,action)=>{
            state.tasks.filter((task)=>task.id !== action.payload);
        }
    }
})


export const {addTask,toggleTask,removeTask} = todoSlice.actions;
export default todoSlice.reducers;