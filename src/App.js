// import logo from './logo.svg';
// import './App.css';
import { useState } from "react"

function App({text, max=50}) {
  const [val, setVal] = useState(true);
  return (
    <div className="App">
      <p>
        {val ? text.substring(0, max) : text}
        
        <a 
        onClick={(ev) => {
         ev.preventDefault()
         setVal(!val)
        }} 
        href='#'>
          {val ?  " more ..." : "less"}
      </a>
      
      </p>
      
    </div>
  );
}

export default App;
