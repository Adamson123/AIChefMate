import { cn } from "../../lib/cn";
import Button from "../ui/Button";
import FloatingIcons from "./FloatingIcons";
import Odometer from "./Odometer";
import markus from "/assets/hero/markus.jpg";
import spag from "/assets/hero/spag.jpg";
import bag from "/assets/hero/bag.jpg";
import plant from "/assets/hero/plant.jpg";

//h-[330px] xl:h-[370px]
const HeroCard = ({
  className,
  percentage,
  title,
  image,
}: {
  className?: string;
  percentage: number;
  title: string;
  image: string;
}) => {
  return (
    <div
      className={cn(
        "flex h-82 max-w-70 flex-col gap-5 rounded-2xl bg-white p-3 xl:h-97",
        className,
      )}
    >
      <div className="flex flex-col max-md:items-center">
        {/* <h1 className="text-h1">{percentage}%</h1> */}
        <div className="flex items-center">
          <Odometer
            min={0}
            max={percentage}
            className="-space-x-1 md:-space-x-2"
          />
          <span className="text-h1">%</span>
        </div>
        <p>{title}</p>
      </div>
      <div className="flex-1 overflow-hidden">
        <img
          className="object-cove h-full w-full rounded-2xl"
          src={image}
          alt="Markus image"
        />
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="bg-primary pb-[70px]">
      <div className="common-max-width common-x-padding relative mx-auto flex flex-col items-center gap-12 pt-[100px]">
        {/* Icons */}
        {/* Head */}
        <div className="relative z-10 flex w-full flex-col items-center text-center">
          <FloatingIcons />
          <h1 className="text-h1 max-w-[800px] leading-10 md:leading-12 lg:leading-14 xl:leading-16">
            Elevate Your Mealtime with AI-Powered Personalization
          </h1>
          <p className="mt-5 max-md:mt-4">
            Effortless Planning, Healthier Eating
          </p>
        </div>
        {/*  */}
        <div className="flex h-77 gap-5 md:h-82 xl:h-97">
          {/* Left */}
          <div className="grid gap-5 max-md:hidden xl:grid-cols-2">
            <HeroCard
              percentage={95}
              title="Improved Eating Habits"
              image={markus}
              className="pt-2 xl:-translate-y-15"
            />
            <img
              className="h-82 rounded-2xl object-cover max-xl:hidden xl:h-97"
              src={spag}
              alt="Markus image"
            />
          </div>
          {/* Middle ,gap-15*/}
          <div className="flex flex-col items-center justify-between">
            {/*  Buttons*/}
            <div className="flex flex-col gap-5">
              <Button
                colorType="transparent"
                className="max-md:px-12 max-md:py-4"
              >
                Try Our Demo
              </Button>
              <Button className="max-md:px-12 max-md:py-4">
                Start For Free
              </Button>
            </div>
            {/* Users */}
            <div className="text-secondary-light-green bg-secondary-green rounded-2xl px-10 py-5 text-center max-md:px-16 max-md:py-6">
              {/* <p className="text-h1">30 000 +</p> */}
              <div className="flex items-center gap-2.5">
                <Odometer
                  space={2}
                  min={10000}
                  max={30000}
                  className="-space-x-0.5"
                />
                <span className="text-h1">+</span>
              </div>
              <p className="mt-2">Happy Users</p>
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-5 max-md:hidden xl:grid-cols-2">
            <HeroCard
              percentage={25}
              title="Saved on Groceries"
              image={bag}
              className="flex-col-reverse pb-5"
            />
            <img
              className="h-82 -translate-y-15 rounded-2xl object-cover max-xl:hidden xl:h-97"
              src={plant}
              alt="Vegetable plant image"
            />
          </div>
        </div>
        {/* Small devices */}
        <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-5 min-[600px]:flex-row md:hidden">
          <HeroCard
            percentage={95}
            title="Improved Eating Habits pt-2"
            image={markus}
          />
          <HeroCard
            percentage={25}
            title="Saved on Groceries"
            image={bag}
            className="flex-col-reverse pb-5"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
