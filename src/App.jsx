import { useState, useCallback } from 'react';
import './App.css';
import Flashcard from './components/Flashcard';
import cards from './data/cards';
import bgImage from './assets/bg13.jpg';

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const isCorrect = (guess, answer) => {
  const clean = (s) =>
    s.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
  const g = clean(guess);
  const a = clean(answer);
  if (!g) return false;
  return a.includes(g) || g.includes(a);
};

const App = () => {
  const [deck, setDeck]         = useState(cards);
  const [mastered, setMastered] = useState([]);
  const [index, setIndex]       = useState(0);
  const [guess, setGuess]       = useState('');
  const [feedback, setFeedback] = useState(null); // 'correct' | 'wrong' | null
  const [streak, setStreak]     = useState(0);
  const [longest, setLongest]   = useState(0);

  const currentCard = deck[index];
  const isFirst = index === 0;
  const isLast  = index === deck.length - 1;

  // FIX 1: lock submission once feedback is given
  const submitted = feedback !== null;

  const goTo = (newIndex) => {
    setIndex(newIndex);
    setGuess('');
    setFeedback(null);
  };

  const handlePrev = () => { if (!isFirst) goTo(index - 1); };
  const handleNext = () => { if (!isLast)  goTo(index + 1); };

  const handleShuffle = () => {
    setDeck(shuffle(deck));
    setIndex(0);
    setGuess('');
    setFeedback(null);
  };

  const handleSubmit = () => {
    // Do nothing if already submitted or guess is empty
    if (submitted || !guess.trim()) return;

    if (isCorrect(guess, currentCard.answer)) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setLongest((prev) => Math.max(prev, newStreak));
      setFeedback('correct');
    } else {
      setStreak(0);
      setFeedback('wrong');
    }
  };

  const handleMaster = useCallback(() => {
    setMastered((prev) => [...prev, currentCard]);
    const newDeck = deck.filter((_, i) => i !== index);
    setDeck(newDeck);
    setIndex((prev) => Math.min(prev, newDeck.length - 1));
    setGuess('');
    setFeedback(null);
  }, [currentCard, deck, index]);

  // FIX 2: unmaster — put the card back at the end of the deck
  const handleUnmaster = useCallback((card) => {
    setMastered((prev) => prev.filter((c) => c.id !== card.id));
    setDeck((prev) => [...prev, card]);
  }, []);

  if (deck.length === 0) {
    return (
      <div className="app" style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} >
        <header className="app-header">
          <h1 className="app-title">Knowledge Flashcards</h1>
          <p className="app-description">You mastered all {mastered.length} cards!</p>
        </header>
        <main className="app-main">
          <div className="mastered-list">
            <h2 className="mastered-title">Mastered ({mastered.length})</h2>
            {mastered.map((c) => (
              <div key={c.id} className="mastered-item">
                <span>{c.subject}: {c.question}</span>
                <button
                  className="unmaster-button"
                  onClick={() => handleUnmaster(c)}
                >
                  Undo
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="app" style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <header className="app-header">
        <h1 className="app-title">Knowledge Flashcards</h1>
        <p className="app-description">
          Test your knowledge across Geography, Food, Space, and Science.
        </p>
        <p className="app-count">
          Card {index + 1} of {deck.length}
          {mastered.length > 0 && ` · ${mastered.length} mastered`}
        </p>
      </header>

      <div className="streak-bar">
        <span className="streak-item">
          Current streak: <strong>{streak}</strong>
        </span>
        <span className="streak-item">
          Best streak: <strong>{longest}</strong>
        </span>
      </div>

      <main className="app-main">
        <Flashcard
          key={currentCard.id + '-' + index}
          subject={currentCard.subject}
          difficulty={currentCard.difficulty}
          question={currentCard.question}
          answer={currentCard.answer}
          image={currentCard.image}
        />

        <div className="guess-area">
          <input
            className={`guess-input ${feedback ? 'guess-input--' + feedback : ''}`}
            type="text"
            placeholder={submitted ? '' : 'Type your answer...'}
            value={guess}
            onChange={(e) => !submitted && setGuess(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            readOnly={submitted}
          />
          <button
            className="submit-button"
            onClick={handleSubmit}
            disabled={submitted}
          >
            Submit
          </button>
        </div>

        {feedback && (
          <p className={`feedback-text feedback-text--${feedback}`}>
            {feedback === 'correct'
              ? '✓ Correct!'
              : '✗ Not quite — flip the card to see the answer.'}
          </p>
        )}

        <div className="nav-row">
          <button
            className="nav-button"
            onClick={handlePrev}
            disabled={isFirst}
            aria-label="Previous card"
          >
            ← Back
          </button>

          <button className="shuffle-button" onClick={handleShuffle}>
            ⇌ Shuffle
          </button>

          <button
            className="master-button"
            onClick={handleMaster}
            aria-label="Mark as mastered"
          >
            ✓ Mastered
          </button>

          <button
            className="nav-button"
            onClick={handleNext}
            disabled={isLast}
            aria-label="Next card"
          >
            Next →
          </button>
        </div>

        {mastered.length > 0 && (
          <div className="mastered-list">
            <h2 className="mastered-title">Mastered ({mastered.length})</h2>
            {mastered.map((c) => (
              <div key={c.id} className="mastered-item">
                <span>{c.subject}: {c.question}</span>
                <button
                  className="unmaster-button"
                  onClick={() => handleUnmaster(c)}
                >
                  Undo
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;