import { useRef } from "react";
import { cn } from "../lib/cn";
import SectionHeader from "./ui/SectionHeader";
import useMotionScroll from "../hooks/useMotionScroll";
import CurvedBackground from "./ui/CurvedBackground";
import Button from "./ui/Button";
import support from "/assets/need-assistance/support.webp";

const NeedAssistance = () => {
  const supportText =
    "Have questions or need help with AIChefMate? Our dedicated support team is ready to assist you. Get the answers and assistance you need to make the most of your meal planning experience.".split(
      " ",
    );
  const containerRef = useRef<HTMLElement | null>(null);

  const { scrollProgress } = useMotionScroll({
    target: containerRef,
    offset: ["0.4 end", "0.6 start"],
  });

  return (
    <section ref={containerRef} className={cn("relative h-[200vh]")}>
      <div className="sticky top-0 bg-white pt-12 pb-25">
        <SectionHeader
          title="Need Assistance?"
          subtitle="We’re here to help!"
        />

        <div className="common-l-padding flex justify-end">
          {/* Curve Bg */}
          <CurvedBackground
            leftContentImage={support}
            rightContentText={supportText}
            scrollProgress={scrollProgress}
            otherRightContent={
              <Button
                colorType="light"
                className="text-p mt-8 flex h-12 w-full max-w-[250px] items-center justify-center"
              >
                Get Support
              </Button>
            }
            rightContentClassName="md:text-left text-h4  max-md:items-center leading-h4"
          />
        </div>
      </div>
    </section>
  );
};

export default NeedAssistance;
