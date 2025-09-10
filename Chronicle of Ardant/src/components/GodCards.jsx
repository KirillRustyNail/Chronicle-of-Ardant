import React from 'react';

export const GodCard = ({ god }) => {
  return (
    <div className="god-card">
      <img src={god.image} alt={god.name} />
      <h2>{god.name}</h2>
      <h3>{god.title}</h3>
      <p>
        <strong>Мировоззрение:</strong> {god.alignment}<br />
        <strong>Домены:</strong> {god.domains}<br />
        <strong>Описание:</strong> {god.description}
      </p>
    </div>
  );
};

