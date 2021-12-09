import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../store/todos'
import { Link, useHistory } from 'react-router-dom'

const CreateTodo = () => {
  //pull in actions from store
  const dispatch = useDispatch()

  //local state for editing
  const [taskName, setTaskName] = useState('')
  const [assignee, setAssignee] = useState('')

  //get access to history object from react router hooks
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createTodo({ taskName, assignee }, history))
  }

  return (
    <form id="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="taskName">Task Name:</label>
      <input onChange={(e) => setTaskName(e.target.value)} name="taskName" />

      <label htmlFor="assignee">Assign To:</label>
      <input name="assignee" onChange={(e) => setAssignee(e.target.value)} />

      <button type="submit" disabled={!taskName.length || !assignee.length}>
        Submit
      </button>
      <Link to="/">Cancel</Link>
    </form>
  )
}

export default CreateTodo
