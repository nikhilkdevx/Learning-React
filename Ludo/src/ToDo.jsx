import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

export default function ToDo(){
    let [todos,setToDos] = useState([{task : "task1",id : uuidv4(),isDone : false}]);
    let [newTodo,setnewTodo] = useState("");

    let addNewTask = ()=> {
        setToDos((prevTodos)=>{
            return [...todos,{task : newTodo,id : uuidv4(),isDone : false}]
        });
        setnewTodo("");  
    }

    let updateTaskVal = (event) => {
        setnewTodo(event.target.value);
    } 

    let deleteTodo = (id) =>{
    setToDos((prevTodos)=>todos.filter((prevTodos)=> prevTodos.id != id));
    }
    
    let markAllDone = (id) =>{
        setToDos((prevTodos) => 
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    isDone : true, 
                }
            })
        )
    }

    let markAsDone = (id) =>{
        setToDos((prevTodos) =>  
            prevTodos.map((todo) => {
                if(todo.id == id){
                    return {
                        ...todo,
                        isDone:true,
                    };
                } else {
                    return todo;
                }
            })
        )
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
                        <span style={todo.isDone ? {textDecoration : "line-through"} : {}}>{todo.task}</span> 
                        &nbsp;
                        &nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>Delete</button> 
                        &nbsp;
                        &nbsp;
                        <button onClick={()=>markAsDone(todo.id)}>Mark As Done</button>  
                    </li>
                })
                }
            </ul>
            <br></br>
            <br></br>
            <button onClick={markAllDone}>Mark All as Done</button>
        </div>
    )
}