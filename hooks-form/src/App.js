import React, { useState, useEffect } from 'react';

function FormComponent() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false); 

  useEffect(() => {
    if (isSubmitting) {
      const isValid = Object.keys(errors).length === 0;
      if (isValid) {
        console.log('Form submitted with data:', formData);
        setIsSubmitting(false);
        setSubmitted(true); 
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors, formData, isSubmitting]);

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.username.trim()) {
      errors.username = 'Username is required';
      isValid = false;
    }

    if (!formData.password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setIsSubmitting(true);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Advanced Form Component</h2>
      {!submitted ? ( 
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="username" style={styles.label}>Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
            {errors.username && <span style={styles.error}>{errors.username}</span>}
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
            {errors.password && <span style={styles.error}>{errors.password}</span>}
          </div>
          <button type="submit" disabled={isSubmitting} style={styles.button}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      ) : (
        <p style={styles.submittedMessage}>Form submitted successfully!</p> 
      )}
    </div>
  );
}

const styles = {
  container: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    margin: '0 auto',
    marginTop: '50px',
    maxWidth: '400px',
  },
  title: {
    marginBottom: '20px',
    fontSize: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    fontSize: '16px',
  },
  input: {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },
  submittedMessage: {
    color: 'green',
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

export default FormComponent;
