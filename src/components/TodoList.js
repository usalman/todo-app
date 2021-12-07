import React from 'react'
import Todo from './Todo'

function TodoList({ todos }) {
  return (
    <div>
      <ul className="todo-list">
      {
        todos.map(todo => (
          <Todo key={todo.id} text={todo.text}/>
        ))
      }
      </ul>
    </div>
  )
}

export default TodoList
