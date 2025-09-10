import { loadImage } from '../utils/loadImage.js';

export const playerCharacters = [
  {
    id: 1,
    name: "Амберт Марроу",
    race: "Человек",
    class: "Плут | Мистический ловкач",
    image: "ambert.png"
  },
  {
    id: 2,
    name: "Арнар",
    race: "Полуорк",
    class: "Варвар | Путь зверя",
    image: "arnar.png"
  },
  {
    id: 3,
    name: "Арнэ Холфхольм",
    race: "Человек",
    class: "Следопыт | Охотник на монстров",
    image: "arne.png"
  },
  {
    id: 4,
    name: "Владмир",
    race: "Человек",
    class: "Кровавый охотник | Орден ликантропа",
    image: "vladmir.png"
  },
  {
    id: 5,
    name: "Илвария Крон'тан",
    race: "Тёмный эльф",
    class: "Чародей | Некромант",
    image: "ilvaria.png"
  },
  {
    id: 6,
    name: "Томас Редклифф",
    race: "Человек",
    class: "Паладин | Клятва короны (ранее), Клятва мести",
    image: "thomas.png"
  },
  {
    id: 7,
    name: "Хефирнаал",
    race: "Человек",
    class: "Жрец | Домен смерти",
    image: "hefirnaal.png"
  }
].map(god => ({
  ...god,
  image: loadImage(god.image)
}));

export const masterCharacters = [
  {
    id: 1,
    name: "Александр Хентергофф",
    race: "Человек",
    class: "Следопыт | Сумрачный охотник",
    image: "alexander.png"
  },
  {
    id: 2,
    name: "Альма",
    race: "Высший эльф",
    class: "Паладин | Клятва преданности (ранее) | Клятвопреступник",
    image: "alma.png"
  },
  {
    id: 3,
    name: "Лидия Кроуфолл",
    race: "Человек",
    class: "Паладин | Клятва покорения",
    image: "lidiacrowfall.png"
  },
  {
    id: 4,
    name: "Лилит де Флёр Отранте",
    race: "",
    class: "",
    image: "Lilith.png"
  },
  {
    id: 5,
    name: "Соломон Вард",
    race: "Ревенант",
    class: "Воин",
    image: "solomon.png"
  }
].map(god => ({
  ...god,
  image: loadImage(god.image)
}));