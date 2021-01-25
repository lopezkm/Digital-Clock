import React, { useState, useEffect } from 'react';
import './clock.css';


function Clock()  {
     
     const [state, setState] = useState({
          time: new Date().toLocaleTimeString() 
     })

     useEffect(() => {
          let intervalID = setInterval(() =>
          updateClock(),1000);
          return () => {
               clearInterval(intervalID)
          }
     })

     function updateClock(){
          setState({
          time: new Date().toLocaleTimeString()
          });
     }
     
     return (
          <div className="time">
               <p>{state.time}</p>
          </div>
     )
}
export default Clock;