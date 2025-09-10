import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <Link to="/">Главная</Link>
      <div className="dropdown">
        <a href="#">Вселенная Арданта</a>
        <div className="dropdown-content">
          <Link to="/pantheon">Пантеон Богов</Link>
          <Link to="/characters">Глоссарий</Link>
          <Link to="/kingdoms">Территории</Link>
          <a href="#">Истории</a>
        </div>
      </div>
      <Link to="/campaigns">Кампании</Link>
    </nav>
  );
};

