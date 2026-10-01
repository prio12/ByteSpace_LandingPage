import GlowBackground from "../common/GlowBackground";
import { testimonialGlows } from "../../data/glows";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] pb-16 min-[1240px]:h-[784px] min-[1240px]:pb-0">
      <GlowBackground items={testimonialGlows} />

      <div
        className="relative z-10 mx-auto flex w-[1204px] max-w-full flex-col gap-[72px] pt-[74px] max-[1239px]:gap-12 
      max-[1239px]:px-6 max-[1239px]:pt-16"
      >
        <div className="flex w-full flex-col gap-6 min-[1240px]:w-[1200px] min-[1240px]:flex-row min-[1240px]:items-end min-[1240px]:gap-[43px]">
          <h2 className="w-full min-[1240px]:w-[577px] min-[1240px]:shrink-0 max-md:text-[32px] font-[family-name:Poppins] text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-black">
            Discover What Our Community Is Saying
          </h2>
          <p className="w-full min-[1240px]:w-[580px] min-[1240px]:shrink-0 font-[family-name:Satoshi] text-[18px] leading-[29px] text-[#4F4F4F]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-6 min-[800px]:grid-cols-2 min-[1240px]:flex min-[1240px]:items-start min-[1240px]:gap-[41px]">
          {testimonials.map(
            ({ id, name, role, avatar, nameLeading, quote }) => (
              <article
                key={id}
                className="flex w-full max-w-[374px] shrink-0 min-[1240px]:w-[374px] min-[800px]:max-[1239px]:last:col-span-2 flex-col gap-6 rounded-3xl bg-white p-6"
              >
                {avatar ? (
                  <img
                    src={avatar}
                    alt=""
                    className="size-20 rounded-full object-cover"
                  />
                ) : (
                  <div className="size-20 rounded-full bg-[#CBD0D8]" />
                )}
                <div>
                  <h3
                    className={`font-[family-name:Poppins] text-[20px] font-semibold text-black ${nameLeading}`}
                  >
                    {name}
                  </h3>
                  <p className="font-[family-name:Satoshi] text-[18px] leading-[29px] text-[#003BE2]">
                    {role}
                  </p>
                </div>
                <p className="font-[family-name:Satoshi] text-[18px] leading-[29px] text-[#4F4F4F]">
                  {quote}
                </p>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
