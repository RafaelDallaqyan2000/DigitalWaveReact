import { useEffect, useState } from "react";

export default function useCoronaData(value){


     const [data, setData] = useState();

     useEffect(() => {
       if(value.length === 2){
        fetch(`https://corona-api.com/countries/${value}`)
        .then(e => e.json())
        .then(e => setData(e.data))
       }
     }, [value])
     return data
}