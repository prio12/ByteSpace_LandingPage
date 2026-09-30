import { ornaments } from "../../data/ornaments";

const Ornaments = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
    >
      {ornaments.map(({ label, src, side, x, y, size, rotate = 0 }) => {
        const style = {
          [side]: x,
          top: y,
          width: size,
          height: size,
          transform: rotate ? `rotate(${rotate}deg)` : undefined,
        };
        return src ? (
          <img
            key={label}
            src={src}
            alt=""
            style={style}
            className="absolute max-w-none object-contain"
          />
        ) : (
          <div
            key={label}
            style={style}
            className="absolute grid place-items-center border-2 border-dashed border-white/60 bg-white/10 text-xs text-white"
          >
            {label} {size}px
          </div>
        );
      })}
    </div>
  );
};

export default Ornaments;
