import { Pokemon } from "../usePokemons";
import Card from "./Card";
import Wrapper from "./Wrapper";

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
    <Wrapper>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min-content,200px))] justify-center gap-8">
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
    </Wrapper>
  );
}
