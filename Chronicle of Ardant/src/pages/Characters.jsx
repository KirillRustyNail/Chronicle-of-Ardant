import React from 'react';
import { CharacterCard } from '../components/CharacterCard.jsx';
import { playerCharacters, masterCharacters } from '../data/charactersData';

export const Characters = () => {
  return (
    <>
      <header>
        <h1>Глоссарий</h1>
        <p>Персонажи мастеров и игроков, участвующие в написании истории Арданта.</p>
      </header>

      <h2 style={{textAlign: 'center', color: '#00ffcc', fontFamily: "'Cormorant Garamond', serif"}}>
        Персонажи игроков
      </h2>
      <section className="character-grid">
        {playerCharacters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </section>

      <hr />
      <h2 style={{textAlign: 'center', color: '#00ffcc', fontFamily: "'Cormorant Garamond', serif"}}>
        Персонажи мастера
      </h2>
      <section className="character-grid">
        {masterCharacters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </section>
    </>
  );
};

