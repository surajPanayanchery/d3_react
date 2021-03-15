import { useEffect, useState } from "react";
import { getCsvData } from "../../../services/csv";
import { Face } from "./Face";

export const FaceContainer = () => {
  const svgWidth = 260;
  const svgHeight = 280;
  const url =
    "https://gist.githubusercontent.com/surajPanayanchery/a3b0171e5faeb0dcd2f54aa880a29491/raw/8728d94ad1cebf737480bbea79f22a3b818ab221/colors-mdn.csv";
  const [colors, setColor] = useState([]);

  useEffect(() => {
    getCsvData(url).subscribe((res) => {
      setColor(res);
    });
  }, []);

  return colors.map((value, index) => {
    return (
      <svg key={index} width={svgWidth} height={svgHeight}>
        <Face
          width={350}
          height={500}
          color={value["RGB hex value"]}
          irisX={Math.random() * (index % 2 === 0 ? 10 : -10)}
        />
      </svg>
    );
  });
};
