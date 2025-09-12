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
    <div className="common-max-width common-x-padding mx-auto max-md:pb-17">
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
          <h3 className="text-h3 translate-y-17 max-xl:translate-y-10 max-lg:hidden">
            01/03
          </h3>
        </div>
        {/* Right */}
        {/* This will affect the section container's height */}
        <div
          className={cn(
            "relative lg:w-[40%]",
            "h-[500px]",
            "lg:max-xl:h-[430px]",
            "max-[593px]:h-[400px]",
            "lg:max-xl:-translate-x-16",
          )}
        >
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              style={{
                ["--tx" as any]: `${i * 80}px`,
                ["--sm-tx" as any]: `${i * 30}px`,
                ["--rot" as any]: `${i * 7}deg`,
                //  transform: `translateX(${i * 80}px)`,
              }}
              className={cn(
                "absolute rounded-[50px] object-cover",
                "rotate-[var(--rot)]",
                i === 0 && "scale-y-[0.8]",
                //    i === images.length - 1 && "-translate-y-10",
                /* Default size */ "h-[420px] w-[330px]",
                /* Small devices size and position  */ "max-[593px]:h-[330px] max-[593px]:max-w-[230px]",
                /* Lg devices */ "lg:max-xl:h-[370px] lg:max-xl:w-[260px]",
                /* Default Pos */ "translate-x-[var(--tx)]",
                "max-lg:translate-y-9",
                "max-lg:left-[45%] max-lg:-translate-x-[calc(50%-var(--tx))]",
                "max-md:-translate-x-[calc(50%-var(--sm-tx))]",
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
