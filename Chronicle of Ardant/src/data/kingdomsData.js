import { loadImage } from '../utils/loadImage.js';

export const kingdomsData = [
  {
    id: 1,
    name: "Аскадия",
    image: "askadia.png"
  },
  {
    id: 2,
    name: "Аэрнар",
    image: "aernar.jpg"
  },
  {
    id: 3,
    name: "Гранкедор",
    image: "grankedor.png"
  },
  {
    id: 4,
    name: "Дарклоуф",
    image: "darklouf.png"
  },
  {
    id: 5,
    name: "Драконьи острова",
    image: "dragonisles.png"
  },
  {
    id: 6,
    name: "Маунтхолд",
    image: "northlands.jpg"
  },
  {
    id: 7,
    name: "Хагира",
    image: "hagira.png"
  },
  {
    id: 8,
    name: "Эдлер",
    image: "edler.png"
  },
  {
    id: 9,
    name: "Эшленд",
    image: "wastelands.png"
  }
].map(god => ({
  ...god,
  image: loadImage(god.image)
}));