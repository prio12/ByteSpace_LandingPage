import { MdOutlineSignalCellularAlt, MdStarOutline } from "react-icons/md";
import AvatarStack from "../common/AvatarStack";

const CourseCard = ({ course }) => {
  const {
    title,
    author,
    level,
    learners,
    price,
    priceNote,
    rating,
    image,
    avatars,
  } = course;

  return (
    <article className="relative h-[384px] w-full rounded-3xl border border-[#CED0D3] bg-white p-[15px] font-[family-name:Satoshi]">
      <div className="h-[195.14px] w-full overflow-hidden rounded-xl bg-[#443131]">
        {image && (
          <img src={image} alt={title} className="size-full object-cover" />
        )}
      </div>

      <div className="mt-[20.86px] flex h-[131px] w-[280px] flex-col gap-4">
        <div className="h-[43px] w-full">
          <h3 className="truncate font-[family-name:Poppins] text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-black">
            {title}
          </h3>
          <p className="text-[12px] leading-[160%] text-[#4F4F4F]">
            by <span className="text-[#003BE2]">{author}</span>
          </p>
        </div>

        <div className="flex h-8 w-[237px] items-center gap-3">
          <span className="flex items-center gap-1 rounded-3xl bg-[#F5F5F6] px-3 py-[6px] text-[12px] font-medium leading-[14px] text-[#4B4C53]">
            <MdOutlineSignalCellularAlt className="size-5" />
            {level}
          </span>
          <AvatarStack avatars={avatars} count={learners} />
        </div>

        <p className="flex items-end">
          <span className="font-[family-name:Poppins] text-[20px] font-semibold leading-6 text-[#003BE2]">
            {price}
          </span>
          <span className="text-[12px] leading-[19px] text-[#4F4F4F]">
            {priceNote}
          </span>
        </p>
      </div>

      <div className="absolute right-[15px] top-[231px] flex items-center text-[18px] leading-[160%] text-[#4F4F4F]">
        {rating}
        <MdStarOutline className="size-6" />
      </div>
    </article>
  );
};

export default CourseCard;
