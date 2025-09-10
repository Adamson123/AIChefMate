import { cn } from "../lib/cn";
import SectionHeader from "./ui/SectionHeader";
import leaf from "/assets/demo/leaf.jpg";
import play from "/assets/demo/play.svg";

const Demo = () => {
  const curveBgWidth =
    "max-w-[calc((var(--max-section-width)+(100vw-var(--max-section-width))/2))]";
  return (
    <section className="common-l-padding pt-12 pb-20">
      <div className="common-max-width mx-auto">
        <SectionHeader
          title="Demo"
          description="See how it works: your personalized meal planning journey"
        />
      </div>
      {/* min-[1873px]:pl-[10%] xl:pl-[3%] */}
      <div className="flex justify-end">
        {/* Curve Bg */}

        <div
          className={cn(
            "border-secondary-green common-y-padding flex w-full justify-start rounded-l-[500px] border-r-0 md:border",
            curveBgWidth,
          )}
        >
          <div className="common-max-width common-x-padding common-x-gap grid w-full grid-cols-[auto_35.5%] items-center max-md:grid-cols-1 max-md:gap-10">
            {/* Image Container */}
            {/* Image Wrapper:
              - Green border and large rounding to visually frame the image.
              - common-padding adds consistent inner spacing so the image doesn’t touch the border.
            */}
            <div className="border-secondary-green common-padding relative rounded-[500px] border">
              {/*// 🌱 Responsive image behavior:
// - Default: Full width of container, rounded into a circle/oval, cropped nicely with object-cover.
// - ≤ 511px: Max width 404px and forced to be square.
// - 700px–921px: Fixed height of 320px.
// - ≥ 922px: Fixed height of 420px.
// This ensures the leaf image scales smoothly across mobile → tablet → desktop.

              */}
              <img
                src={leaf}
                alt="Leaf plant image"
                className="w-full rounded-[500px] object-cover max-[511]:max-w-[404px] max-[511px]:aspect-square min-[700px]:max-[921px]:h-80 min-[922px]:h-105"
              />
              <img
                src={play}
                className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            {/* Text */}
            <div className="text-h2 text-center md:text-right">
              Every meal is a chance to nourish your body, inspire your mind,
              and feed your soul.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
