import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({onLogin}) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    onLogin(credentials.username);
    navigate('/');
  }

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const { username, password } = credentials;
    
  //   try {
  //     const response = await fetch('/api', {
  //       method: 'POST',
  //       body: JSON.stringify({username, password}),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }); 

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data);
  //       if(data.message === 'success'){
  //         onLogin();
  //         navigate('/');
  //       }else if(data.message === 'admin'){
  //           // navigate('/AdminPage');
  //         }else{
  //         alert('Invalid username or password');
  //       }
  //       } else {
  //         console.error("server es with an error", response.status);
  //       }
  
  //     }catch(err){
  //       console.log("?", err);
  //     }
  // };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={() => navigate('/signup')}>Go to Sign Up</button>
    </div>
  );
};

export default LoginPage;