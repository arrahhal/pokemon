import Spinner from "./components/Spinner"
import { usePokemons } from "./usePokemons";
import useCards from "./useCards"
import CardsGrid from "./components/CardsGrid";
import { Wrapper, Center, Mt } from "./components/Utils"
import { StartModal, EndModal } from "./components/Modal";
import useGame from "./useGame";
import Logo from "./components/Logo";
import ScoreBoard from "./components/ScoreBoard";

// the comment  the shapes the 
function App() {
  const { start, setStart, level, setLevel, end, setEnd, score, highest, handleCardSelect } = useGame();
  const { pokemons, spinner, updatePokemons } = usePokemons(level);
  const { pokemonList, onCardsClick, cardsState, onTransitionEnd, setCardsState } = useCards(pokemons);

  if (start)
    return <StartModal onSelect={(level) => { setLevel(level); setStart(false) }} />
  if (end)

    return <EndModal score={score} level={level} onPlayAgain={() => { setEnd(false); updatePokemons(level); setCardsState("front") }} onQuit={() => { setEnd(false); setStart(true); setCardsState("front") }} />

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
            <Mt>
              <ScoreBoard score={score} level={level} highest={highest} />
            </Mt>
            <Mt>
              <CardsGrid pokemonsList={pokemonList} onCardClick={(id: number) => { onCardsClick(); handleCardSelect(id) }} cardsState={cardsState} onTransitionEnd={onTransitionEnd} />
            </Mt>
          </Wrapper >
        </main>
      </Mt>
    </>
  )
}

export default App;
