import { useState, useEffect } from 'react';
import { useLocalStorageState } from './hooks/useLocalStorageState';
import Deck from './Deck';
import Quiz from './Quiz';
import './styles/app.css';
function App() {
  const [cards, setCards] = useLocalStorageState('cards', []);
  const [mode, setMode] = useState('deck');
  useEffect(() => {
    async function fetchSeed() {
      if (!cards.length) {
        const res = await fetch('http://localhost:5173/seed.json');
        const { cards } = await res.json();
        setCards(cards);
      }
    }
    fetchSeed();
  }, [cards.length, setCards]);

  return (
    <>
      {mode === 'deck' && <Deck setMode={setMode} />}
      {mode === 'quiz' && <Quiz cards={cards} setMode={setMode} />}
      <footer>Made with ♥️ by Aram Hekimian</footer>
    </>
  );
}

export default App;
