import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Todos from './Todos';
import CreateTodo from './CreateTodo';
import EditTodo from './EditTodo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../store/todos';

const App = () => {
  const dispatch = useDispatch()
  
  const {todos} = useSelector(state => {
    return {
      todos: state.todos
    }
  })

  useEffect(() => {
    dispatch(fetchTodos())
  },[])

  return (
    <Router>
        <div id='main'>
          <h1>
            <Link to='/'>Todos ({todos.length})</Link>
          </h1>
          <Link to='/todos/create'>Create A New Todo</Link>
          <Switch>
            <Route exact path='/' component={Todos} />
            <Route path='/todos/create' component={CreateTodo} />
            <Route path='/todos/:id' component={EditTodo} />
          </Switch>
        </div>
      </Router>
    );
}

export default App;
