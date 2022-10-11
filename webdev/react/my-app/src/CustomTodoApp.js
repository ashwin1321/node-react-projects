import React, {useState} from 'react'

let globalId = 0
const TodoApp = () => {

  const [tasks, setTasks] = useState([])
  const [todos, setTodos] = useState([ ])

  function  createTodo(event){
    event.preventDefault()     // default ma jana didaina 
   setTodos(oldTodos => {
     setTasks('')    // ad garesi input field bata hatxa paila lekheko
     return [...oldTodos, {todo: tasks, id: globalId++ }]})
  }

  // function tryToCheckForEnterKey(e){
  //   if(e.key === 'Enter'){
  //     createTodo()
  //   }
  // }
  function deleteItem(itemId){
    setTodos(oldTodos => oldTodos.filter(item => item.id !== itemId))
  }

  return (
    <div>
    <h1>Best To Do App Ever</h1> 
    
    <form onSubmit={createTodo} >
    <input
    // onKeyDown={tryToCheckForEnterKey}
     type="text"
     value={tasks}
     onChange = {
      event =>{setTasks(event.target.value)}
    } /> 
     &nbsp;

    <button type='submit'>Add</button>
    </form>

    <ul style={{listStyle: 'none'}} >
      {todos.map(item =>{
        return <div  key = {item.id}>
        <li >{item.todo}</li>
        <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      })}

    </ul>

    </div>
  )
}

export default TodoApp
