const VERTICAL = Array.from({ length: 13 }, (_, i) => i * 120);
const HORIZONTAL = Array.from({ length: 9 }, (_, i) => i * 120);

const LINE = "bg-white/12";

const GridBackground = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
    {VERTICAL.map((x) => (
      <div
        key={`v${x}`}
        className={`absolute top-0 h-full w-[2px] ${LINE}`}
        style={{ left: x - 1 }}
      />
    ))}
    {HORIZONTAL.map((y) => (
      <div
        key={`h${y}`}
        className={`absolute left-0 h-[2px] w-full ${LINE}`}
        style={{ top: y - 1 }}
      />
    ))}
  </div>
);

export default GridBackground;
