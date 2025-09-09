export default function Card({ card, onDelete }) {
  const question = card.question;
  const answer = card.answer;
  return (
    <div onClick={onDelete} className="card-cont">
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
}
