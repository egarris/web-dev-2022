import { useState, useEffect } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className="component">Counter</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Increment
      </button>
    </div>
  )
}

function CounterEffect() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('%c CounterEffect running!', 'color: lightgreen')
  }, [count])

  return (
    <div>
      <h1 className="component">CounterEffect</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1)
          console.log('%c onClick, count:', 'color: skyblue', count)
        }}
      >
        Increment
      </button>
    </div>
  )
}

export { Counter, CounterEffect }
