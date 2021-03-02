import { Eye } from "./Eye";
import { Mouth } from "./Mouth";
import { Nose } from "./Nose";

export const Face = (props) => {
  const { width, height, irisX, color } = props;
  const strokeWidth = 1;
  const rectWidth = width / 2 - 2 * strokeWidth;
  const rectHeight = height / 2 - 2 * strokeWidth;
  const noseColor = color === "#000000" ? "#fff" : "#000000";
  const mouthColor = color === "#000000" ? "#fff" : undefined;
  return (
    <g transform={`translate(${25} , ${25})`}>
      <rect
        width={rectWidth}
        height={rectHeight}
        fill={color}
        stroke="black"
        strokeWidth={strokeWidth}
      ></rect>
      <Eye x={rectWidth / 4} y={rectHeight / 4} irisX={irisX} />
      <Eye x={(rectWidth * 3) / 4} y={rectHeight / 4} irisX={irisX} />
      <Nose x={rectWidth / 2 - 5} y={rectHeight / 2} color={noseColor} />
      <Mouth
        innerRadius={rectWidth / 4 + 50}
        outerRadius={rectWidth / 4 + 55}
        color={mouthColor}
      />
    </g>
  );
};
