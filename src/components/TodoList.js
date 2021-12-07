import React from 'react'
import Todo from './Todo'

function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div>
      <ul className="todo-list">
      {
        filteredTodos.map(todo => (
          <Todo key={todo.id} text={todo.text} todos={todos} setTodos={setTodos} todo={todo}/>
        ))
      }
      </ul>
    </div>
  )
}

export default TodoList
