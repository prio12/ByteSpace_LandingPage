import { learningPaths } from "../../data/learningPaths";

const PathCards = () => {
  return (
    <section className="flow-root bg-white">
      <div className="mx-auto mt-[68px] flex w-full max-w-[1202px] gap-10">
        {learningPaths.map(({ id, label, icon }) => (
          <div
            key={id}
            className="flex size-[167px] shrink-0 items-center justify-center rounded-3xl border border-[#CED0D3] bg-white"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="grid size-[60px] place-items-center rounded-[40px] bg-[#D4FB20] p-3">
                {icon && <img src={icon} alt="" className="size-6" />}
              </div>
              <span className="whitespace-nowrap font-[family-name:Satoshi] text-[20px] font-medium leading-[120%] text-[#242528]">
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PathCards;
