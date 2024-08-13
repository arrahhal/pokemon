export default function Spinner() {
  return (
    <div className={`absolute z-10 w-full h-full bg-white/10 backdrop-blur-sm flex justify-center items-center`}>
      <img className="w-32 h-32 animate-spin" src="/src/assets/pokeball.svg" alt="pokeball" />
    </div>
  )
}
