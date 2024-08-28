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

// WARN: some cards glitch while flipping; i tried to find an easy solution but i couldn't so i will try again later (maybe after finishing the app)
function useCards(initialPokemons: Pokemon[]) {
  const [cardsState, setCardsState] = useState<"front" | "back" | "backToFront" | "frontToBack">("front");
  const [pokemonList, setPokemonList] = useState<Pokemon[]>(initialPokemons);

  useEffect(() => {
    if (initialPokemons.length !== 0) {
      setPokemonList(initialPokemons);
    }
  }, [initialPokemons])

  const shuffleCards = () => {
    const shuffled = shuffleArray([...pokemonList]);
    setPokemonList(shuffled);
    setCardsState("backToFront");
  }

  const onCardsClick = () => {
    if (cardsState === "front") {
      setCardsState("frontToBack");
    }
  }

  const onTransitionEnd = () => {
    if (cardsState === "frontToBack") {
      setCardsState("back");
      shuffleCards();
    } else if (cardsState === "backToFront") {
      setCardsState("front");
    }
  };

  return {
    pokemonList,
    cardsState,
    onCardsClick,
    onTransitionEnd,
  };
}

export default useCards;