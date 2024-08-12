import { useState } from "react";
import Card from "./components/Card"
import getPokemons from "./helpers/pokeapi";

const pm = await getPokemons(10);

function App() {
  const [isFlipped, setFlip] = useState(false);
  const [imgUrl, setImgUrl] = useState("/src/assets/pokeball.png");
  const [isFlipping, setFlipping] = useState(false);

  const handleCardClick = () => {
    if (isFlipping) return;
    setFlipping(true);
    setFlip(true);
  };

  const handleCardFlip = () => {
    setFlip(false);
    setImgUrl("/src/assets/music-off.png")
    console.log(pm);
  }

  const handleCardFront = () => {
    setFlipping(false);
  }

  return (
    <>
      <div>
        <Card name="pokemon" imgUrl={imgUrl} isFlipped={isFlipped} handleClick={handleCardClick} handleBack={handleCardFlip} handleFront={handleCardFront} />
      </div>
    </>
  )
}

export default App
