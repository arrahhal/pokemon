import Spinner from "./components/Spinner"
import { usePokemons } from "./usePokemons";
import useCards from "./useCards"
import CardsGrid from "./components/CardsGrid";
import Wrapper from "./components/Wrapper"
import { StartModal } from "./components/Modal";
import useModal from "./useModal";


function App() {
  const { start, setStart, level, setLevel } = useModal();
  const { pokemons, spinner } = usePokemons(level);
  const { pokemonList, onCardsClick, cardsState, onTransitionEnd } = useCards(pokemons);

  if (start)
    return <StartModal onSelect={(level) => { setLevel(level); setStart(false) }} />

  if (spinner || pokemonList.length === 0)
    return <Spinner />

  return (
    <>
      <header></header>
      <Wrapper>
        <CardsGrid pokemonsList={pokemonList} onCardsClick={onCardsClick} cardsState={cardsState} onTransitionEnd={onTransitionEnd} />
      </Wrapper >
    </>
  )
}

export default App
