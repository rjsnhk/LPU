import React, { useState } from 'react'

const Validation = () => {
const [formData,setFormData]=useState({
  name:'',
  email:'',
  password:'',
});

function handleChange(e){
  const {name,value}=e.target;
  setFormData({
    ...formData,
    [name]:value
  })
}
function handleSubmit(e){
  e.preventDefault();
  console.log("form submitted", formData);
}


  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label>Enter your name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
        <br/> <br />
        <label>Enter your email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <br/><br />
        <label>Enter your password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          <br /><br />
          <button type='submit'>submit</button>

      </form>
    </div>
  )
}

export default Validation
