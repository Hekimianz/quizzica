import { useLocalStorageState } from './useLocalStorageState';
import { v4 as uuid } from 'uuid';
export function useDeck() {
  const [cards, setCards] = useLocalStorageState('cards', []);

  const addCard = (question, answer) => {
    setCards((prev) => [...prev, { id: uuid(), question, answer }]);
  };

  const deleteCard = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };
  return { cards, addCard, deleteCard };
}
