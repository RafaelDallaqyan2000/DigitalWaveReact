import { useState } from "react"

function App3(){
    const [val, newVal] = useState("");

    return (<div className="app3">
        <input onChange={(e) => {
            newVal(e.target.value)
        }} type="text"/>
        <h3>{val}</h3>
    </div>)
}

export default App3