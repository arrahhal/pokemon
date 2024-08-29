import Spinner from "./components/Spinner"
import { usePokemons } from "./usePokemons";
import useCards from "./useCards"
import CardsGrid from "./components/CardsGrid";
import { Wrapper, Center, Mt } from "./components/Utils"
import { StartModal } from "./components/Modal";
import useModal from "./useModal";
import Logo from "./components/Logo";


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
      <header>
        <Wrapper>
          <Center>
            <Logo />
          </Center>
        </Wrapper>
      </header>
      <Mt>
        <main>
          <Wrapper>
            <CardsGrid pokemonsList={pokemonList} onCardsClick={onCardsClick} cardsState={cardsState} onTransitionEnd={onTransitionEnd} />
          </Wrapper >
        </main>
      </Mt>
    </>
  )
}

export default App
