import React from 'react';
import { KingdomCard } from '../components/KingdomCard.jsx';
import { kingdomsData } from '../data/kingdomsData';

export const Kingdoms = () => {
  return (
    <>
      <header className="kingdoms-header">
        <h1>Территории Арданта</h1>
        <p>Известные земли, державы и их судьбы, вплетённые в историю мира.</p>
      </header>

      <section className="kingdom-grid">
        {kingdomsData.map(kingdom => (
          <KingdomCard key={kingdom.id} kingdom={kingdom} />
        ))}
      </section>
    </>
  );
};
