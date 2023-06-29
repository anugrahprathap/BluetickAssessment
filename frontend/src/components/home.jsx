import React, { useState, useEffect } from "react";
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import './style.css';

function Home() {
  const cookies = new Cookies();
  const [details, setDetails] = useState([]);
  const isLoggedIn = cookies.get('loggedIn');
  const navigate = useNavigate();

  useEffect(() => {
    let data;
    // Check if the user is loggedin
    if (isLoggedIn) {
      // Fetch the list of books from the server
      axios.get(`http://127.0.0.1:8000/books/`)
        .then(response => {
          data = response.data;
          setDetails(data);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      alert("You are not authorized");
      navigate("/");
    }
  }, []);

  const handleLogout = () => {
    // Logout the user by removing the cookie and navigating to the login page
    navigate("/");
    cookies.remove('loggedIn', { path: '/' });
  };

  if (isLoggedIn) {
    return (
      <div>
        <h1>List of Books</h1>
        <center>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              {details && details.length > 0 ? (
                details.map((output, id) => (
                  <tr key={id}>
                    <td>{output.Book}</td>
                    <td>{output.Author}</td>
                  </tr>
                ))
              ) : (
                <div>No details available</div>
              )}
            </tbody>
          </table>
        </center>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    );
  }
}

export default Home;
