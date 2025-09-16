import { useEffect, useRef, useState } from "react";
import useMotionScroll from "../hooks/useMotionScroll";
import { cn } from "../lib/cn";
import SectionHeader from "./ui/SectionHeader";
import leaf from "/assets/demo/leaf.jpg";
import play from "/assets/demo/play.svg";

const Demo = () => {
  const everyMeal =
    "Every meal is a chance to nourish your body, inspire your mind, and feed your soul.".split(
      " ",
    );
  const containerRef = useRef<HTMLElement | null>(null);

  const { scrollProgress } = useMotionScroll({
    target: containerRef,
    offset: ["0.4 end", "0.6 start"],
  });

  return (
    <section ref={containerRef} className={cn("relative h-[300vh]")}>
      <div className="sticky top-0 bg-white pt-12 pb-25">
        {/* <div className="common-max-width mx-auto flex items-center justify-center">
          <SectionHeader
            title="Demo"
            description="See how it works: your personalized meal planning journey"
          />
        </div> */}
        <SectionHeader
          title="Demo"
          description="See how it works: your personalized meal planning journey"
        />

        <div className="common-l-padding flex justify-end">
          {/* Curve Bg */}
          <div
            className={cn(
              "border-secondary-green common-y-padding flex w-full justify-start rounded-l-full border-r-0 md:border",
              "max-w-[calc((var(--max-section-width)+(100vw-var(--max-section-width))/2))]",
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
              <div className="text-h2 leading-h2 text-center md:text-right [&>span]:transition-all [&>span]:duration-300">
                {everyMeal.map((char, i) => {
                  const isRaised = scrollProgress * everyMeal.length <= i;
                  return (
                    <span
                      key={i}
                      className={cn(
                        isRaised
                          ? "text-secondary-green/20 translate-y-[15px]"
                          : "text-secondary-green translate-y-0",
                        "inline-block transition-transform duration-300",
                      )}
                    >
                      {/* {char === " " ? <>&nbsp;</> : char} */}
                      {char}&nbsp;
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
