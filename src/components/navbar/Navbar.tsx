import { useState } from "react";
import Button from "../ui/Button";
import logo from "/assets/navbar/logo.svg";
import menuIcon from "/assets/navbar/menu.svg";
import Menu from "./Menu";

const links = [
  { name: "Recipes", path: "#" },
  { name: "Blog", path: "#" },
  { name: "Customer Support", path: "#" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpened] = useState(false);
  return (
    <nav className="bg-primary relative flex flex-col pt-[40px] pb-15 font-semibold md:pb-25 md:max-lg:text-[15px]">
      <div className="common-max-width fixed top-7 z-20 mx-auto flex w-[95%] items-center justify-between self-center rounded-[50px] bg-transparent p-[22px] shadow backdrop-blur-md">
        {/* Logo */}
        <div className="w-[15%] items-center gap-2">
          <img
            className="h-[25px] w-[40px] max-md:h-[35px] max-md:w-[50px]"
            src={logo}
            alt="AI chef mate logo"
          />
          <h3 className="font-syne text-sm text-nowrap max-lg:text-xs max-md:hidden">
            AI-ChefMate
          </h3>
        </div>
        {/* Links */}
        <ul className="flex gap-10 max-md:hidden xl:gap-20">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                className="transition-colors duration-300 hover:underline"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Right Section */}
        <div className="flex items-center gap-6 max-md:hidden">
          <a
            className="transition-colors duration-300 hover:underline"
            href="#"
          >
            Log In
          </a>
          <Button className="text-white">Start For Free</Button>
        </div>
        {/* Menu icon */}
        <img
          onClick={() => setIsMenuOpened(!isMenuOpen)}
          className="h-8 w-8 cursor-pointer md:hidden"
          src={menuIcon}
          alt="Menu icon"
        />
      </div>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpened={setIsMenuOpened} />
    </nav>
  );
};

export default Navbar;
