import { useState } from "react";
import Spinner from "./components/Spinner"
import { usePokemons } from "./usePokemons";
import CardsGrid from "./components/CardsGrid";
import { Wrapper, Center, Mt } from "./components/Utils"
import { StartModal, EndModal } from "./components/Modal";
import useGame from "./useGame";
import Logo from "./components/Logo";
import ScoreBoard from "./components/ScoreBoard";

// the comment  the shapes the 
function App() {
  const [level, setLevel] = useState(6);
  const { pokemons, spinner, updatePokemons } = usePokemons(level);
  const { gameState, setGameState, setGameLevel, gameLevel, playerScore, playerMaxScore, handleCardSelect, pokemonList, cardsState, onCardsClick, setCardsState } = useGame(pokemons);

  if (level !== gameLevel) {
    setLevel(gameLevel);
  }

  if (gameState === "start")
    return <StartModal onSelect={(level) => { setGameLevel(level); setGameState("game") }} />
  else if (gameState === "end")
    return <EndModal score={playerScore} level={level} onPlayAgain={() => { setGameState("start"); updatePokemons(level); setCardsState("front") }} onQuit={() => { setGameState("start"); setCardsState("front") }} />

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
              <ScoreBoard score={playerScore} level={level} highest={playerMaxScore} />
            </Mt>
            <Mt>
              {/* this is a very bad implementation i should keep the logic of the game inside useGame hook*/}
              <CardsGrid pokemonsList={pokemonList} onCardClick={(id: number) => { onCardsClick(); handleCardSelect(id) }} cardsState={cardsState} />
            </Mt>
          </Wrapper >
        </main>
      </Mt>
    </>
  )
}

export default App;
