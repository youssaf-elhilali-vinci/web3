// src/ClickCounter.jsx
import React, { useState } from 'react';

const ClickCounter = ({ title, message, message2 }) => {
  const initialCount = JSON.parse(localStorage.getItem("count") )
  const [count, setCount] = useState(initialCount);
  const [estDessus, setEstDessus] = useState(false);


  return (
    <div>
      <h1>{title}</h1>
      <button
        onClick={() =>{
            setCount(count+1);
           localStorage.setItem("count", JSON.stringify(count));
        }} 
        onMouseEnter ={() => setEstDessus(true)} 
        onMouseLeave ={() => setEstDessus(false)} 
      >
        {estDessus && <p>{message2}</p>}
        count is {count}
    
      </button>
      
        {/*le && est une condition, si à gauche est true alors la condition s'executera*/}
        {count >=10 && <p>{message}</p> }
        
    </div>
  );
}


export default ClickCounter;