import React from 'react'

function Form({inputText, setInputText, todos, setTodos}) {

  const handleChange = (e) => {
    e.preventDefault()
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos([
      ... todos, {text: inputText, completed: false, id: Math.random() * 12134}
    ])
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" />
      <button type="submit">Button</button>
      <div className="select">
        <select name="todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form
