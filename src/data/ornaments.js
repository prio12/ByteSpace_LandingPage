import limeSpiralCoil from "../assets/icons/limeSpiralCoil.png";
import WhiteSpiralCoilSmall from "../assets/icons/WhiteSpiralCoil.png";
import WhiteRingDonutShape from "../assets/icons/WhiteRingDonutShape.png";
import DiagonalStripLime from "../assets/icons/DiagonalStripLime.png";
import White3DConePyramid from "../assets/icons/White3DConePyramid.png";
import bigspiralWhite from "../assets/icons/bigspiralWhite.png";
import ctaLimeBigSpiral from "../assets/icons/CtaOrnaments/topLimeSpiral.png";
import ctaLimeBottomSpiral from "../assets/icons/CtaOrnaments/RightBottomLimeSpiral.png";
import ctawhiteCone from "../assets/icons/CtaOrnaments/ConeWhite.png";
import ctaLimeCone from "../assets/icons/CtaOrnaments/limeTopConePyramid.png";
import ctaWhiteSmallTopSpiral from "../assets/icons/CtaOrnaments/whiteSmallTopSpiral.png";
import ctaLimeHalfCircle from "../assets/icons/CtaOrnaments/limeHalfCircle.png";
import ctaTopRightBigDiag from "../assets/icons/CtaOrnaments/toprightWhiteBigrect.png";
import authLimeCircle from "../assets/images/authLimeCircle.png";
import authLimePyramid from "../assets/images/authLimePyramid.png";
export const ornaments = [
  {
    label: "lime-spiral-coil",
    src: limeSpiralCoil,
    side: "left",
    x: -118,
    y: 221,
    size: 385,
  },
  {
    label: "white-spiral-coil-small",
    src: WhiteSpiralCoilSmall,
    side: "left",
    x: 183,
    y: 477,
    size: 175,
    rotate: 180,
  },
  {
    label: "white-ring-donut",
    src: WhiteRingDonutShape,
    side: "left",
    x: 18,
    y: 682,
    size: 342,
  },
  {
    label: "diagonal-strip-lime",
    src: DiagonalStripLime,
    side: "right",
    x: -161,
    y: 221,
    size: 370,
  },
  {
    label: "white-3d-cone",
    src: White3DConePyramid,
    side: "right",
    x: 146,
    y: 464,
    size: 188,
  },
  {
    label: "big-spiral-white",
    src: bigspiralWhite,
    side: "right",
    x: -17,
    y: 672,
    size: 330,
  },
];

export const ctaOrnaments = [
  {
    label: "cta-cone-top",
    src: ctaLimeCone,
    side: "right",
    x: 173,
    y: 0,
    w: 189,
    h: 189,
  },
  {
    label: "cta-big-spiral",
    src: ctaLimeBottomSpiral,
    side: "right",
    x: 1,
    y: 289,
    w: 332,
    h: 199,
  },
  {
    label: "cta-lime-spiral",
    src: ctaLimeBigSpiral,
    side: "left",
    x: 0,
    y: 0,
    w: 266,
    h: 225,
  },
  {
    label: "cta-spiral-small",
    src: ctaWhiteSmallTopSpiral,
    side: "left",
    x: 179,
    y: 5,
    w: 176,
    h: 176,
    rotate: 180,
  },
  {
    label: "cta-cone-left",
    src: ctawhiteCone,
    side: "left",
    x: 0,
    y: 225,
    w: 139,
    h: 189,
  },
  {
    label: "cta-ring",
    src: ctaLimeHalfCircle,
    side: "left",
    x: 16,
    y: 298,
    w: 344,
    h: 190,
  },
  {
    label: "cta-strip",
    src: ctaTopRightBigDiag,
    side: "right",
    x: 0,
    y: 5,
    w: 218,
    h: 372,
  },
];

export const authOrnaments = [
  {
    label: "auth-spiral-small",
    src: ctaWhiteSmallTopSpiral,
    side: "left",
    x: 470,
    y: 626,
    size: 175,
    rotate: 180,
  },
  {
    label: "auth-circle",
    src: authLimeCircle,
    side: "left",
    x: 151,
    y: 320,
    size: 146,
  },
  {
    label: "auth-pyramid",
    src: authLimePyramid,
    side: "left",
    x: 97,
    y: 702,
    size: 188,
  },
];
