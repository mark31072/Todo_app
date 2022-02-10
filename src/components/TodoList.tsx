import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, setTodos, filtredTodos} :{todos: Array<string>, setTodos:any,filtredTodos: Array<any>}) =>{
console.log(todos)
    return(
        <div className="todo-container">
        <ul className="todo-list">

        {filtredTodos.map((todo:any) =>(
            <Todo
            todo={todo}
            setTodos = {setTodos} 
            todos={todos} 
            key={todo.id} 
            text={todo.text}/>
        ))}

         </ul>
        </div>
    )
}

export default TodoList;