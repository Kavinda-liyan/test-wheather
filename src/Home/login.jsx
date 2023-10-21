import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const Login = () => {
    const fixedUsername = 'Mickey'; 
    const fixedPassword = 'Mickey99';

    if (username === fixedUsername && password === fixedPassword) {
        navigate('/home');
    } else {
        setError('Invalid username or password');
    }
  };

  return (
    <div>
      <div className="body">
        <div className="container">
          <h1 className="welcome">Welcome</h1>
        </div>
        <div className='container'>
          <div className="form">
            <div className="input">
              <label htmlFor="Name">Name :</label><br />
              <input type='text' placeholder='Enter Your name' name="Name" value={username} onChange={(e) => {setUsername(e.target.value); setError(''); }}/>
              <br /><br />
              <label htmlFor="Password">Password :</label><br />
              <input type='password' placeholder='Enter Your Password' name='Password' value={password} onChange={(e) => { setPassword(e.target.value); setError(''); }} />
              <br />
              
              <p className="error" style={{fontSize:"12px",textAlign:"center",fontWeight:"bold",color:"red"}}>{error}</p>
              <button className='button' onClick={Login}>Log in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
