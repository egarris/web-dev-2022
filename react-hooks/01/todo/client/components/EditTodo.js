import React, { useState, useEffect } from 'react';
import { deleteTodo, updateTodo } from '../store/todos';
import { fetchTodo, _setTodo } from '../store/todo';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const EditTodo = () => {
  const [taskName, setTaskName] = useState('')
  const [assignee, setAssignee] = useState('')

  const { todo } = useSelector((state) => {
    return {
      todo: state.todo
    }
  })

  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchTodo(id))
  },[])

  useEffect(() => {
    setTaskName(todo.taskName)
    setAssignee(todo.assignee)
  },[todo])

  const handleSubmit = (evt) => {
    evt.preventDefault
    dispatch(updateTodo({...todo, taskName, assignee}))
  }

  return (
    <div>
        <form id='todo-form' onSubmit={handleSubmit}>
          <label htmlFor='taskName'>Task Name:</label>
          <input name='taskName' onChange={(e) => setTaskName(e.target.value)} value={taskName || ''} />

          <label htmlFor='assignee'>Assign To:</label>
          <input name='assignee' onChange={(e) => setAssignee(e.target.value)} value={assignee || ''} />

          <button type='submit'>Submit</button>
        </form>
        <form onSubmit={(ev) => ev.preventDefault()}>
          <button
            className='remove'
            onClick={() => dispatch(deleteTodo(id))}
          >
            Delete
          </button>
        </form>
      </div>
  )
}
