import { useState } from 'react';
export default function QuizCard({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div onClick={() => setIsFlipped((prev) => !prev)} className="quiz-card">
      {!isFlipped ? card?.question : card?.answer}
    </div>
  );
}
