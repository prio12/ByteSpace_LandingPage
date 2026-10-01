import { partners } from "../../data/partners";

const PartnerLogos = () => {
  return (
    <section className="bg-[#F5F5F6]">
      <div className="mx-auto h-[202px] w-full max-w-[1440px] px-[154px] py-20 max-[1439px]:px-6 max-[955px]:h-auto max-[955px]:py-12">
        <div className="mx-auto flex h-[42px] w-full max-w-[1132px] items-center justify-between max-[955px]:h-auto max-[955px]:flex-wrap max-[955px]:justify-center max-[955px]:gap-x-10 max-[955px]:gap-y-6">
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
