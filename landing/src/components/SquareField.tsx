type Square = {
  x: number;
  y: number;
  size: number;
  tone: number;
};

const SQUARES: Square[] = [
  { x: 146, y: 4, size: 40, tone: 1 },
  { x: 92, y: 26, size: 32, tone: 3 },
  { x: 22, y: 0, size: 36, tone: 2 },
  { x: 138, y: 60, size: 34, tone: 2 },
  { x: 64, y: 72, size: 40, tone: 1 },
  { x: 4, y: 52, size: 32, tone: 3 },
  { x: 150, y: 110, size: 40, tone: 1 },
  { x: 80, y: 124, size: 46, tone: 1 },
  { x: 8, y: 96, size: 38, tone: 2 },
  { x: 140, y: 166, size: 34, tone: 2 },
  { x: 54, y: 184, size: 40, tone: 1 },
  { x: 0, y: 148, size: 34, tone: 4 },
  { x: 116, y: 224, size: 32, tone: 3 },
  { x: 2, y: 194, size: 28, tone: 3 },
];

const TONES = [1, 0.8, 0.55, 0.32];

const squarePath = (tone: number) =>
  SQUARES.filter((square) => square.tone === tone)
    .map(
      (square) =>
        `M${square.x} ${square.y}h${square.size}v${square.size}h-${square.size}z`,
    )
    .join(" ");

type Props = {
  className?: string;
};

export default function SquareField({ className = "" }: Props) {
  return (
    <svg
      className={`square-field ${className}`.trim()}
      viewBox="0 0 200 260"
      aria-hidden="true"
      focusable="false"
    >
      {TONES.map((opacity, index) => (
        <path
          key={index}
          d={squarePath(index + 1)}
          fill="currentColor"
          opacity={opacity}
        />
      ))}
    </svg>
  );
}
