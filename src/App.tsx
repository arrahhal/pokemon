import Card from "./components/Card"
import Spinner from "./components/Spinner"
import { usePokemons } from "./usePokemons";
import useCards from "./useCards"

function App() {
  const { pokemons, spinner } = usePokemons(10);
  const { areCardsFlipped, pokemonList, onCardsClick, onCardsBackVisible, onCardsFrontVisible } = useCards(pokemons);

  if (spinner || pokemonList.length === 0)
    return <Spinner />

  return (
    <>
      <Card id={pokemonList[0].id} name={pokemonList[0].name} imgUrl={pokemonList[0].img} isFlipped={areCardsFlipped} handleClick={onCardsClick} handleBack={onCardsBackVisible} handleFront={onCardsFrontVisible} />
    </>
  )
}

export default App
