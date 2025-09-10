import { useState, useEffect } from 'react';
import { shuffle } from 'shuffle';
import QuizCard from './components/QuizCard';
export default function Quiz({ cards, setMode }) {
  const [shuffled, setShuffled] = useState(null);
  const [card, setCard] = useState(null);

  useEffect(() => {
    setShuffled(shuffle({ deck: cards }));
  }, [cards]);

  useEffect(() => {
    if (shuffled) {
      setCard(shuffled.draw());
    }
  }, [shuffled]);

  return (
    <main id="quiz-cont">
      <h1 className="title">Quiz Mode</h1>
      {card ? (
        <>
          <QuizCard card={card} />
          <button className="btn" onClick={() => setCard(shuffled?.draw())}>
            Next Card
          </button>
        </>
      ) : (
        <>
          <p>You have reached the end of the deck!</p>
          <div className="btns-cont">
            <button
              className="btn"
              onClick={() => {
                shuffled?.reset();
                shuffled?.shuffle();
                setCard(shuffled?.draw());
              }}
            >
              Restart
            </button>
            <button className="btn" onClick={() => setMode('deck')}>
              Go Home
            </button>
          </div>
        </>
      )}
    </main>
  );
}
