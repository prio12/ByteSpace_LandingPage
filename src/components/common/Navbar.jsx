import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import Logo from "../../assets/icons/Header_Logo.png";
import Icon from "../../assets/icons/BookmarkVector.png";

const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "Courses", href: "#" },
  { label: "Creators", href: "#" },
];

const authLinks = [
  { label: "Sign In", href: "#" },
  { label: "Join Us", href: "#" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 mx-auto flex h-[120px] w-full max-w-[1440px] items-start justify-between px-6 pt-[35px] font-[family-name:Satoshi] text-[16px] text-[#F5F5F6] xl:pl-[122px] xl:pr-[120px]">
      <a href="#" className="shrink-0">
        <img src={Logo} alt="ByteSpace" className="h-[37px] w-[171px]" />
      </a>

      <nav className="mt-3 hidden shrink-0 gap-6 lg:flex">
        {navLinks.map(({ label, href, active }) => (
          <a
            key={label}
            href={href}
            className={
              active
                ? "font-medium leading-[120%]"
                : "font-normal leading-[160%]"
            }
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="mt-[13px] hidden shrink-0 items-center gap-6 leading-6 lg:flex">
        {authLinks.map(({ label, href }) => (
          <a key={label} href={href}>
            {label}
          </a>
        ))}
        <a href="#" aria-label="Bookings">
          <img src={Icon} alt="" className="size-6" />
        </a>
      </div>

      <button
        type="button"
        className="mt-1 lg:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <MdClose className="size-8" /> : <MdMenu className="size-8" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full flex flex-col gap-5 border-t border-white/20 bg-[#003BE2] px-6 pb-6 pt-5 lg:hidden">
          {[...navLinks, ...authLinks].map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
