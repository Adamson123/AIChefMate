import Button from "./ui/Button";
import logo from "/assets/navbar/logo.svg";
import menuIcon from "/assets/navbar/menu.svg";

const links = [
  { name: "Recipes", path: "#" },
  { name: "Blog", path: "#" },
  { name: "Customer Support", path: "#" },
];

const Navbar = () => {
  return (
    <nav className="bg-primary pt-[40px] font-semibold md:max-lg:text-[15px]">
      <div className="common-max-width common-x-padding mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="w-[15%]">
          <img
            className="h-[45px] w-[65px]"
            src={logo}
            alt="AI chef mate logo"
          />
        </div>
        {/* Links */}
        <ul className="flex gap-12 max-md:hidden xl:gap-20">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                className="hover:text-secondary-light-green transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Right Section */}
        <div className="flex items-center gap-6 max-md:hidden">
          <a
            className="hover:text-secondary-light-green transition-colors duration-300"
            href="#"
          >
            Log In
          </a>
          <Button className="text-white">Start For Free</Button>
        </div>
        {/* Menu icon */}
        <img
          className="h-7 w-7 cursor-pointer md:hidden"
          src={menuIcon}
          alt="Menu icon"
        />
      </div>
    </nav>
  );
};

export default Navbar;
