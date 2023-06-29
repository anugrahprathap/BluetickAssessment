import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import './style.css';
import validator from 'validator';

function Login() {
  const cookies = new Cookies();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    // Validate the email format
    setIsValidEmail(validator.isEmail(username));

    if (username !== "" && password !== "" && isValidEmail) {
      try {
        // Send a POST request to the login endpoint
        const response = await axios.post('http://127.0.0.1:8000/', {
          'username': username,
          'password': password
        });

        // Handle the response based on the status
        if (response['status'] === 203) {
          // Set a cookie to indicate successful login
          cookies.set('loggedIn', true, { path: '/' });
          // Navigate to the home page
          navigate('home');
        } else if (response['status'] === 201) {
          // Display an alert for wrong username or password
          alert("Wrong Username or Password");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      // Display an alert if any field is empty or email is invalid
      alert('Enter valid details');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <div className="form-group">
        {/* Input field for username */}
        <input type="email" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required/>
        {/* Input field for password */}
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
        {/* Button for submitting the form */}
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
