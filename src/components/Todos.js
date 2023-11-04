import React, { useContext } from 'react'
import { userContext } from '../App'
import Todo from './Todo'

const Todos = () => {
  const {todos} = useContext(userContext)
  return (
    <div className="todos">
        {(todos.length>0) ? 
         (todos.map((todo)=><Todo todo={todo} key={todo.id}/>)) : 
         <p style={{textAlign:"center"}}>no more todos</p>
        }
    </div>
  )
}

export default Todos