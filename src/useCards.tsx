import { useEffect, useState } from 'react';
import { Pokemon } from './usePokemons';

// Utility function to shuffle an array
function shuffleArray(array: Pokemon[]) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function useCards(initialPokemons: Pokemon[]) {
  const [areCardsFlipped, setAreCardsFlipped] = useState(false);
  const [areCardsAnimating, setAreCardsAnimating] = useState(false);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    if (initialPokemons.length > 0)
      setPokemonList(initialPokemons);
  }, [initialPokemons])

  const shuffleCards = () => {
    const shuffled = shuffleArray(pokemonList);
    setPokemonList(shuffled);
  }

  const onCardsClick = () => {
    if (areCardsAnimating) return;
    setAreCardsAnimating(true);
    setAreCardsFlipped(true);
  };

  const onCardsBackVisible = () => {
    shuffleCards();
    setAreCardsFlipped(false);
  };

  const onCardsFrontVisible = () => {
    setAreCardsAnimating(false);
  };

  return {
    areCardsFlipped,
    pokemonList,
    onCardsClick,
    onCardsBackVisible,
    onCardsFrontVisible,
  };
}

export default useCards;
