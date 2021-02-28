import { range } from "d3";
import "./App.css";
import { Face } from "./features/svg/Smiley/Face";

function App() {
  const svgWidth = 260;
  const svgHeight = 280;
  const arr = range(10);
  return arr.map((_, index) => {
    return (
      <svg width={svgWidth} height={svgHeight}>
        <Face
          width={350}
          height={500}
          irisX={Math.random() * (index % 2 === 0 ? 10 : -10)}
        />
      </svg>
    );
  });
}

export default App;
