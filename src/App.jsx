import { useState } from 'react';
import './App.css';
import Flashcard from './components/Flashcard';
import cards from './data/cards';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * cards.length);
    } while (randomIndex === currentIndex);
    setCurrentIndex(randomIndex);
  };

  const currentCard = cards[currentIndex];

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Knowledge Flashcards</h1>
        <p className="app-description">
          Test your knowledge across Geography, Food, Space, and Science.
        </p>
        <p className="app-count">12 cards total</p>
      </header>

      <main className="app-main">
        <Flashcard
          key={currentIndex}
          subject={currentCard.subject}
          difficulty={currentCard.difficulty}
          question={currentCard.question}
          answer={currentCard.answer}
          image={currentCard.image}
        />

        <button className="next-button" onClick={handleNext}>
          Next Card
        </button>
      </main>
    </div>
  );
};

export default App;