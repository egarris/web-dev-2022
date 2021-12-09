import axios from 'axios'

const SET_TODO = 'SET_TODO'

const setTodo = (todo) => {
  return {
    type: SET_TODO,
    todo,
  }
}

export const fetchTodo = (id) => {
  // console.log('id', id)
  return async (dispatch) => {
    // console.log('fetchTodo');
    const { data } = await axios.get(`/api/todos/${id}`)
    // console.log('thunk', data);
    dispatch(setTodo(data))
  }
}

export default (state = {}, action) => {
  // console.log('default', state)
  switch (action.type) {
    case SET_TODO:
      return action.todo
    default:
      return state
  }
}
