function ToDoFooter({todos, clearCompleted}){
    const completedSize = todos.filter(todo => todo.isCompleded).length
    return (
        <div>
            <span>{completedSize}/{todos.length} Completed</span>
            <button onClick={clearCompleted}>Clear complated</button>
        </div>
    )
}
export default ToDoFooter