import { useCallback, useState } from "react";

export const MouseFollower = () => {
  const [mousePos, setMousePos] = useState({ x: 100, y: 100 });
  const handleMouseMove = useCallback((res) => {
    if (res) {
      setMousePos({ x: res.nativeEvent.offsetX, y: res.nativeEvent.offsetY });
    }
  }, []);
  const circleSvg = (
    <circle cx={mousePos.x} cy={mousePos.y} r="10" fill="gray"></circle>
  );
  return (
    <svg
      style={{ border: `1px solid black` }}
      onMouseMove={($event) => handleMouseMove($event)}
    >
      {circleSvg}
    </svg>
  );
};
