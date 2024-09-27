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

export default function useGame(initialPokemons: Pokemon[]) {
  const [cardsState, setCardsState] = useState<"front" | "back">("front");
  const [pokemonList, setPokemonList] = useState<Pokemon[]>(initialPokemons);
  const [isCardsVisible, setIsCardsVisible] = useState<boolean>(false);
  const [gameState, setGameState] = useState<"start" | "game" | "end">("start");
  const [gameLevel, setGameLevel] = useState<number>(6);
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [playerMaxScore, setPlayerMaxScore] = useState<number>(0);
  const [selectedCards, setSelectedCards] = useState<Array<number>>([]);


  useEffect(() => {
    if (initialPokemons.length !== 0) {
      setPokemonList(initialPokemons);
    }
  }, [initialPokemons])

  const shuffleCards = () => {
    const shuffled = shuffleArray([...pokemonList]);
    setPokemonList(shuffled);
  }

  const onCardsClick = () => {
    setCardsState("back");

    setTimeout(async () => {
      setCardsState("front");
      shuffleCards();
    }, 800);
  }


  const isSelected = (id: number) => {
    if (selectedCards.indexOf(id) === -1)
      return false;
    else
      return true;
  }

  const handleCardSelect = (id: number) => {
    if (isSelected(id)) {
      setPlayerScore(0);
      setGameState("end");
      setSelectedCards([]);
    }
    else {
      setPlayerScore(prevScore => prevScore + 1);
      if (playerScore + 1 > playerMaxScore)
        setPlayerMaxScore(prevMaxScore => prevMaxScore + 1);
      if (playerScore + 1 === gameLevel)
        setGameState("end");
      setSelectedCards([...selectedCards, id]);
    }
  }

  return {
    pokemonList,
    cardsState,
    onCardsClick,
    setCardsState,
    playerScore,
    playerMaxScore,
    handleCardSelect,
    isCardsVisible,
    gameState,
    setGameState,
    setGameLevel,
    setIsCardsVisible,
    gameLevel,
    selectedCards
  };
}
