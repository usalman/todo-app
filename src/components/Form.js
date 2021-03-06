import React, {useRef} from 'react'

function Form({inputText, setInputText, todos, setTodos, setStatus}) {

  const inputRef = useRef(null)
  const handleChange = (e) => {
    e.preventDefault()
    setInputText(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random() * 12134}
    ])
    inputRef.current.value = ""
  }

  const handleStatusChange = (e) => {
    setStatus(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} onChange={handleChange} type="text" />
      <button type="submit">Button</button>
      <div className="select">
        <select onChange={handleStatusChange} name="todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form
