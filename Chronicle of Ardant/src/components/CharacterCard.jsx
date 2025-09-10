import React from 'react';

export const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>
        <strong>Раса:</strong> {character.race}<br />
        {character.class && <><strong>Класс:</strong> {character.class}</>}
      </p>
    </div>
  );
};

