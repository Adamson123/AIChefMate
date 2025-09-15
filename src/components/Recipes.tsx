import { useEffect, useState } from "react";
import ArrowSvg from "./ui/ArrowSvg";
import Button from "./ui/Button";
import SectionHeader from "./ui/SectionHeader";
import first from "/assets/recipes/first.png";
import { motion, MotionValue, useMotionValue } from "motion/react";

const maxPercentage = 65;

const RollingImageRectangle = () => {
  const left = useMotionValue(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const unsub = left.on("change", (latest) => {
      const l = latest.toString();
      setOpacity(Number(l.substring(0, l.length - 1)) / maxPercentage);
    });
    return () => unsub();
  }, [opacity]);

  return (
    <div className="relative grid overflow-hidden rounded-[50px] border-2 p-7 md:grid-cols-[70%_30%] lg:max-xl:grid-cols-1">
      {/* Image Space */}
      <div className="h-40 md:hidden lg:max-xl:block" />
      <div className="flex flex-col items-start gap-7 max-md:items-center">
        <h3 style={{ opacity }} className="text-h3 max-md:text-center">
          Savory Quinoa and Roasted Vegetable Bowl
        </h3>
        <Button
          style={{ opacity }}
          colorType="light"
          className="changeArrowColorOnHover flex items-center gap-x-3 border-2"
        >
          Learn More <ArrowSvg />
        </Button>
      </div>
      {/* Image */}
      <motion.img
        style={{ left }}
        initial={{ left: `0%`, rotate: "-180deg" }}
        whileInView={{ left: `${maxPercentage}%`, rotate: "0deg" }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute right-0 aspect-square w-[35%] object-cover max-md:top-0 max-md:left-1/2 max-md:h-50 max-md:-translate-x-1/2 lg:max-xl:left-0 lg:max-xl:h-50"
        src={first}
        alt="Recipe 1"
      />

      {/* Image Space */}
      <div className="max-md:hidden lg:max-xl:hidden" />
    </div>
  );
};

const LeftContent = () => {
  const left = useMotionValue(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const unsub = left.on("change", (latest) => {
      const l = latest.toString();
      setOpacity(Number(l.substring(0, l.length - 1)) / maxPercentage);
    });
    return () => unsub();
  }, [opacity]);
  return (
    <div className="max-w-[750px]">
      {/* First */}
      <RollingImageRectangle />
      {/* Second */}
      <div></div>
      {/* Third */}
      <div></div>
    </div>
  );
};

const Recipes = () => {
  return (
    <section>
      <div className="common-max-width common-x-padding mx-auto">
        <SectionHeader
          title="Recipes"
          description="Recipes crafted by AI, personalized to perfectly align with your unique dietary needs and flavor preferences."
        />
        {/* Content */}
        <div className="grid justify-center lg:grid-cols-2">
          {/* Left */}
          <LeftContent />
          {/* Right */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Recipes;
