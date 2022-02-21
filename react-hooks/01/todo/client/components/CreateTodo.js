import React, { useState } from 'react';
import { createTodo } from '../store/todos';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

const CreateTodo = () => {
  const [taskName, setTaskName] = useState('')
  const [assignee, setAssignee] = useState('')

  const dispatch = useDispatch()

  const history = useHistory

  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(createTodo({taskName, assignee}, history))
  }

  return (
    <form id='todo-form' onSubmit={handleSubmit}>
        <label htmlFor='taskName'>Task Name:</label>
        <input name='taskName' onChange={(e) => setTaskName(e.target.value)} value={taskName} />

        <label htmlFor='assignee'>Assign To:</label>
        <input name='assignee' onChange={(e) => setAssignee(e.target.value)} value={assignee} />

        <button type='submit'>Submit</button>
        <Link to='/'>Cancel</Link>
      </form>
  )
}

export default CreateTodo
