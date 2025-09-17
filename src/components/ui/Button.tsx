import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export type ColorType = "dark" | "light" | "transparent" | "transparent-light";

const getClassesBasedOncolorType = (colorType: ColorType) => {
  switch (colorType) {
    case "dark":
      return "lightGreenliquidAnimationButton bg-secondary-green hover:text-secondary-green text-white";
    case "light":
      return "greenliquidAnimationButton bg-secondary-light-green text-secondary-green hover:text-white";
    case "transparent":
      return "greenliquidAnimationButton bg-secondary-light-green text-secondary-green hover:text-white border-secondary-green border-2 bg-transparent hover:text-white";
    case "transparent-light":
      return "lightGreenliquidAnimationButton bg-secondary-green text-white border-secondary-green border-2 bg-transparent hover:text-secondary-green";
  }
};

/**
 * @prop colorType: light or transparent brings up dark green color liquid, while dark  brings up light green color liquid 
   
*/
const Button = (
  props: HTMLAttributes<HTMLButtonElement> & { colorType?: ColorType },
) => {
  const { className, colorType = "dark", ...others } = props;

  return (
    <button
      {...others}
      className={cn(
        "rounded-[50px] px-7 py-2.5 text-nowrap transition-all duration-300 xl:px-9 xl:py-3.5",
        getClassesBasedOncolorType(colorType),
        className,
      )}
    />
  );
};

export default Button;
