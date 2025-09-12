// Автоматически сгенерированный файл
// Предзагружаем все изображения

import ThewrathoftheForestKing from '../images/The-wrath-of-the-Forest-King.png';
import alexander from '../images/alexander.png';
import alma from '../images/alma.png';
import almerin from '../images/almerin.png';
import ambert from '../images/ambert.png';
import arnar from '../images/arnar.png';
import arne from '../images/arne.png';
import askadia from '../images/askadia.png';
import darklouf from '../images/darklouf.png';
import dragonisles from '../images/dragonisles.png';
import edler from '../images/edler.png';
import godir from '../images/godir.png';
import grankedor from '../images/grankedor.png';
import hagira from '../images/hagira.png';
import hefirnaal from '../images/hefirnaal.png';
import ilvaria from '../images/ilvaria.png';
import issur from '../images/issur.png';
import lidiacrowfall from '../images/lidiacrowfall.png';
import margulis from '../images/margulis.png';
import navbg from '../images/nav-bg.png';
import niyra from '../images/niyra.png';
import obsidianbackground from '../images/obsidian-background.png';
import osterbond from '../images/osterbond.png';
import thai from '../images/thai.png';
import thomas from '../images/thomas.png';
import urshilak from '../images/urshilak.png';
import vladmir from '../images/vladmir.png';
import wastelands from '../images/wastelands.png';
import zakariy from '../images/zakariy.png';
import template from '../images/template.png';

export const images = [
  { name: 'The-wrath-of-the-Forest-King.png', src: ThewrathoftheForestKing },
  { name: 'alexander.png', src: alexander },
  { name: 'alma.png', src: alma },
  { name: 'almerin.png', src: almerin },
  { name: 'ambert.png', src: ambert },
  { name: 'arnar.png', src: arnar },
  { name: 'arne.png', src: arne },
  { name: 'askadia.png', src: askadia },
  { name: 'darklouf.png', src: darklouf },
  { name: 'dragonisles.png', src: dragonisles },
  { name: 'edler.png', src: edler },
  { name: 'godir.png', src: godir },
  { name: 'grankedor.png', src: grankedor },
  { name: 'hagira.png', src: hagira },
  { name: 'hefirnaal.png', src: hefirnaal },
  { name: 'ilvaria.png', src: ilvaria },
  { name: 'issur.png', src: issur },
  { name: 'lidiacrowfall.png', src: lidiacrowfall },
  { name: 'margulis.png', src: margulis },
  { name: 'nav-bg.png', src: navbg },
  { name: 'niyra.png', src: niyra },
  { name: 'obsidian-background.png', src: obsidianbackground },
  { name: 'osterbond.png', src: osterbond },
  { name: 'thai.png', src: thai },
  { name: 'thomas.png', src: thomas },
  { name: 'urshilak.png', src: urshilak },
  { name: 'vladmir.png', src: vladmir },
  { name: 'wastelands.png', src: wastelands },
  { name: 'zakariy.png', src: zakariy },
  { name: 'template.png', src: template }
];

export const loadImage = (imageName) => {
  const image = images.find(img => img.name === imageName);
  return image ? image.src : loadImage('template.png'); 
};

