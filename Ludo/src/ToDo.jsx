import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

export default function ToDo(){
    let [todos,setToDos] = useState([{task : "task1",id : uuidv4()}]);
    let [newTodo,setnewTodo] = useState("");
    let addNewTask = ()=> {
        setToDos((prevTodos)=>{
            return [...todos,{task : newTodo,id : uuidv4()}]
        });
        setnewTodo("");  
    }
    let updateTaskVal = (event) => {
        setnewTodo(event.target.value);
    } 
    let deleteTodo = (id) =>{
    setToDos((prevTodos)=>todos.filter((prevTodos)=> prevTodos.id != id));
    
    }
    let taskDone = (id) =>{
        console.log(id);
    }
    return(
        <div>
            <input placeholder="Enter Tasks" 
            value={newTodo} 
            onChange={updateTaskVal}
            ></input>
            &nbsp;
            &nbsp;
            <button onClick={addNewTask}>Add</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h3>Tasks Todo</h3>
            <ul>
                {todos.map((todo)=>{
                    return <li key={todo.id}>
                        <span>{todo.task}</span> 
                        &nbsp;
                        &nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>Delete</button> 
                        &nbsp;
                        &nbsp;
                        <button onClick={()=>taskDone(todo.id)}>Done</button>  
                    </li>
                })
                }
            </ul>
        </div>
    )
}