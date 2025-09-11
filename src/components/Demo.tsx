import { useRef } from "react";
import useMotionScroll from "../hooks/useMotionScroll";
import { cn } from "../lib/cn";
import SectionHeader from "./ui/SectionHeader";
import leaf from "/assets/demo/leaf.jpg";
import play from "/assets/demo/play.svg";

const Demo = () => {
  const curveBgWidth =
    "max-w-[calc((var(--max-section-width)+(100vw-var(--max-section-width))/2))]";

  const everyMeal =
    "Every meal is a chance to nourish your body, inspire your mind, and feed your soul.";

  const containerRef = useRef(null);

  const { scrollProgress } = useMotionScroll({
    target: containerRef,
    offset: ["0.4 end", "0.6 start"],
  });

  return (
    <section ref={containerRef} className="common-l-padding relative h-[400vh]">
      <div className="sticky top-0 pt-12 pb-50">
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
              "border-secondary-green common-y-padding flex w-full justify-start rounded-l-full border-r-0 md:border",
              curveBgWidth,
            )}
          >
            <div className="common-max-width common-x-padding common-x-gap grid w-full grid-cols-[auto_35.5%] items-center max-md:grid-cols-1 max-md:gap-10">
              {/* Image Container */}
              {/* Image Wrapper:
              - Green border and large rounding to visually frame the image.
              - common-padding adds consistent inner spacing so the image doesn’t touch the border.
            */}
              <div className="border-secondary-green common-padding relative flex items-center justify-center rounded-full border">
                <img
                  src={leaf}
                  alt="Leaf plant image"
                  className="w-full rounded-full object-cover max-[511px]:aspect-square max-[511px]:max-w-[400px] min-[922px]:h-105 md:max-[921px]:aspect-square"
                />
                <img
                  src={play}
                  className="absolute top-1/2 left-1/2 h-15 w-15 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              {/* Text */}
              <div className="text-h2 md: text-center leading-9 md:text-right md:leading-12 xl:leading-14 [&>span]:transition-all [&>span]:duration-300">
                {everyMeal.split("").map((char, i) => {
                  const isRaised = scrollProgress * everyMeal.length <= i;
                  console.log(char);

                  return (
                    <span
                      key={i}
                      style={{
                        transform: isRaised
                          ? "translateY(15px)"
                          : "translateY(0)",
                        display: "inline-block",
                        transition: "transform 300ms ease",
                      }}
                      className={
                        isRaised
                          ? "text-secondary-green/20"
                          : "text-secondary-green"
                      }
                    >
                      {char === " " ? <>&nbsp;</> : char}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
