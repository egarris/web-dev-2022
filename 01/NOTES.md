# Notes

## `useState`

![img](./hooks/src/imgs/useState.webp)

Simplest hook of them all. `useState` allows functional components to hold state. Import `useState` from the `react` library. Using [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) syntax, we access state and a setter. 

A minimal example:

```js
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0) 

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
```

Define all hooks inside the function scope. By convention, prefix the second variable with `set`. `setCount` in this case is analogous to `this.setState` function in class components. You can call multiple `useState` hooks in a single component (more on that later)

By clicking the button, `count` is incremented by 1. Since state is changed via `setCount`, `<Counter />` rerenders with the new `count`. Works exactly like class components. 

<br />

## `useEffect`

![img](./hooks/src/imgs/useEffect-1.webp)

In the simplest cases, you can use `useEffect` to replace `componentDidMount`. It takes in two parameters: a callback function and a dependency array. When the functional component mounts, `useEffect` is run. The empty array signifies that the callback function should run once. 

![img](./hooks/src/imgs/useEffect-2.webp)

In the above example, `count` is included in the dependency array. Therefore, the callback function will run any time `count` changes.

Here is a minimal example:

```js
import { useState, useEffect } from 'react' 

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useEffect has run!')
  }, [])

  useEffect(() => {
    console.log('count:', count)
  }, [count])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
```

### The Flow

1. `<Counter />` is mounted and rendered to the DOM.
2. `useEffect` runs its callback functions: `"useEffect has run!"` and `count` is logged.
3. When the user clicks the button, `count` is incremented
4. `useEffect` that contains `count` in its dependency array runs its callback function 
5. `<Counter />` rerenders due to state change
6. The UI now correctly represents the incremented `count`

Note that the first `useEffect` is only run once, upon mounting of component, which leads to an useful heuristic: 

>`useEffect` with an empty dependency array is analogous to `componentDidMount`.

<br />

## Multiple `useState`

If you use `useState` to hold an object, note that it does not merge state (unlike `setState`)

```js
const [form, setForm] = useState({name: 'Tom', age: 20})

setForm({name: 'Sam'}) // ❌ age will be deleted
setForm({name: 'Sam', age: form.age}) // 🟢 correct way
```

A solution is to use separate `useState` for each value. 

```js
function Form() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)

  return (
    <>
      <p>{name}</p>
      <p>{age}</p>
      <input name="name" value={name} onChange={() => setName(e.target.value)} />
      <input name="age" value={name} onChange={() => setAge(e.target.value)} />
    </>
  )
}
```

### Flow

1. `useState` hooks are called, and `<Form />` returns JSX.
3. `name` and `age` is read from `useState`, and JSX is rendered to the DOM.
4. User types into the first `name` input field.
5. For each keystroke, the anonymous callback function runs, calling `setName`.
6. `<Form />` is rerendered in response to change in `name`.
7. User types into the second `age` field.
8. `<Form />` is rerendered in response to change in `age`.

**Bonus**: look into how [`useReducer`](https://reactjs.org/docs/hooks-reference.html#useeffect) can organize multiple `useStates`.

<br />

## `Redux`

Redux library exposes its API via hooks. Instead of `connect`, `mapStateToProps` and `mapDispatchToProps`, use the hooks `useSelector` and `useDispatch` from the `react-redux` library.

A toy example:

```js
import { useSelector, useDispatch } from 'react-redux'

function Redux() {
  const count = useSelector(state => state.count) // like mapStateToProps, count variable is mapped to state.count
  const dispatch = useDispatch() // access dispatch
  
  return (
    <button onClick={() => dispatch({type: 'INCREMENT'})}>{count}</button> // dispatch action
  )
}
```

No `connect`, no `mapStateToProps`, no `mapDispatchToProps`, no exporting different components. Just import the hooks, call the hooks inside the functional component, and use them when you need 'em. Much simpler right? 

<br />

## `React Router`

Similarly, React Router also exposes its API via hooks. The ones relevant to us are `useLocation`, `useHistory`. Same pattern as before: import the library-custom hooks from `react-router-dom`, and call them inside the functional component.

```js
import { useLocation, useHistory } from 'react-router-dom'

function App() {
  // if you need to use location or history, simply invoke the hooks
  const location = useLocation()
  const history = useHistory()
  
  // you now have access to the React router's location and history object 
}
```
