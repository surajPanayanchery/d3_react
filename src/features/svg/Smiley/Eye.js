export const Eye = (props) => {
    const { x, y ,irisX} = props;
    const radi = 20;
    const ellipse = (
      <ellipse
        rx={radi}
        ry={radi / 2}
        fill="white"
        stroke="black"
        strokeWidth="3"
      />
    );
    const iris = <circle cx={irisX} r={radi / 2}></circle>;
    return (
      <g transform={`translate(${x} , ${y})`}>
        {ellipse}
        {iris}
      </g>
    );
  };