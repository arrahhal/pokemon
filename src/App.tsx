import { useState } from "react";
import Card from "./components/Card"
import Spinner from "./components/Spinner"
import { usePokemons } from "./usePokemons";

function App() {
  const [isFlipped, setFlip] = useState(false);
  const [imgUrl, setImgUrl] = useState("/src/assets/pokeball.png");
  const [isFlipping, setFlipping] = useState(false);
  const { pokemons, spinner } = usePokemons(10);

  const handleCardClick = () => {
    if (isFlipping) return;
    setFlipping(true);
    setFlip(true);
  };

  const handleCardFlip = () => {
    setFlip(false);
    setImgUrl(pokemons[0].img)
  }

  const handleCardFront = () => {
    setFlipping(false);
  }

  return (
    <>
      {<Spinner />}
      {!spinner && <Card id={pokemons[0].id} name={pokemons[0].name} imgUrl={imgUrl} isFlipped={isFlipped} handleClick={handleCardClick} handleBack={handleCardFlip} handleFront={handleCardFront} />}
    </>
  )
}

export default App
