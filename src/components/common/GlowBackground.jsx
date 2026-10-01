import { glows } from "../../data/glows";

const GlowBackground = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute left-1/2 top-0 h-full w-[1440px] -translate-x-1/2">
        {glows.map(({ id, left, top, size, background }) => (
          <div
            key={id}
            className="absolute"
            style={{ left, top, width: size, height: size, background }}
          />
        ))}
      </div>
    </div>
  );
};

export default GlowBackground;
