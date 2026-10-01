import { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import Logo from "../../assets/images/b_vector_logo.png";
import Icon from "../../assets/icons/BookmarkVector.png";

const navLinks = [
  { label: "Home", to: "/", active: true },
  { label: "Courses", to: "#" },
  { label: "Creators", to: "#" },
];

const authLinks = [
  { label: "Sign In", to: "/login" },
  { label: "Join Us", to: "/register" },
];

const Navbar = ({ logoOnly = false }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 mx-auto flex h-[120px] w-full max-w-[1440px] items-start justify-between px-6 pt-[35px] font-[family-name:Satoshi] text-[16px] text-[#F5F5F6] xl:pl-[122px] xl:pr-[120px]">
      <Link
        to="/"
        className={`flex h-[37px] shrink-0 items-start ${
          logoOnly ? "w-[28.875px]" : "w-[171px]"
        }`}
      >
        <img
          src={Logo}
          alt="ByteSpace"
          className="mt-0 h-[31.5px] w-[28.875px]"
        />

        {!logoOnly && (
          <span
            className="
        ml-[6.12px]
        mt-[7px]
        h-[30px]
        w-[134px]
        font-[family-name:'Clash_Display']
        text-[24px]
        font-bold
        leading-[100%]
        text-[#F5F5F6]
      "
          >
            ByteSpace
          </span>
        )}
      </Link>

      {!logoOnly && (
        <>
          <nav className="mt-3 hidden shrink-0 gap-6 lg:flex">
            {navLinks.map(({ label, to, active }) => (
              <Link
                key={label}
                to={to}
                className={
                  active
                    ? "font-medium leading-[120%]"
                    : "font-normal leading-[160%]"
                }
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-[13px] hidden shrink-0 items-center gap-6 leading-6 lg:flex">
            {authLinks.map(({ label, to }) => (
              <Link key={label} to={to}>
                {label}
              </Link>
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
            {open ? (
              <MdClose className="size-8" />
            ) : (
              <MdMenu className="size-8" />
            )}
          </button>

          {open && (
            <div className="absolute inset-x-0 top-full flex flex-col gap-5 border-t border-white/20 bg-[#003BE2] px-6 pb-6 pt-5 lg:hidden">
              {[...navLinks, ...authLinks].map(({ label, to }) => (
                <Link key={label} to={to} onClick={() => setOpen(false)}>
                  {label}
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </header>
  );
};

export default Navbar;
