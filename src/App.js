import { useRef, useState , useEffect} from 'react';
import './App.css';


function App() {
  let [todos,setTodos] = useState([])
  let todo = useRef()
  
  
 
  console.log(todo.current);


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
  const editTodo = (e) =>{
   var edit = prompt("Edit your todo")
   var currentTodo = [...todos]
   currentTodo[e] = edit
    setTodos(currentTodo)
  }
  return (
    <div className="App">
     
      <h1>Todo App</h1>  
      <input ref={todo}/><button onClick={addTodo}>Add</button>
      {
        todos.map((todo,i)=>{
          return(
         
              <div key={i} >
              {todo}
            <button onClick={(e)=>{delTodo(i)}}>Delete</button>
            <button onClick={(e)=>{editTodo(i)}}>Edit</button>
            </div>
          
          )
        })
      }
    </div>
  );
}

export default App;
