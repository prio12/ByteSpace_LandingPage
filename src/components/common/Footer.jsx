import { footerColumns, legalLinks } from "../../data/footerLinks";
import logo from "../../assets/images/b_vector_logo.png";

const Footer = () => {
  return (
    <footer className="h-[525px] border-t border-[#CED0D3] bg-white pt-[70px] font-[family-name:Satoshi] text-[#242528]">
      <div className="mx-auto flex h-[406px] w-[1200px] max-w-full flex-col gap-[130px]">
        <div className="flex h-[234px] gap-[92px]">
          <div className="flex w-[528px] shrink-0 flex-col gap-[45px]">
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
                className="flex items-start gap-6"
              >
                <input
                  type="email"
                  aria-label="Email address"
                  placeholder="Enter your email"
                  className="h-[52px] w-[376px] rounded-full border border-[#CED0D3] bg-white px-6 text-[16px] leading-[26px] outline-none placeholder:text-[#242528]"
                />
                <button
                  type="submit"
                  className="h-[46px] w-[104px] rounded-3xl bg-[#D4FB20] px-6 py-3 text-[18px] font-medium leading-[22px]"
                >
                  Search
                </button>
              </form>
              <p className="w-[504px] text-[12px] leading-[19px]">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>

          <div className="grid h-[222px] w-[580px] shrink-0 grid-cols-3 items-start gap-10">
            {footerColumns.map(({ title, links }, i) => (
              <div
                key={i}
                className={`flex flex-col gap-6 ${title ? "" : "self-end"}`}
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

        <div className="flex h-[42px] flex-col border-t border-[#CED0D3] pt-[22px] text-[12px] leading-[19px]">
          <div className="flex items-center justify-between">
            <p>@ 2023 ByteSpace. All rights reserved.</p>
            <div className="flex gap-6">
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
