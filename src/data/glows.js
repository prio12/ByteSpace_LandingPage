const glow = (rgb, a) =>
  `radial-gradient(50% 50% at 50% 50%, rgba(${rgb}, ${a}) 0%, rgba(${rgb}, ${+(a * 0.23).toFixed(4)}) 53%, rgba(${rgb}, ${+(a * 0.06).toFixed(4)}) 75%, rgba(${rgb}, 0) 100%)`;

const BLUE = "0, 59, 226";
const LIME = "203, 252, 1";

export const glows = [
  {
    id: "ellipse-8",
    left: 722,
    top: 788,
    size: 1137,
    background: glow(BLUE, 0.24),
  },
  {
    id: "ellipse-11",
    left: -152,
    top: -466,
    size: 1137,
    background: glow(LIME, 0.4),
  },
  {
    id: "ellipse-9",
    left: -508,
    top: 183,
    size: 1137,
    background: glow(BLUE, 0.16),
  },
  {
    id: "ellipse-10",
    left: 811,
    top: -458,
    size: 1137,
    background: glow(BLUE, 0.08),
  },
  {
    id: "ellipse-12",
    left: -287,
    top: 946,
    size: 672,
    background: glow(LIME, 0.6),
  },
];

export const testimonialGlows = [
  {
    id: "t-ellipse-11",
    left: 842,
    top: -241,
    size: 1137,
    background: glow(LIME, 0.4),
  },
  {
    id: "t-ellipse-12",
    left: 395,
    top: -138,
    size: 672,
    background: glow(LIME, 0.6),
  },
  {
    id: "t-ellipse-8",
    left: -442,
    top: 149,
    size: 1137,
    background: glow(BLUE, 0.24),
  },
];
