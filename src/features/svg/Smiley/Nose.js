

export const Nose = (props) => {
    const { x, y ,color} = props;
    const x2 = x + 15;
    const y2 = y + 15;
    const x3 = x2 - 15;
    const y3 = y2;
    const strWidth = 3;
    return (
      <g>
        <line
          x1={x}
          x2={x2}
          y1={y}
          y2={y2}
          stroke={color}
          strokeWidth={strWidth}
        />
        <line
          x1={x2}
          x2={x3}
          y1={y2}
          y2={y3}
          stroke={color}
          strokeWidth={strWidth}
        />
      </g>
    );
  };
  