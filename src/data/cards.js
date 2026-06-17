import geoEasy from '../assets/geo-easy.jpg';
import geoMedium from '../assets/geo-medium.jpg';
import geoHard from '../assets/geo-hard.jpg';
import foodEasy from '../assets/food-easy.jpg';
import foodMedium from '../assets/food-medium.jpg';
import foodHard from '../assets/food-hard.jpg';
import spaceEasy from '../assets/space-easy.jpg';
import spaceMedium from '../assets/space-medium.jpg';
import spaceHard from '../assets/space-hard.jpg';
import scienceEasy from '../assets/science-easy.jpg';
import scienceMedium from '../assets/science-medium.jpg';
import scienceHard from '../assets/science-hard.jpg';

const cards = [
  {
    id: 1,
    subject: "Geography",
    difficulty: "Easy",
    question: "What country does this flag belong to?",
    answer: "Brazil. The green and yellow flag with a blue globe in the center belongs to Brazil. The 27 stars on the globe represent the country's states and the Federal District.",
    image: geoEasy
  },
  {
    id: 2,
    subject: "Geography",
    difficulty: "Medium",
    question: "What country is this landmark in?",
    answer: "Italy. The Colosseum is in Rome, Italy. It was built between 70 and 80 AD and could hold up to 80,000 spectators.",
    image: geoMedium
  },
  {
    id: 3,
    subject: "Geography",
    difficulty: "Hard",
    question: "Name this country from its map outline.",
    answer: "Mongolia. It is a landlocked country in East Asia, bordered by Russia to the north and China to the south. It is the most sparsely populated country in the world.",
    image: geoHard
  },
  {
    id: 4,
    subject: "Food",
    difficulty: "Easy",
    question: "Is an avocado a fruit or a vegetable?",
    answer: "Fruit! Botanically, avocados are berries. They grow from the flower of a tree and contain a seed inside, which makes them a fruit.",
    image: foodEasy
  },
  {
    id: 5,
    subject: "Food",
    difficulty: "Medium",
    question: "What country did pierogi originally come from?",
    answer: "Poland. Pierogi are dumplings filled with potato, cheese, meat, or fruit. They have been a staple of Polish cuisine since at least the 13th century.",
    image: foodMedium
  },
  {
    id: 6,
    subject: "Food",
    difficulty: "Hard",
    question: "Name this ingredient.",
    answer: "Saffron. It is the world's most expensive spice by weight. It comes from the dried stigmas of the Crocus sativus flower, and it takes around 150,000 flowers to make just one kilogram.",
    image: foodHard
  },
  {
    id: 7,
    subject: "Space",
    difficulty: "Easy",
    question: "Name this planet.",
    answer: "Saturn. It is the sixth planet from the Sun and the second largest in our solar system. Its rings are made mostly of ice and rock, and they stretch up to 282,000 km from the planet.",
    image: spaceEasy
  },
  {
    id: 8,
    subject: "Space",
    difficulty: "Medium",
    question: "One of these galaxies is real and one is AI-generated. Which one is real?",
    answer: "The left image is real. It is the Pinwheel Galaxy (M101), captured by the Hubble Space Telescope. It is a spiral galaxy about 21 million light-years away from Earth.",
    image: spaceMedium
  },
  {
    id: 9,
    subject: "Space",
    difficulty: "Hard",
    question: "Name this moon.",
    answer: "Ganymede. It is the largest moon of Jupiter and the largest moon in our entire solar system. It is even bigger than the planet Mercury and is the only moon known to have its own magnetic field.",
    image: spaceHard
  },
  {
    id: 10,
    subject: "Science",
    difficulty: "Easy",
    question: "What does this lab tool do?",
    answer: "A Bunsen burner produces a single open gas flame. It is used in labs for heating, sterilizing, and combustion. It was developed by Robert Bunsen in 1855.",
    image: scienceEasy
  },
  {
    id: 11,
    subject: "Science",
    difficulty: "Medium",
    question: "What is this under the microscope?",
    answer: "Onion skin cells. This is a single layer of cells from the outer skin of an onion. The rectangular cell walls are easy to see, which is why onion cells are one of the most common samples used to teach microscopy.",
    image: scienceMedium
  },
  {
    id: 12,
    subject: "Science",
    difficulty: "Hard",
    question: "Name this element from its symbol and properties.",
    answer: "Tungsten (symbol: W). It has the highest melting point of all elements at 3,422°C. The symbol W comes from its old German name, Wolfram. It is used in light bulb filaments and drill bits.",
    image: scienceHard
  }
];

export default cards;