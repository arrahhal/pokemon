export default function Spinner({ show = false }) {
  return (
    <div className={`absolute z-10 w-full h-full bg-white/10 backdrop-blur-sm ${show ? "" : "hidden"} flex justify-center items-center`}>
      <img className="w-32 h-32 animate-spin" src="/src/assets/pokeball.svg" alt="pokeball" />
    </div>
  )
}
