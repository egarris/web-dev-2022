# Notes

## `useState`

Import `useState` from the `react` library. Using [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) syntax, we access state and a setter. 

A minimal example:

```js
const [count, setCount] = useState(0) 
// usually, useState is called with a default value. In this case, count set to 0
```

Hook resides inside the functional component. By convention, we prefix the second variable with `set`. `setCount` in this case is analogous to `this.setState` function in class components. Note `setCount` only updates the variable `count`. You can call multiple `useState` hooks in a single component (more on that later)

```js
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

By clicking the button, `count` is incremented by 1. Since state is changed via `setCount`, `<Counter />` rerenders with the new `count`. Works exactly like class components. 

## `useEffect`

Example below is analogous to `componentDidMount`:

```js
useEffect(() => {
  console.log('useEffect has run!')
}, [])
```

Its parameters are a callback function and a dependency array. When the functional component mounts, the callback function is run once. The empty array signifies that the callback function should run once. Consider this example:

```js
function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useEffect has run!')
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

1. Counter is mounted
2. Callback in `useEffect` is run
3. When the user clicks on the button, `setCount` passes in the current `count` + 1
4. `count` state is updated
5. `<Counter />` rerenders
6. Since `count` is in the dependency array, `useEffect` is run per `count` change

**Try to take out count in the dependency array and observe what happens**

A general rule of thumb: `useEffect` with an empty dependency array is analogous to `componentDidMount`.

## Multiple `useState`

While technically you can use `useState` to create an object, it does not merge state. 

```js
const [form, setForm] = useState({name: 'Tom', age: 20})

setForm({name: 'Sam'}) /* 🛑 form will now only have name as key */
setForm({name: 'Sam', age: form.age}) /* 🟢 form will keep its key/value pairs */
```

An obvious solution is to use `useState` with atomic values: a `useState` for `name`, and another `useState` for `age`.

```js
function Form() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)

  return (
    <>
      {name || 'Name'} and {age || '0'} 
      <input value={name} onChange={() => setName(e.target.value)} />
      <input value={name} onChange={() => setAge(e.target.value)} />
    </>
  )
}
```

The flow goes something like this:

1. `<Form />` will be mounted.
2. `useState` hooks are executed.
3. JSX reads values from `name` and `age` and is rendered to the DOM.
4. User types into the first name input field.
5. For each keystroke, the anonymous callback function runs, calling `setName`.
6. `<Form />` is rerendered because `name` is changed.
7. User types into the second age field.
8. Same steps are repeated.

You may imagine when multiple `useStates` are used, especially in complex forms. This is when [`useReducer`](https://reactjs.org/docs/hooks-reference.html#useeffect) comes into play.

## Redux

Redux library exposes its API via hooks. Instead of `connect`, `mapStateToProps` and `mapDispatchToProps`, use `useSelector` and `useDispatch` from the `react-redux` library.

`useDispatch` as you guess it, returns the dispatch method. Usually, you return


## React Router

Similarly, React Router also exposes its API via hooks. The ones relevant to us today are `useLocation`, `useHistory`.
