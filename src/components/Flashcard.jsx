import { useState } from 'react';

const Flashcard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flashcard ${props.subject.toLowerCase()} ${isFlipped ? 'flipped' : ''}`}
      onClick={handleClick}
    >
      <div className="card-inner">
        <div className="card-front">
          <span className="card-subject">{props.subject}</span>
          <span className="card-difficulty">{props.difficulty}</span>
          <img src={props.image} alt="card visual" className="card-image" />
          <p className="card-question">{props.question}</p>
          <p className="card-hint">Click to flip</p>
        </div>
        <div className="card-back">
          <span className="card-subject">{props.subject}</span>
          <p className="card-answer">{props.answer}</p>
          <p className="card-hint">Click to flip back</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;