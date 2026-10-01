import { ornaments } from "../../data/ornaments";

const Ornaments = ({ items = ornaments }) => {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 5,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {items.map(({ label, src, side, x, y, size, w, h, rotate = 0 }) => (
        <img
          key={label}
          src={src}
          alt=""
          style={{
            position: "absolute",
            [side]: x,
            top: y,
            width: w ?? size,
            height: h ?? size,
            maxWidth: "none",
            objectFit: "contain",
            transform: rotate ? `rotate(${rotate}deg)` : undefined,
          }}
        />
      ))}
    </div>
  );
};

export default Ornaments;
