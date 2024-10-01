import Tilt from "react-parallax-tilt";
import cardBg from '../assets/card-back.png'

interface CardProps {
  id: number;
  name: string;
  imgUrl: string;
  cardState: "back" | "front" | "backToFront" | "frontToBack";
  handleClick: () => void;
}

export default function Card({ name = "pokemon name", imgUrl = "/src/assets/pokeball.png", cardState = "front", handleClick, id }: CardProps) {

  return (
    <Tilt
      glareEnable
    >
      <div style={{ perspective: "1000px" }} className="aspect-[10/14] rounded justify-self-center overflow-hidden" onClick={handleClick} id={id.toString()}>
        <div style={{ transformStyle: "preserve-3d", transform: `rotateY(${(cardState === "frontToBack" || cardState === "back") ? "180deg" : "0"})`, transition: "transform 0.8s" }} className="relative w-full h-full" >
          <div style={{ backfaceVisibility: "hidden" }} className="absolute w-full h-full flex flex-col bg-black/50">
            <div className="flex-1 flex justify-center items-center">
              <img src={imgUrl} width={"96px"} height={"96px"} />
            </div>
            <p className="text-center text-white py-1">{name}</p>
          </div>
          <div style={{ transform: "rotateY(180deg)", transition: "transform 0.8s", backfaceVisibility: "hidden" }} className="absolute h-full w-full rounded-md">
            <img src={cardBg} />
          </div>
        </div>
      </div >
    </Tilt>
  )
}
