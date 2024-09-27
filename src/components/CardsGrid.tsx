import { Pokemon } from "../usePokemons";
import Card from "./Card";

interface CardsGridProps {
  pokemonsList: Pokemon[];
  cardsState: "front" | "back" | "backToFront" | "frontToBack";
  onCardClick: (id: number) => void;
  onTransitionEnd: () => void;
}

export default function CardsGrid({
  pokemonsList = [],
  onCardClick,
  onTransitionEnd,
  cardsState = "front",
}: CardsGridProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(min-content,180px))] justify-center gap-4">
      {pokemonsList.map((pokemon) => (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          imgUrl={pokemon.img}
          handleClick={onCardClick}
          onTransitionEnd={onTransitionEnd}
          cardState={cardsState}
        />
      ))}
    </div>
  );
}
