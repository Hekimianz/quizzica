import { useState } from 'react';

export default function AddCard({ handleSubmit }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const validForm = question && answer;

  return (
    <form onSubmit={(e) => handleSubmit(e, question, answer)} id="newCard-form">
      <h2 className="title subtitle">New Card</h2>
      <textarea
        onChange={(e) => setQuestion(e.target.value)}
        type="text"
        placeholder="Question"
      />
      <textarea
        onChange={(e) => setAnswer(e.target.value)}
        type="text"
        placeholder="Answer"
      />
      <button className="btn" disabled={!validForm}>
        Submit
      </button>
    </form>
  );
}
