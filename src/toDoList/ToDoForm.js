import { useState } from "react"

function ToDoForm({onAdd}){
  const [text, setText] = useState("");
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        onAdd(text)
        setText("")
      }}>
      <input value={text} type="text" onChange={(e) => {
        
        setText(e.target.value)
        
      }} />
      <button>Add</button>
     </form>
    )
}

export default ToDoForm