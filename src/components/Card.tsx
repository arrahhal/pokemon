interface CardProps {
  name: string;
  imgUrl: string;
  isFlipped: boolean;
  handleClick: () => void;
  handleBack: () => void;
  handleFront: () => void;
}

export default function Card({ name = "pokemon name", imgUrl = "/src/assets/pokeball.png", isFlipped, handleClick, handleBack, handleFront }: CardProps) {
  return (
    <div style={{ perspective: "1000px" }} className="w-44 aspect-[10/14] rounded" onClick={handleClick}>
      <div style={{ transformStyle: "preserve-3d", transform: `rotateY(${isFlipped ? "180deg" : "0"})`, transition: "transform 0.8s" }} className="relative w-full h-full" onTransitionEnd={isFlipped ? handleBack : handleFront}>
        <div style={{ backfaceVisibility: "hidden" }} className="absolute w-full h-full flex flex-col bg-yellow-50">
          <div className="flex-1 flex justify-center items-center">
            <img src={imgUrl} width={"96px"} height={"96px"} />
          </div>
          <p className="font-bold text-xl text-center text-black bg-yellow-300 py-1">{name}</p>
        </div>
        <div style={{ transform: "rotateY(180deg)", transition: "transform 0.8s", backfaceVisibility: "hidden" }} className="absolute h-full w-full">
          <img src="/src/assets/card-back.png" />
        </div>
      </div>
    </div >
  )
}
