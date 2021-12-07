import React from 'react'

function Todo({ text }) {
  return (
    <div>
      <li className="todoItem">{text}
        <button>Complete</button>
        <button>Delete</button>
      </li>
    </div>
  )
}

export default Todo
