import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { fetchTodo } from '../store/todo'
import { deleteTodo, updateTodo } from '../store/todos'
import { useDispatch, useSelector } from 'react-redux'

const EditTodo = () => {
  //brings in state from store
  const { todo } = useSelector((state) => {
    return {
      todo: state.todo,
    }
  })

  //brings in actions from store
  const dispatch = useDispatch()

  //React Router Hooks
  const location = useLocation()
  const history = useHistory()

  //defining id from the url
  const id = location.pathname.slice(-1)

  //local state for editing
  const [taskName, setTaskName] = useState('')
  const [assignee, setAssignee] = useState('')

  //submitting changes to task
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateTodo({ ...todo, taskName, assignee }, history))
  }

  //componentDidMount fetches todo
  useEffect(() => {
    dispatch(fetchTodo(id))
  }, [])

  //componentDidUpdate updates local state
  useEffect(() => {
    setTaskName(todo.taskName)
    setAssignee(todo.assignee)
  }, [todo])

  return (
    <div>
      <form id="todo-form" onSubmit={handleSubmit}>
        <label htmlFor="taskName">
          Task Name:&nbsp;
          {!taskName ? (
            <span className="warning">Field is Required!</span>
          ) : null}
        </label>
        <input
          name="taskName"
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName || ''}
        />{' '}
        {/* if taskName is undefined set it to empty string, for some reason localstate starts as empty string then becomes undefined then gets set to the value from the store. I am still not sure why it becomes undefined at one point, maybe a delay from the backend? */}
        <label htmlFor="assignee">Assign To:</label>
        <input
          name="assignee"
          onChange={(e) => setAssignee(e.target.value)}
          value={assignee || ''}
        />{' '}
        {/* same as above but for assignee */}
        <button type="submit" disabled={!taskName || !assignee}>
          Submit
        </button>
      </form>
      <form onSubmit={(ev) => ev.preventDefault()}>
        <button
          className="remove"
          onClick={() => dispatch(deleteTodo(id, history))}
        >
          Delete
        </button>
      </form>
    </div>
  )
}

export default EditTodo
