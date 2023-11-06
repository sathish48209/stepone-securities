import { useEffect, useRef, useState } from "react";

export function useTypingEffect(
  textToType: string,
  interKeyStrokeDurationInMs: number,
  onEnd: () => void
) {
  const [currentPosition, setCurrentPosition] = useState(0);
  const currentPositionRef = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Interval");
      setCurrentPosition((currentPosition) => currentPosition + 1);
      currentPositionRef.current += 1;

      if (currentPositionRef.current > textToType.length) {
        onEnd();
        setCurrentPosition(0);
        currentPositionRef.current = 0;
      }
    }, interKeyStrokeDurationInMs);

    return () => {
      clearInterval(intervalId);
    };
  }, [interKeyStrokeDurationInMs, textToType]);

  return textToType.substring(0, currentPosition);
}
