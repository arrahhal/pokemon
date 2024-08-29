import { useState } from "react";

export default function useModal() {
  const [start, setStart] = useState(true);
  const [level, setLevel] = useState(5);

  return { start, setStart, level, setLevel }
}
