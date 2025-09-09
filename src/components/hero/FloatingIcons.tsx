import { motion, type HTMLMotionProps } from "motion/react";
import ingredients from "/assets/hero/ingredients.svg";
import carrot from "/assets/hero/carrot.svg";
import rolling from "/assets/hero/rolling.svg";
import cherry from "/assets/hero/cherry.svg";

const ElementAnimatingInY = (props: HTMLMotionProps<"div">) => {
  const { transition, ...others } = props;
  return (
    <motion.div
      initial={{
        y: 7,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        duration: 1,
        ...transition,
      }}
      {...others}
    />
  );
};

const FloatingIcons = () => {
  return (
    <>
      {/* Right */}
      <ElementAnimatingInY className="bg-secondary-light-green absolute top-[20%] left-[10%] -z-1 rounded-full p-2.5 max-lg:blur-[1.5px]">
        <img
          className="size-8 max-md:size-6"
          src={ingredients}
          alt="Ingredient icon"
        />
      </ElementAnimatingInY>
      <ElementAnimatingInY
        initial={{
          y: 0,
        }}
        animate={{
          y: 7,
        }}
        transition={{
          delay: 0.5,
        }}
        className="border-secondary-green absolute top-[75%] left-[20%] -z-1 rounded-full border-2 p-2 max-lg:blur-[1.5px]"
      >
        <img className="size-7 max-md:size-5" src={carrot} alt="Carrot icon" />
      </ElementAnimatingInY>

      {/* Left */}
      <ElementAnimatingInY
        initial={{
          y: 0,
        }}
        animate={{
          y: 7,
        }}
        className="absolute top-[20%] right-[10%] -z-1 rounded-full border-2 p-2.5 max-lg:blur-[1.5px]"
      >
        <img className="size-8 max-md:size-6" src={cherry} alt="Cherry icon" />
      </ElementAnimatingInY>
      <ElementAnimatingInY
        transition={{
          delay: 0.5,
        }}
        className="bg-secondary-green max-md:bg-secondary-light-green absolute top-[75%] right-[20%] -z-1 rounded-full p-2 max-lg:blur-[1.5px] max-md:border-2"
      >
        <img
          className="size-7 max-md:size-5"
          src={rolling}
          alt="Rolling icon"
        />
      </ElementAnimatingInY>
    </>
  );
};

export default FloatingIcons;
