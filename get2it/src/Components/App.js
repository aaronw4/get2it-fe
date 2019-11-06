import React from 'react';
import '../App.css';
import Register from './Register'
import OnBoarding from './OnBoarding'

function App() {
  return (
    <div className="App">
      <Register />
      <div>
        <OnBoarding />
      </div>
    </div>
  );
}

export default App;
