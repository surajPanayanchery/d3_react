import { arc } from "d3";

export const Mouth = ({ innerRadius, outerRadius, color }) => {
  const arcGen = arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .startAngle((Math.PI / 6) * 5)
    .endAngle((Math.PI * 7) / 6);
  return (
    <path
      transform={`translate(${90},${100})`}
      d={arcGen()}
      fill={color}
    ></path>
  );
};
