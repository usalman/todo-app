import React from 'react'

function Form({inputText, setInputText}) {

  const handleChange = (e) => {
    setInputText(e.target.value)
    console.log(e.target.value);
  }

  return (
    <form>
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
