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
  return (
    <header className="mx-auto flex h-[120px] w-full max-w-[1440px] items-start gap-[321.5px] pl-[122px] pt-[35px] font-[family-name:Satoshi] text-[16px] text-[#F5F5F6]">
      <a href="#" className="shrink-0">
        <img src={Logo} alt="ByteSpace" className="h-[37px] w-[171px]" />
      </a>

      <nav className="mt-3 flex shrink-0 gap-6">
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

      <div className="mt-[13px] flex shrink-0 items-center gap-6 leading-6">
        {authLinks.map(({ label, href }) => (
          <a key={label} href={href}>
            {label}
          </a>
        ))}
        <a href="#" aria-label="Bookings">
          <img src={Icon} alt="" className="size-6" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
