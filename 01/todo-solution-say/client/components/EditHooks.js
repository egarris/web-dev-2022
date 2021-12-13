import React, {useState, useEffect } from 'react';
import { deleteTodo, updateTodo } from '../store/todos';
import { fetchTodo, _setTodo } from '../store/todo';
import {useSelector, useDispatch} from 'react-redux';
import {useLocation, useHistory} from 'react-router-dom'

const EditTodoWithHooks = (props) => {

  const [taskName, setTask] = useState('');
  const [assignee, setAssignee] = useState('');
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()
  const id = location.pathname.slice(-1)

  const {todo} = useSelector((state) => {
    console.log('state', state );
    return {
        todo:state.todo
    }
  })

  useEffect(()  => {
    dispatch(fetchTodo(id))
  }, [])

  useEffect(() => {
    setTask(todo.taskName)
    setAssignee(todo.assignee)
  },[todo])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(updateTodo({...todo, taskName, assignee}, history));
  }

  return (
    <div>
        <form id='todo-form' onSubmit={handleSubmit}>
          <label htmlFor='taskName'>Task Name:</label>
          <input name='taskName' onChange={(e) => setTask(e.target.value)} value={taskName || ''} />

          <label htmlFor='assignee'>Assign To:</label>
          <input name='assignee' onChange={(e) => setAssignee(e.target.value)} value={assignee || ''} />

          <button type='submit'>Submit</button>
        </form>
        <form onSubmit={(ev) => ev.preventDefault()}>
          <button
            className='remove'
            onClick={() => dispatch(deleteTodo(id, history))}
          >
            Delete
          </button>
        </form>
      </div>
    );

}

export default EditTodoWithHooks;
