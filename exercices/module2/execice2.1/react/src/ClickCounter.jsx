// src/ClickCounter.jsx
import React, { useState } from 'react';

const ClickCounter = ({ title, message }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setCount(count+1)}>
        count is {count}
        
      </button>
      
      {/*le && est une condition, si à gauche est true alors la condition s'executera*/}
        {count >=10 && <p>{message}</p> }
        
    </div>
  );
};

export default ClickCounter;