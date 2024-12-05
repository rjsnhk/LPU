import React, { useState } from 'react';

function FormHandling() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  function formSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log('Form submitted:', data);
  }

  function onChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h2>Form Handling</h2>
      <form onSubmit={formSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={onChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormHandling;
