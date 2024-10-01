import React,{useState} from "react";
const TodoList =({todos,deleteTodo,toggleComplete})=>{

    return(
        <ul>
            {todos.map((todo,index)=>(
                <li key={index} style={{textDecoration: todo.completed ? 'line-through': ''}}>
                    <span onClick={()=>toggleComplete(index)}>{todo.task}</span>
                    <button onClick={()=>deleteTodo(index)}>delete </button>

                </li>
            ))}
        </ul>
    )
}
export default TodoList