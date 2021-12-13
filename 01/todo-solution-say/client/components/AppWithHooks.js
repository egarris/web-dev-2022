import React, {useEffect}from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CreateTodoHooks from './CreateTodoHooks';
import EditTodoWithHooks from './EditHooks';
import TodosWithHooks from './TodosWithHooks';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../store/todos';


const AppWithHooks = () => {

  const dispatch = useDispatch()
  const todos = useSelector((state) => { return state.todos} )

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  console.log(todos)

  return (
    <Router>
      <div id='main'>
        <h1>
          <Link to='/'>Todos ({todos.length})</Link>
        </h1>
        <Link to='/todos/create'>Create A New Todo</Link>
        <Switch>
          <Route exact path='/' component={TodosWithHooks} />
          <Route path='/todos/create' component={CreateTodoHooks} />
          <Route path='/todos/:id' component={EditTodoWithHooks} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppWithHooks
