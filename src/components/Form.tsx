import React from "react";



const Form = ({inputText, setInputText, todos, setTodos, setStatus} : {inputText:any, setInputText:any, todos: Array<string>, setTodos:any, setStatus:any}) =>{

    const inputTextHandler = (e:React.ChangeEvent<HTMLInputElement>):void =>{
        setInputText(e.target.value);
    };

    const submitHandler = (e:React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLInputElement>):void =>{
        e.preventDefault();
        
        setTodos([
            ...todos,
            {text:inputText, completed: false, id: Math.random()*1000}
        ]);
        setInputText("");
        
    };

    const statusHandler = (e:React.ChangeEvent<HTMLSelectElement>) =>{
        setStatus(e.target.value)
        
    };


    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitHandler}  className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler}  name="todos" className="filter-todo">
                <option  value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>

    );

}


export default Form;