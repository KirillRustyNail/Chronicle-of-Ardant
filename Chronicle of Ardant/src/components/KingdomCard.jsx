import React from 'react';

export const KingdomCard = ({ kingdom }) => {
  return (
    <div 
      className="kingdom-card" 
      style={{ backgroundImage: `url(${kingdom.image})` }}
      data-name={kingdom.name}
    ></div>
  );
};

