import { useState } from "react";
import { tabRows } from "../../data/courseTabs";
import TabButton from "../common/TabButton";

const CategoryTabs = () => {
  const [active, setActive] = useState("Featured");

  return (
    <section className="flow-root bg-white">
      <div className="mx-auto mt-[42px] px-4 flex max-w-[1440px] flex-col items-center gap-[21px]">
        {tabRows.map((row, i) => (
          <div key={i} className="flex flex-wrap justify-center gap-4">
            {row.map((label) =>
              label === "+ More" ? (
                <button
                  key={label}
                  type="button"
                  className="shrink-0 self-center whitespace-nowrap font-[family-name:Satoshi] text-[16px] font-medium leading-[19px] text-[#003BE2]"
                >
                  {label}
                </button>
              ) : (
                <TabButton
                  key={label}
                  label={label}
                  active={active === label}
                  onClick={() => setActive(label)}
                />
              ),
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryTabs;
