export default function ScoreBoard({ score, highest, level }: { score: number; highest: number; level: number }) {
  return (
    <div className="text-black text-center leading-9">
      <p>{`Score:${score} Best:${highest}`}</p>
      <p>{`${score}/${level}`}</p>
    </div>
  )
}
