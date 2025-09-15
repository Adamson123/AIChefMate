import { useEffect, useState } from "react";
import ArrowSvg from "../ui/ArrowSvg";
import Button from "../ui/Button";
import first from "/assets/recipes/first.png";
import {
  motion,
  useMotionValue,
  type TargetAndTransition,
  type VariantLabels,
} from "motion/react";
import { cn } from "../../lib/cn";
const maxPercentage = 65;

const BouncingImageRectangle = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex max-w-[500px] flex-col items-center rounded-[50px] border-2 p-5 min-[650px]:hidden",
        className,
      )}
    >
      {/* Image */}
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="aspect-square w-[45%] object-cover"
        src={first}
        alt="Recipe 1"
      />
      {/* Text */}

      <div className="flex flex-col items-center gap-7 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-h3"
        >
          {text}
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Button
            colorType="light"
            className="changeArrowColorOnHover flex items-center gap-x-3 border-2"
          >
            Learn More <ArrowSvg />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

const RollingImageRectangle = ({
  text,
  className,
  imageInitial,
  imageWhileInView,
  imageClassName,
  textContainerClassName,
  positionToTrack = "left",
}: {
  text: string;
  className?: string;
  imageClassName?: string;
  textContainerClassName?: string;
  imageInitial?: boolean | TargetAndTransition | VariantLabels | undefined;
  imageWhileInView?: TargetAndTransition | VariantLabels | undefined;
  positionToTrack?: string;
}) => {
  const position = useMotionValue(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const unsub = position.on("change", (latest) => {
      const l = latest.toString();
      setOpacity(Number(l.substring(0, l.length - 1)) / maxPercentage);
    });
    return () => unsub();
  }, [opacity]);

  return (
    <div
      className={cn(
        "relative flex w-full items-center rounded-[50px] border-2 p-7 max-[650px]:hidden lg:max-xl:py-4",
        className,
      )}
    >
      {/* Text */}
      <div
        style={{
          ["--blur-var" as any]: (1 - opacity) * 5 + "px",
        }}
        className={cn(
          "flex w-[70%] flex-col items-start gap-7 lg:max-xl:gap-4",
          `blur-[var(--blur-var)]`,
          textContainerClassName,
        )}
      >
        <h3 className="text-h3 max-w-[90%]">{text}</h3>
        <Button
          colorType="light"
          className="changeArrowColorOnHover flex items-center gap-x-3 border-2"
        >
          Learn More <ArrowSvg />
        </Button>
      </div>
      {/* Image */}
      <motion.img
        style={{ [positionToTrack]: position }}
        initial={imageInitial || { left: `0%`, rotate: "-180deg" }}
        whileInView={
          imageWhileInView || { left: `${maxPercentage}%`, rotate: "0deg" }
        }
        transition={{ duration: 1, delay: 0.3 }}
        className={cn(
          "absolute right-0 aspect-square w-[35%] object-cover",
          imageClassName,
        )}
        src={first}
        alt="Recipe 1"
      />

      {/* Image Space */}
      <div className="w-[30%]" />
    </div>
  );
};

const firstText = "Savory Quinoa and Roasted Vegetable Bowl";
const secondText = "Herb-Infused Grilled Chicken with Seasonal Greens";
const thirdText = "Mediterranean Lentil and Kale Salad";

const RecipeLeftContent = () => {
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
    <div className="flex max-w-[750px] flex-col items-start gap-5">
      {/* First */}
      <RollingImageRectangle text={firstText} />
      <BouncingImageRectangle text={firstText} />
      {/* Second */}
      <RollingImageRectangle
        text={secondText}
        positionToTrack="right"
        imageInitial={{ right: "0%", rotate: "-180deg" }}
        imageWhileInView={{ right: `${maxPercentage}%`, rotate: "0deg" }}
        textContainerClassName="translate-x-5"
        className="bg-secondary-light-green flex-row-reverse rounded-full border-none"
      />
      <BouncingImageRectangle
        className="bg-secondary-light-green border-none"
        text={secondText}
      />
      {/* Third */}
      <RollingImageRectangle
        text={thirdText}
        className="bg-primary border-none"
      />
      <BouncingImageRectangle
        className="bg-primary border-none"
        text={thirdText}
      />
    </div>
  );
};

export default RecipeLeftContent;
