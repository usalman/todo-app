import React from 'react'

function Todo({ text, todos, setTodos, todo }) {

  const handleDelete = (e) => {
    e.preventDefault()
    setTodos(todos.filter(el => el.id !== todo.id))
  }

  return (
    <div>
      <li className="todoItem">{text}
        <button>Complete</button>
        <button onClick={handleDelete}>Delete</button>
      </li>
    </div>
  )
}

export default Todo
