// src/components/ColorBox.jsx
import React, { useState } from 'react';

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

const ColorBox = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = () => {
    if (colorIndex + 1 === colors.length) {
      setColorIndex(0);
    } else {
      setColorIndex(colorIndex + 1);
    }
  };

  const currentColor = colors[colorIndex];
  let nextColor;

  if (colorIndex + 1 === colors.length) {
    nextColor = colors[0];
  }else{
    nextColor = colors[(colorIndex + 1)];
  }

  return (
    <div style={{ backgroundColor: currentColor, width: '200px', height: '200px', padding: '20px', margin: '10px' }}>
      <button onClick={handleClick}>{nextColor}</button>
      <p>{currentColor}</p>
    </div>
  );
};

export default ColorBox;