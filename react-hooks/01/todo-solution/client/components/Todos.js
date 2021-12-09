import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Todos = () => {
  //bring in state from store
  const { todos } = useSelector((state) => {
    return {
      todos: state.todos,
    }
  })

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <h2>
              <Link to={`/todos/${todo.id}`}>Task: {todo.taskName}</Link>
            </h2>
            <p>assigned by {todo.assignee}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default Todos
