import React from 'react';
import { GodCard}  from '../components/GodCards.jsx';
import { godsData } from '../data/godsData';

export const Pantheon = () => {
  return (
    <>
      <header>
        <h1>Пантеон Арданта</h1>
        <p>Столпы Мироздания. Забытые и поклоняемые, жестокие и мудрые — сущности, что формируют судьбу мира.</p>
      </header>

      <section className="pantheon">
        {godsData.map(god => (
          <GodCard key={god.id} god={god} />
        ))}
      </section>
    </>
  );
};

