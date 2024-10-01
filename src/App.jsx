import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './TodoForm'
import TodoList from './TododList'

function App() {
  const [count, setCount] = useState(0)
  const[todos,setTodos] = useState([]);
  const addTodo = (task)=>{
     const newTodos = [...todos , {task,completed:false}]
     setTodos(newTodos)
  }
  const toggleComplete=(index)=>{
    const newTodos = [...todos]
     
    newTodos[index].completed =! newTodos[index].completed
    setTodos(newTodos)

  }
  const deleteTodo = (index)=>{
    const newTodos = todos.filter((_,i)=> i !==index)
    setTodos(newTodos)
  }

  return (
    <>
    <h1>To do list</h1>
    <TodoForm addTodo={addTodo}/>
    <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
    
    </>
  )
}

export default App
