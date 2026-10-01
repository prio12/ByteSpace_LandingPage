import GlowBackground from "../common/GlowBackground";
import { testimonialGlows } from "../../data/glows";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section className="relative h-[784px] overflow-hidden bg-[#FAFAFA]">
      <GlowBackground items={testimonialGlows} />

      <div className="relative z-10 mx-auto flex w-[1204px] max-w-full flex-col gap-[72px] pt-[74px]">
        <div className="flex w-[1200px] items-end gap-[43px]">
          <h2 className="w-[577px] shrink-0 font-[family-name:Poppins] text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-black">
            Discover What Our Community Is Saying
          </h2>
          <p className="w-[580px] shrink-0 font-[family-name:Satoshi] text-[18px] leading-[29px] text-[#4F4F4F]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="flex items-start gap-[41px]">
          {testimonials.map(
            ({ id, name, role, avatar, nameLeading, quote }) => (
              <article
                key={id}
                className="flex w-[374px] shrink-0 flex-col gap-6 rounded-3xl bg-white p-6"
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
