import { cn } from "../lib/cn";
import Button from "./ui/Button";
import NotchedSection from "./ui/NotchedSection";
import SectionHeader from "./ui/SectionHeader";
import arrow from "/assets/howitworks/arrow.svg";
import first from "/assets/howitworks/first.jpg";
import second from "/assets/howitworks/second.jpg";
import third from "/assets/howitworks/third.jpg";

const images = [third, second, first];

const HowItWorksElements = () => {
  return (
    <div className="common-max-width common-x-padding mx-auto overflow-hidden max-md:pb-17">
      <SectionHeader
        title="How it works"
        description="Step into the world of hassle-free meal planning with our easy 3-step process"
        bgClassName="bg-primary"
        titleClassName="min-[530px]:text-nowrap"
      />
      {/*  md:grid-cols-2 */}
      <div className="mt-7 flex justify-between max-lg:mt-25 max-lg:flex-col">
        {/* Left */}
        <div className="flex flex-col max-lg:items-center max-lg:text-center lg:w-[50%]">
          <div className="mb-5">
            <h2 className="text-h2">01</h2>
            <h3 className="text-h3">Personalize Your Profile</h3>
          </div>
          <p className="mb-15 max-w-150">
            Begin by creating your profile. Tell us about your dietary
            preferences, nutritional goals, and budget. Our AI technology
            tailors every meal plan to fit your unique needs.
          </p>
          <div className="mb-10 flex gap-x-4">
            <Button colorType="transparent" className="py-4 md:py-4 xl:py-4">
              <img src={arrow} alt="Arrow" className="rotate-180" />
            </Button>
            <Button colorType="light" className="border-2">
              <img src={arrow} alt="Arrow" />
            </Button>
          </div>
          <h3 className="text-h3 translate-y-28 max-lg:hidden">01/03</h3>
        </div>
        {/* Right */}
        <div
          className={cn(
            "relative h-[550px] lg:w-[40%]",
            "max-md:h-[400px]",
            "lg:max-xl:-translate-x-16",
          )}
        >
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              style={{
                rotate: `${i * 7}deg`,
                transform: `translateX(${i * 80}px)`,
              }}
              className={cn(
                "absolute rounded-[50px] object-cover max-lg:left-1/2 max-lg:-translate-x-[60%]",
                i === 0 && "scale-y-[0.8]",
                i === images.length - 1 && "-translate-y-10",
                "h-[420px] w-[330px]",
                //  "max-w-[330px] max-lg:aspect-[1/2] max-lg:w-[60%]",
                "max-md:h-[330px] max-md:max-w-[230px] max-md:-translate-x-[90%]",
                "lg:max-xl:h-[370px] lg:max-xl:w-[260px]",
              )}
            />
          ))}
        </div>
      </div>
      <h3 className="text-h3 translate-y-16 text-center md:translate-y-0 lg:hidden">
        01/03
      </h3>
    </div>
  );
};
const HowItWorks = () => {
  return (
    <>
      <NotchedSection notchPos="bc" className="pt-17 lg:hidden">
        <HowItWorksElements />
      </NotchedSection>
      <NotchedSection notchPos="bl" className="pt-17 max-lg:hidden">
        <HowItWorksElements />
      </NotchedSection>
    </>
  );
};

export default HowItWorks;
