import { useState } from "react";
import App from "../App";
import "../App.css";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import ToDoFooter from "./ToDoFooter";

function App4(){
    const [val, setVal] = useState([
        {
            id : Math.random(),
            text : "Learn JS",
            isCompleted : false
        },
        {
            id : Math.random(),
            text : "Learn CSS",
            isCompleted : false
        },
        {
            id : Math.random(),
            text : "Learn ReactJS",
            isCompleted : false
        }
    ]);

    return (
        <div className="App">
            <ToDoForm onAdd={(text) => {
                setVal([
                    ...val,
                    {
                        id : Math.random(),
                        text : text,
                        isCompleted : false
                    }
                ])
            }} />
            <ToDoList 
                todos={val}
                onChange={(newTodo) => {
                    setVal(val.map(todo => {
                        if(todo.id === newTodo.id){
                            return newTodo;
                        }
                        return todo
                    }))
                    
                }} 
                onDelete={todo => {
                    setVal(val.filter(t => t.id !== todo.id))
                }} 
            />
            <ToDoFooter clearCompleted={(e) => {
                setVal(val.filter(todo => !todo.isCompleted))
            }} todos={val}/>
        </div>
    );
}
export default App4