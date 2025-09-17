import lightLogo from "/assets/footer/light-logo.svg";
import facebook from "/assets/footer/facebook.svg";
import x from "/assets/footer/x.svg";
import ticktok from "/assets/footer/tiktok.svg";
import Attribution from "./ui/Attribution";

const links = [
  { name: "Recipes", path: "#" },
  { name: "Customer Support", path: "#" },
  { name: "Blog", path: "#" },
  { name: "Your Profile", path: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-secondary-green pt-13 pb-5 xl:pt-18 xl:pb-7">
      <div className="common-max-width common-x-padding mx-auto text-[16px] max-xl:text-sm [&_a]:underline">
        <div className="flex justify-between gap-10 max-md:flex-col md:max-lg:items-end">
          {/* Left  */}
          <div className="flex items-start gap-x-25 gap-y-13 max-lg:flex-col">
            <img
              className="h-[45px] w-[65px]"
              src={lightLogo}
              alt="AI chef mate logo"
            />

            <ul className="grid grid-cols-2 gap-x-6 gap-y-10">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-secondary-light-green transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Right */}
          <div className="flex gap-x-25 gap-y-10 max-xl:flex-col">
            <p className="text-secondary-light-green leading-p max-w-[500px]">
              Join us on our journey to make meal planning simple and joyful.
              Connect with us on social media, explore our FAQs for quick
              answers, or drop us a line anytime.
            </p>
            {/* Socials */}
            <div className="flex gap-2 xl:flex-col">
              {[facebook, x, ticktok].map((icon) => (
                <img
                  className="h-8 min-h-8 w-8 min-w-8"
                  src={icon}
                  alt="Social media icon"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <p className="text-cente mt-15 text-white">
          © 2064 AIChefMate. All rights reserved.
          {/* |{" "}
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a> */}
        </p>
        <Attribution className="mt-7 text-xs" />
      </div>
    </footer>
  );
};

export default Footer;
