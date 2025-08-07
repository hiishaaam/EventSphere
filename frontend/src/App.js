// eventsphere-frontend/src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure you have axios installed
import logo from './logo.svg';
import './App.css';

function App() {
  // State variable to store the message from the backend
  const [backendMessage, setBackendMessage] = useState('');

  // useEffect hook to run side effects (like fetching data)
  useEffect(() => {
    // Fetch data from the backend API
    axios.get('http://localhost:4000/api')
      .then(response => {
        // Set the message from the response data
        setBackendMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
        setBackendMessage('Could not connect to backend.');
      });
  }, []); // The empty array [] means this effect runs only once

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to EventSphere</h1>
        <p>
          {/* Display the message from the backend here */}
          <strong>Message from Backend:</strong> {backendMessage}
        </p>
      </header>
    </div>
  );
}

export default App;