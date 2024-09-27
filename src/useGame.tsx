import { useState } from "react";

export default function useGame() {
  const [start, setStart] = useState(true);
  const [end, setEnd] = useState(false);
  const [level, setLevel] = useState(6);
  const [score, setScore] = useState(0);
  const [highest, setHighest] = useState(0);
  const [selected, setSelected] = useState<Array<number>>([]);

  const isSelected = (id: number) => {
    if (selected.indexOf(id) === -1)
      return false;
    else
      return true;
  }

  const handleCardSelect = (id: number) => {
    if (isSelected(id)) {
      setScore(0);
      setEnd(true);
      setSelected([]);
    }
    else {
      setScore(score + 1);
      if (score + 1 > highest)
        setHighest(score + 1);
      if (score + 1 === level)
        setEnd(true);
      setSelected([...selected, id]);
    }
  }

  return { start, setStart, level, setLevel, end, setEnd, score, highest, handleCardSelect }
}
