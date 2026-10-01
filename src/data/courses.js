import a1 from "../assets/avatars/avatar2.png";
import a2 from "../assets/avatars/avatar8.png";
import a3 from "../assets/avatars/avatar9.png";
import a4 from "../assets/avatars/avatar10.png";
import figmaImg from "../assets/images/figma (1).png";
import bigdataImg from "../assets/images/bigdata.png";
import digitalassetImg from "../assets/images/digitalasset.png";
import moneymanageImg from "../assets/images/moneymanage.png";
import productivityImg from "../assets/images/productivity.png";
import startupImg from "../assets/images/startup.png";

const base = {
  author: "purepearl studio",
  level: "Beginner",
  learners: "26+",
  price: "$25",
  priceNote: "/lifetime",
  rating: "4.5",
  avatars: [a1, a2, a3, a4],
  tags: ["17 Lessons", "2 hours 16 mins", "59 Comments"],
};

export const courses = [
  { ...base, id: 1, title: "Learn Figma from Basic", image: figmaImg },
  { ...base, id: 2, title: "Build Digital Asset", image: digitalassetImg },
  { ...base, id: 3, title: "the Power of Big Data", image: bigdataImg },
  {
    ...base,
    id: 4,
    title: "Balancing Productivity and Self-Care",
    image: productivityImg,
  },
  {
    ...base,
    id: 5,
    title: "Mastering Money Management",
    image: moneymanageImg,
  },
  { ...base, id: 6, title: "From Idea to Startup Success", image: startupImg },
];
