import { useState, useEffect } from "react";
interface Pokemon {
  id: number;
  name: string;
  img: string;
}

const MAX_POKEMON_ID: number = 1000;

async function getPokemon(id: number) {
  let pokemon;
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      method: "GET",
    });
    pokemon = await res.json();
  }
  catch (error) {
    console.error(error);
  }
  return { name: pokemon.name, id: pokemon.id, img: pokemon.sprites.front_default }
}

async function getRandomPokemon() {
  const randId = Math.floor(Math.random() * MAX_POKEMON_ID) + 1;
  const pokemon = await getPokemon(randId);
  return pokemon;
}

async function getPokemons(count: number) {
  const pokemons: Pokemon[] = [];
  const taken: Record<number, boolean> = {};
  while (pokemons.length < count) {
    const randPokemon = await getRandomPokemon();
    if (!Object.prototype.hasOwnProperty.call(taken, randPokemon.id)) {
      taken[randPokemon.id] = randPokemon.id;
      pokemons.push(randPokemon);
    }
  }
  return pokemons;
}

export const usePokemons = (count: number) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setSpinner(true);
      const data: Pokemon[] = await getPokemons(count);
      setPokemons(data);
      setSpinner(false);
    };

    fetchData();
  }, [count]);

  return { pokemons, spinner };
};
