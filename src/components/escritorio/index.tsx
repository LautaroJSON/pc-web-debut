import { EscritorioStyled } from "./styles";

interface IEscritorio {
  icons: {
    coords: {
      y: number;
      x: number;
    };
    component: React.ReactNode;
  }[];
  cols?: number;
  rows?: number;
}

function Escritorio({ icons = [], cols = 11, rows = 5 }: IEscritorio) {
  const grid: (React.ReactNode | null)[][] = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => null)
  );

  icons.forEach((icon) => {
    if (
      icon.coords.y >= 0 &&
      icon.coords.y < rows &&
      icon.coords.x >= 0 &&
      icon.coords.x < cols
    ) {
      grid[icon.coords.y][icon.coords.x] = icon.component;
    }
  });

  console.log(grid);

  return (
    <EscritorioStyled>
      {grid.flat().map((cell, idx) => (
        <div
          key={idx}
          className="w-16 h-16 border rounded-2xl flex items-center justify-center shadow-sm"
        >
          {cell}
        </div>
      ))}
    </EscritorioStyled>
  );
}

export default Escritorio;
