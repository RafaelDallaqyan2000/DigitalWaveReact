function ToDoItem({todo, onChange, onDelete}) {   
    return (
        <div>
            <label>
                <input checked={todo => todo.isCompleted} onChange={e => {
                    // e.target.checked
                    onChange({
                        ...todo, 
                        isCompleted : e.target.checked
                    })
                }} type="checkbox" />
                {todo.text}
                <button onClick={() => {
                    onDelete(todo)
                }}>X</button>
            </label>
        </div>
    )
}
export default ToDoItem