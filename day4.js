import React from 'react'
import { useState } from 'react'
import "./Style.css" 
 const Functional = () => {
// use state is an replacement for state in class component
     const [count, setCount] = useState(0)
     //       var    function     var first="anwaar"

  return (
    <div className='cont'>   
 <h1> Styling Using Function and Class Componenet  </h1>
 <h1>{count}</h1>
 <br></br>

 <button className='btn1' onClick={()=>setCount(count+1)}>To see styling in Function Component</button>
 <button  onClick={()=>setCount(count-1)}>DECREMENT</button><br></br>
 <button  onClick={()=>setCount(0)}>RESET</button>
