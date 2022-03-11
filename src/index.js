import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./App.css"
import reportWebVitals from './reportWebVitals';
import App from './App';
import App2 from "./App2"
import  App3 from "./App3"
import App4 from "./toDoList/App4"
import App5 from "./App5"

ReactDOM.render(
  <React.StrictMode>
    <div className='body'>
     {/* <App text="Christine Margaret Sinclair (eng. Christine Margaret Sinclair; born June 12, 1983, Burnaby, British Columbia) is a Canadian football player, striker. Member of the Canadian national team since 2000, since 2007 - its captain, in the national team - Olympic champion (2020) and two-time bronze medalist of the Olympic football tournaments (2012 and 2016), champion of CONCACAF 2010 and Pan American Games 2011. Silver medalist and most valuable player of the 2002 World Championship among girls (under 19).   shfajshfajshfaj shfajshfajshfaj shfajshfaj" />, */}
     {/* <App2 /> */}
     {/* <App3 /> */}
     {/* <App4 /> */}
    <App5/>
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
