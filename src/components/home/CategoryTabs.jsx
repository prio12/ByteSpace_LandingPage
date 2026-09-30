import { useState } from "react";
import { tabRows } from "../../data/courseTabs";
import TabButton from "../common/TabButton";

const CategoryTabs = () => {
  const [active, setActive] = useState("Featured");

  return (
    <section className="flow-root bg-white">
      <div className="mx-auto mt-[42px] flex max-w-[1440px] flex-col items-center gap-[21px]">
        {tabRows.map((row, i) => (
          <div key={i} className="flex justify-center gap-4">
            {row.map((label) => (
              <TabButton
                key={label}
                label={label}
                active={active === label}
                onClick={() => setActive(label)}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryTabs;
