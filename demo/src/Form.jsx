import { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)

  const handleChange = e => {
    console.log('%c handleChange', 'color: skyblue')
    const { value } = e.target

    if (e.target.name === 'name') setName(value)
    else setAge(value)

    console.log('%c value:', 'color: palevioletred', value)
  }

  return (
    <div>
      <h1 className="component">Form</h1>
      <div className="flex justify-around border border-gray-300">
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
      </div>

      <input
        name="name"
        type="text"
        value={name}
        placeholder="name"
        onChange={handleChange}
      />
      <input name="age" type="number" value={age} onChange={handleChange} />
    </div>
  )
}

export { Form }
