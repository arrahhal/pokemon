import { useState } from "react";
import Card from "./components/Card"

function App() {
  const [isFlipped, setFlip] = useState(false);
  const [imgUrl, setImgUrl] = useState("/src/assets/pokeball.png");
  const handleCardClick = () => {
    setFlip(true);
  };

  const handleCardFlip = () => {
    setFlip(false);
    setImgUrl("/src/assets/music-off.png")
  }

  return (
    <>
      <div>
        <Card name="pokemon" imgUrl={imgUrl} isFlipped={isFlipped} handleClick={handleCardClick} handleFlip={handleCardFlip} />
      </div>
    </>
  )
}

export default App
