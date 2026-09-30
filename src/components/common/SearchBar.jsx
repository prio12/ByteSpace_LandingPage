import searchIcon from "../../assets/icons/searchIcon.png";

const SearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[581px] items-start gap-4 font-[family-name:Satoshi]"
    >
      <label className="flex h-[52px] min-w-0 flex-1 items-center gap-2 rounded-3xl bg-white px-6 py-3">
        <img src={searchIcon} alt="" className="size-6 shrink-0" />
        <input
          type="text"
          aria-label="Search courses"
          placeholder="Course, topic, creator"
          className="w-full bg-transparent text-[18px] leading-[160%] text-[#242528] outline-none placeholder:text-[#82868E]"
        />
      </label>

      <button
        type="submit"
        className="h-[46px] w-[104px] shrink-0 rounded-3xl bg-[#D4FB20] px-6 py-3 text-[18px] font-medium leading-[22px] text-[#242528]"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
