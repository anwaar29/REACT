import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));



// creating a function component
const Navbar=(props)=>{
  
  return (<>
  <h1>i am nav  {props.name}  </h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Consequatur earum quas modi explicabo voluptates quam temporibus, 
    perferendis eum voluptas esse, minima impedit beatae.
     Rem tenetur repellendus facere architecto eum molestias.</p>
  </>)
}

 // time ko screen p laane ke liye 
const Time=()=>{
const time=new Date().toLocaleTimeString();
return <h1>Time:{time} </h1>
}

 // render ko root me rakh denge hr second chlne k liye 
setInterval(() => {

root.render(
  <>
    <App />
    <input type="text"/>
    <Navbar name='dinesh'/>
    <Time/>
  </>
)
}, 1000);
