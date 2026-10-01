import { footerColumns, legalLinks } from "../../data/footerLinks";
import logo from "../../assets/images/b_vector_logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-[#CED0D3] bg-white pb-10 pt-12 font-[family-name:Satoshi] text-[#242528] min-[1240px]:h-[525px] min-[1240px]:pb-0 min-[1240px]:pt-[70px]">
      <div className="mx-auto flex w-[1200px] max-w-full flex-col gap-12 px-6 min-[1240px]:h-[406px] min-[1240px]:gap-[130px] min-[1240px]:px-0">
        <div className="flex flex-col gap-12 min-[1240px]:h-[234px] min-[1240px]:flex-row min-[1240px]:gap-[92px]">
          <div className="flex w-full max-w-[528px] flex-col gap-[45px] min-[1240px]:w-[528px] min-[1240px]:shrink-0">
            <div className="flex flex-col gap-4">
              <div className="flex h-[37px] w-[171px] gap-2">
                <img src={logo} alt="" className="h-8 w-[29px] self-start" />
                <span className="self-end font-clash text-[24px] font-bold leading-[30px]">
                  ByteSpace
                </span>
              </div>
              <p className="text-[14px] leading-[22px]">
                Stay Up to date with our latest features and releases by joining
                our newsletter.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-start gap-3 min-[1240px]:gap-6"
              >
                <input
                  type="email"
                  aria-label="Email address"
                  placeholder="Enter your email"
                  className="h-[52px] min-w-0 flex-1 rounded-full border border-[#CED0D3] bg-white px-6 text-[16px] leading-[26px] outline-none placeholder:text-[#242528] min-[1240px]:w-[376px] min-[1240px]:flex-none"
                />
                <button
                  type="submit"
                  className="h-[46px] w-[104px] shrink-0 rounded-3xl bg-[#D4FB20] px-6 py-3 text-[18px] font-medium leading-[22px]"
                >
                  Search
                </button>
              </form>
              <p className="w-full max-w-[504px] text-[12px] leading-[19px]">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>

          <div className="grid w-full max-w-[580px] grid-cols-3 items-start gap-4 min-[640px]:gap-10 min-[1240px]:h-[222px] min-[1240px]:w-[580px] min-[1240px]:shrink-0">
            {footerColumns.map(({ title, links }, i) => (
              <div
                key={i}
                className={`flex min-w-0 flex-col gap-6 ${title ? "" : "mt-12"}`}
              >
                {title && <h4 className="text-[16px] leading-6">{title}</h4>}
                <ul className="flex flex-col gap-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[14px] leading-[22px]">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col border-t border-[#CED0D3] pt-[22px] text-[12px] leading-[19px] min-[640px]:h-[42px]">
          <div className="flex flex-col gap-3 min-[640px]:flex-row min-[640px]:items-center min-[640px]:justify-between">
            <p>@ 2023 ByteSpace. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <a key={link} href="#">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
