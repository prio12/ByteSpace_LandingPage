import a1 from "../assets/avatars/avatar1.png";
import a2 from "../assets/avatars/avatar2.png";
import a3 from "../assets/avatars/avatar3.png";
import a4 from "../assets/avatars/avatar4.png";
import a5 from "../assets/avatars/avatar5.png";
import a6 from "../assets/avatars/avatar6.png";
import a7 from "../assets/avatars/avatar7.png";

const avatarList = [a1, a2, a3, a4, a5, a6, a7];

export const avatars = Array.from({ length: 7 }, (_, i) => ({
  id: i + 1,
  src: avatarList[i],
}));
