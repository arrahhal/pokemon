import { Pokemon } from "../usePokemons";
import Card from "./Card";

interface CardsGridProps {
  pokemonsList: Pokemon[];
  cardsState: "front" | "back" | "backToFront" | "frontToBack";
  onCardsClick: () => void;
  onTransitionEnd: () => void;
}

export default function CardsGrid({
  pokemonsList = [],
  onCardsClick,
  onTransitionEnd,
  cardsState = "front",
}: CardsGridProps) {
  return (
    <div>
      {pokemonsList.map((pokemon) => (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          imgUrl={pokemon.img}
          handleClick={onCardsClick}
          onTransitionEnd={onTransitionEnd}
          cardState={cardsState}
        />
      ))}
    </div>
  );
}
