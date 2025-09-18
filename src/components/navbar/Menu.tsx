import type { Dispatch, SetStateAction } from "react";
import { cn } from "../../lib/cn";
import Button from "../ui/Button";
import Attribution from "../ui/Attribution";
import ArrowSvg from "../ui/ArrowSvg";
import logo from "/assets/navbar/logo.svg";

const links = [
  { name: "Recipes", path: "#" },
  { name: "Blog", path: "#" },
  { name: "Customer Support", path: "#" },
];

const Menu = ({
  isMenuOpen,
  setIsMenuOpened,
}: {
  isMenuOpen: boolean;
  setIsMenuOpened: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => setIsMenuOpened(false)}
      className={cn(
        "fixed inset-0 z-30 font-normal transition-all duration-300 ease-in-out md:hidden",
        !isMenuOpen && "pointer-events-none opacity-0",
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "bg-primary ml-auto flex h-screen w-full flex-col py-5 transition-all duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-100",
        )}
      >
        {/* Top */}
        <div className="flex w-full items-center justify-end px-5">
          <div className="text-secondary-text-color-2 absolute top-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1">
            <img
              className="h-[40px] w-[55px]"
              src={logo}
              alt="AI chef mate logo"
            />
            <h3 className="font-syne text-nowrap">AI-ChefMate</h3>
          </div>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMenuOpened(false)}
            className="text-secondary-green bg-secondary-light-green hover:bg-secondary-green top-5 mt-3 flex h-8 w-8 items-center justify-center rounded-full text-4xl font-light transition-colors duration-300 hover:text-white"
          >
            &times;
          </button>
        </div>

        {/* Links */}
        <ul className="mt-20">
          {links.map((link) => (
            <li
              key={link.name}
              className="px-5 py-4 text-lg last:border-b-0 hover:bg-white/40"
            >
              <a href="#" className="flex items-center gap-2">
                {link.name}
                <ArrowSvg className="[&_path]:fill-secondary-green h-4 w-4 -rotate-45" />
                {/* 
                  <ArrowSvg className="[&_path]:fill-secondary-green [&_path]:stroke-secondary-light-green h-5 w-5 -rotate-45 [&_path]:stroke-2" /> */}
              </a>
            </li>
          ))}
        </ul>
        {/* Bottom */}
        <div className="mt-7 px-5">
          <Button colorType="light" className="w-full">
            Start For Free
          </Button>
        </div>

        <Attribution
          designerClassName="text-secondary-green"
          className="text-secondary-green mt-auto pb-0"
        />
      </div>
    </div>
  );
};

export default Menu;
