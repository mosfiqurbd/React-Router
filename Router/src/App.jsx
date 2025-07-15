import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
const App =() => {
const [todos,setTodos] = useState([]);
const [todoTitle,setTodoTitle] = useState("");
const fetchAllTodos = async () => {
 fetch('http://localhost:3000/todos')
  .then((res)=> res.json())
  .then((data)=> {
    setTodos(data);
  });
};

useEffect(()=> {
  fetchAllTodos();
  //  fetch(`http://localhost:3000/todos`)
  // .then((res)=> res.json())
  // .then((data)=> {
  //   setTodos(data);
  // });
},[]);

const submitHandler = async(e) => {
  if (!todoTitle.trim()=== "") {
    return alert("Please provide a  todo title");
  }
  e.preventDefault();
console.log("I am submitted");
console.log(todoTitle,"todoTitle");
fetch(`http://localhost:3000/todos`, {
    method: 'POST',
    body: JSON.stringify({ title: todoTitle, isCompleted: false}),
    headers: {
      "Content-Type":"application/json",
    },
}).then(() => {
  fetchAllTodos();
  setTodoTitle("");
});
};
const removeHandler =  (todoId) =>
  fetch(`http://localhost:3000/todos/${todoId}`, {
    method: 'DELETE',
  }).then(() => {
    fetchAllTodos();
  });
  
  return (
    <>
    {/* <Navbar /> */}
    <form onSubmit={submitHandler}>
        <input type='text'value={todoTitle}
        onChange={(e)=> setTodoTitle(e.target.value)}/>
        <button type='submit'>Add Todo</button>
        </form>
        <hr/>
        <h2>All Todos</h2>
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>
                    <span>{todo.title}</span>
                    <button onClick={() => removeHandler(todo.id)}>Remove Todo</button>
                </li>
            ))}
        </ul>
    </>
  )   
};

export default App;

 

