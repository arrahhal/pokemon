export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img src="/src/assets/pokeball.png" alt="" className="w-14" />
      <p style={{ translate: "0 10%" }} className="text-2xl font-bold"><span className="text-red-400">Poke</span>mon</p>
    </div>
  )
}
