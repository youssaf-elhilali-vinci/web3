// src/App.jsx
import React from 'react';
import './App.css';
import ClickCounter from './ClickCounter';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App({ title }) {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ClickCounter 
          title="Compteur de clics" 
          message="You are a master in the art of clicking!" 
          message2="Please click on me now !" 

        />
      </div>
    </>
  );
}

export default App;