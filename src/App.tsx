import Spinner from "./components/Spinner"
import { usePokemons } from "./usePokemons";
import useCards from "./useCards"
import CardsGrid from "./components/CardsGrid";

function App() {
  const { pokemons, spinner } = usePokemons(10);
  const { pokemonList, onCardsClick, cardsState, onTransitionEnd } = useCards(pokemons);

  if (spinner || pokemonList.length === 0)
    return <Spinner />

  return (
    <>
      <CardsGrid pokemonsList={pokemonList} onCardsClick={onCardsClick} cardsState={cardsState} onTransitionEnd={onTransitionEnd} />
    </>
  )
}

export default App
