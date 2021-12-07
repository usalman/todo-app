import React from 'react'

function Todo({ text, todos, setTodos, todo }) {

  const handleDelete = (e) => {
    e.preventDefault()
    setTodos(todos.filter(el => el.id !== todo.id))
  }

  const handleComplete = (e) => {
    e.preventDefault()
    setTodos(todos.map(item => {
      if(item.id === todo.id) {
        return { ...item, completed: !item.completed }
      }
      return item
    }))
  }

  return (
    <div>
      <li className="todoItem">{text}
        <button onClick={handleComplete}>Complete</button>
        <button onClick={handleDelete}>Delete</button>
      </li>
    </div>
  )
}

export default Todo
