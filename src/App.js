import './App.css';
import { useState } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {

  const [inputText, setInputText] = useState('')
  
  return (
    <div className="App">
      <Form inputText={inputText} setInputText={setInputText}/>
      <TodoList />
    </div>
  );
}

export default App;
