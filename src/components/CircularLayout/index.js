import React from 'react';
import './index.css'; // CSS file for styling the square cards

const CircularSquareCards = () => {
  const numberOfCards = 10; // Adjust the number of cards as per your requirement
  const cards = Array.from({ length: numberOfCards }, (_, index) => index + 1);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      {cards.map((number, index) => (
        <div key={index} className="square-card" style={{ transform: `rotate(${index * (360 / numberOfCards)}deg)` }}>
          {number}
        </div>
      ))}
    </div>
  );
};

export default CircularSquareCards;
