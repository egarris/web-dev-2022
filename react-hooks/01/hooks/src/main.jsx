import React from 'react'
import ReactDOM from 'react-dom'
import 'virtual:windi.css'
import './index.css'
import { Counter, CounterEffect } from './Counters.jsx'
import { Form } from './Form.jsx'

export default function Main({ children }) {
  return (
    <div>
      <h1 className="text-center mb-8 mt-4">React Hooks Demo</h1>
      <div className="p-4 border border-gray-400 max-w-400px mx-auto">
        {children}
      </div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Main>
      <div className="p-4 flex flex-col justify-center demo">
        <Counter />
        <CounterEffect />
        <Form />
      </div>
    </Main>
  </React.StrictMode>,
  document.getElementById('root')
)
