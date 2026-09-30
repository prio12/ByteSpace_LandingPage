import { partners } from "../../data/partners";

const PartnerLogos = () => {
  return (
    <section className="bg-[#F5F5F6]">
      <div className="mx-auto h-[202px] w-full max-w-[1440px] px-[154px] py-20">
        <div className="flex h-[42px] w-full max-w-[1132px] items-center gap-[72px]">
          {partners.map(({ id, src, alt, width, height }) => (
            <img
              key={id}
              src={src}
              alt={alt}
              style={{ width, height }}
              className="shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
