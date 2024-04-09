import React, { useState } from 'react';

function FormComponent() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <h2>Form Component</h2>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username:</label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                value={formData.username} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
              />
            </div>
            <button style={{textAlign:"center",justifyContent:"center"}}type="submit">Submit</button>
          </form>
        ) : (
          <div>Submitted</div>
        )}
      </div>
    </div>
  );
}

export default FormComponent;
