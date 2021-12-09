import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodos } from '../store/todos'
import EditTodo from './EditTodo'
import CreateTodo from './CreateTodo'
import Todos from './Todos'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'

const App = () => {
  //pull in state from redux store and destructure todos
  const { todos } = useSelector((state) => {
    return {
      todos: state.todos,
    }
  })

  //brings in actions from store
  const dispatch = useDispatch()

  //componentDidMount fetches todos
  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <Router>
      <div id="main">
        <h1>
          <Link to="/">Todos ({todos.length})</Link>
        </h1>
        <Link to="/todos/create">Create A New Todo</Link>
        <Switch>
          <Route path="/todos/create" component={CreateTodo} />
          <Route path="/todos/:id" component={EditTodo} />
          <Route exact path="/" component={Todos} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
