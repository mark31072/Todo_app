import React, {useState, useEffect} from 'react';
import './App.css';

//Import components
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filtredTodos, setFiltredTodos] = useState([]);

// it's calls once
  useEffect( () => {
    getLocalTodos();
  },[])

// it's calls every time than component
  useEffect( () => {
    filterHandler();
    saveLocalTodos();
    
  }, [todos, status])


  const filterHandler = () =>{
    switch(status){
      case "completed":
        setFiltredTodos(todos.filter((todo:any) => todo.completed === true))
      break;
      case "uncompleted":
        setFiltredTodos(todos.filter((todo:any) => todo.completed === false))
      break;
      default:
        setFiltredTodos(todos)
      break;
    }
  };

  //save to local

  const saveLocalTodos = () => {
    localStorage.setItem("todos",JSON.stringify(todos));
  };

  const getLocalTodos = () => {
  if(localStorage.getItem("todos") === null){
    localStorage.setItem("todos", JSON.stringify([]))
  }else{
    let todoLocal =  JSON.parse(localStorage.getItem("todos")|| "")
    setTodos(todoLocal)
  }
  };
 


  return (
    <div className="App">
      <header>
        <h1>My Todo App</h1>
      </header>
      <Form
      inputText = {inputText} 
      setInputText = {setInputText} 
      todos = {todos}
      setTodos = {setTodos}
      setStatus = {setStatus}
      />
      <TodoList
      todos = {todos} 
      setTodos = {setTodos}
      filtredTodos = {filtredTodos}
      />
    </div>
  );
}

export default App;
