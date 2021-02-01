import { useRef, useState } from 'react';
import './App.css';

function App() {
  let [todos,setTodos] = useState([])
  let todo = useRef()

  const addTodo =()=>{
    setTodos([...todos,todo.current.value])
    todo.current.value =''
  }
  const delTodo=(i)=>{
    console.log("index is = > " ,i);
    var newTodo = [...todos];
    console.log("new todo is => " ,newTodo);
    newTodo.splice(i,1);
    setTodos(newTodo);
  }
  return (
    <div className="App">
      <h1>Todo App</h1>  
      <input ref={todo}/><button onClick={addTodo}>Add</button>
      {
        todos.map((todo,i)=>{
          return(
            <div key={i}>
              {todo}
            <button onClick={(e)=>{delTodo(i)}}>Delete</button>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
