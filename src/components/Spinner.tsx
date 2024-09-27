import pokeball from '../assets/pokeball.svg';

export default function Spinner() {
  return (
    <div className={`absolute z-10 w-full h-full bg-white/10 backdrop-blur-sm flex justify-center items-center`}>
      <div>
        <img className="w-32 h-32 animate-spin mx-auto" src={pokeball} alt="pokeball" />
        <p className="bg-white/30 px-4 py-2 rounded-xl font-medium text-black/60">Loading Pokemons...</p>
      </div>
    </div>
  )
}
