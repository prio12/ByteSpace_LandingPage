const AvatarStack = ({ avatars, count }) => {
  return (
    <div className="flex -space-x-2">
      {avatars.map((src, i) =>
        src ? (
          <img
            key={i}
            src={src}
            alt=""
            className="size-8 rounded-full object-cover"
          />
        ) : (
          <div key={i} className="size-8 rounded-full bg-[#CBD0D8]" />
        ),
      )}
      <div className="grid size-8 place-items-center rounded-full bg-[#D4FB20] text-[12px] font-medium leading-5 text-[#242528]">
        {count}
      </div>
    </div>
  );
};

export default AvatarStack;
