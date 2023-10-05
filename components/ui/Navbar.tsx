import Link from "next/link";

type NavLinkT = {
  text: string;
  link: string;
};

const navLinkA: NavLinkT[] = [
  {
    text: "home",
    link: "#",
  },
  {
    text: "service",
    link: "#service",
  },
  {
    text: "succes",
    link: "#succes",
  },
  {
    text: "contact",
    link: "#contact",
  },
];

function Navbar() {
  return (
    <nav className="fixed z-[9999] flex h-20 w-full items-center justify-center bg-red-300/30">
      <div className="flex h-full w-full max-w-[1400px] items-center justify-between bg-blue-400/30 px-5">
        <div className="">LOGO HERE</div>
        <ul className="flex items-center justify-center gap-7">
          {navLinkA.map((item, index) => (
            <div key={index}>
              <NavLinkC {...item} />
            </div>
          ))}
        </ul>
        <Link
          className="bg-custom rounded-md px-4 py-2 font-semibold text-white"
          href={"/#contact"}
        >
          Apply Now
        </Link>
      </div>
    </nav>
  );
}

function NavLinkC(props: NavLinkT) {
  return (
    <Link
      scroll={false}
      className="group relative text-lg font-semibold capitalize "
      href={`/${props.link}`}
    >
      <span className="absolute -left-[1px] -top-[2px] font-bold opacity-0 transition-all duration-300 group-hover:opacity-100">
        {props.text}
      </span>
      <span className="opacity-100 transition-all duration-300 group-hover:opacity-0">
        {props.text}
      </span>
    </Link>
  );
}

export default Navbar;
