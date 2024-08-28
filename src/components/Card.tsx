interface CardProps {
  id: number;
  name: string;
  imgUrl: string;
  cardState: "back" | "front" | "backToFront" | "frontToBack";
  handleClick: () => void;
  onTransitionEnd: () => void;
}

export default function Card({ name = "pokemon name", imgUrl = "/src/assets/pokeball.png", cardState = "front", handleClick, onTransitionEnd, id }: CardProps) {
  return (
    <div style={{ perspective: "1000px" }} className="w-44 aspect-[10/14] rounded justify-self-center" onClick={handleClick} id={id.toString()}>
      <div style={{ transformStyle: "preserve-3d", transform: `rotateY(${(cardState === "frontToBack" || cardState === "back") ? "180deg" : "0"})`, transition: "transform 0.8s" }} className="relative w-full h-full" onTransitionEnd={onTransitionEnd}>
        <div style={{ backfaceVisibility: "hidden" }} className="absolute w-full h-full flex flex-col bg-black/50 rounded-md">
          <div className="flex-1 flex justify-center items-center">
            <img src={imgUrl} width={"96px"} height={"96px"} />
          </div>
          <p className="font-medium text-xl text-center text-white py-1">{name}</p>
        </div>
        <div style={{ transform: "rotateY(180deg)", transition: "transform 0.8s", backfaceVisibility: "hidden" }} className="absolute h-full w-full rounded-md">
          <img src="/src/assets/card-back.png" />
        </div>
      </div>
    </div >
  )
}
