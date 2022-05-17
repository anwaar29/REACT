import React, { useState } from 'react'
import Box from './Box'
import './Preview.css'

const Preview = () => {
  const[name,setName]=useState({
    first:"",
    decond:"",
    third:""
  });
  const changeHandler=(user)=>{ //  make it higher order function
  setName(user.target.value) 
  }

  return (
    <>
      <h1 id='firstline'>EMPLOYEE FEEDBACK FORM</h1>
      <form action=''>
          <label for="name" style={{fontSize:'30px'}}>NAME:  </label>
          <input type="text" id="name" name='name' onChange={changeHandler} value={name}/><br/>
          <h1>{name}</h1>

          <label for="department" style={{fontSize:'30px'}}>DEPARTMENT:  </label>
          <input type="text" id="department" name='department'/><br/>

          <label for="rating" style={{fontSize:'30px'}}>RATING:  </label>
          <input type="number" id="rating" name='rating'/><br/>

          <button id="btn">Save</button>
      </form>
      <Box  />
      </>
  )
}

export default Preview
