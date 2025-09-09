import { useState } from 'react';
import { useDeck } from './hooks/useDeck';
import Card from './components/Card';
import AddCard from './AddCard';
export default function Deck({ setMode }) {
  const { cards, addCard, deleteCard } = useDeck();
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e, question, answer) => {
    e.preventDefault();
    addCard(question, answer);
    setShowForm(false);
  };

  return (
    <main id="deck-cont">
      <h1 className="title">Deck</h1>

      <div className="btns-cont">
        {!showForm && (
          <button onClick={() => setMode('quiz')} className="btn">
            Start Quiz
          </button>
        )}
        <button
          className={`btn ${showForm ? 'cancel' : ''}`}
          onClick={() => setShowForm((prev) => !prev)}
        >
          {showForm ? 'Cancel' : '+ Add Card'}
        </button>
      </div>

      {showForm && <AddCard handleSubmit={handleSubmit} />}

      <p id="legend">Click on a card to delete</p>

      {cards.map((card) => (
        <Card onDelete={() => deleteCard(card.id)} key={card.id} card={card} />
      ))}
    </main>
  );
}
