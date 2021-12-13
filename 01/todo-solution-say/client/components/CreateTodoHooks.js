import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { createTodo } from '../store/todos';


const CreateTodoHooks = () => {

  const [taskName, setTask] = useState()
  const [assignee, setAssignee] = useState()

  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createTodo({taskName, assignee}, history))
  }
  return (
    <form id='todo-form' onSubmit={handleSubmit}>
    <label htmlFor='taskName'>Task Name:</label>
    <input name='taskName' onChange={(e) => setTask(e.target.value)} value={taskName || ''} />

    <label htmlFor='assignee'>Assign To:</label>
    <input name='assignee' onChange={(e) => setAssignee(e.target.value)} value={assignee || ''} />

    <button type='submit'>Submit</button>
    <Link to='/'>Cancel</Link>
  </form>
  )
}

export default CreateTodoHooks


