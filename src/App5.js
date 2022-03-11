import { useState, useEffect } from "react";
import useCoronaData from "./useCoronaData";
function App5() {
  
  const [value, setValue] = useState("");
  const data = useCoronaData(value)
  // const [data, setData] = useState();

  // useEffect(() => {
  //   fetch(`https://corona-api.com/countries/${value}`)
  //   .then(e => e.json())
  //   .then(e => setData(e.data))
  // }, [value])

  let confirmed = "";
  
  if(data !== undefined){
    confirmed = data.name
  }

  return (<div>
      <input type="text"
      value={value}
      onChange={(ev) => {
        setValue(ev.target.value)
      }} />
      <h2>{confirmed}</h2>
  </div>)
}

export default App5