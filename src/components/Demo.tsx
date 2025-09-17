import { useRef } from "react";
import useMotionScroll from "../hooks/useMotionScroll";
import { cn } from "../lib/cn";
import SectionHeader from "./ui/SectionHeader";
import leaf from "/assets/demo/leaf.jpg";
import play from "/assets/demo/play.svg";
import CurvedBackground from "./ui/CurvedBackground";

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
            subtitle="See how it works: your personalized meal planning journey"
          />
        </div> */}
        <SectionHeader
          title="Demo"
          subtitle="See how it works: your personalized meal planning journey"
        />

        <div className="common-l-padding flex justify-end">
          {/* Curve Bg */}
          <CurvedBackground
            leftContentImage={leaf}
            rightContentText={everyMeal}
            scrollProgress={scrollProgress}
            otherLeftContent={
              <img
                src={play}
                className="absolute top-1/2 left-1/2 h-15 w-15 -translate-x-1/2 -translate-y-1/2"
              />
            }
            rightContentClassName="leading-9 md:text-right md:leading-12 xl:leading-14"
          />
        </div>
      </div>
    </section>
  );
};

export default Demo;
