import { useRef, useState } from "react";
import { cn } from "../../lib/cn";
import Button from "../ui/Button";
import NotchedSection from "../ui/NotchedSection";
import SectionHeader from "../ui/SectionHeader";
import front from "/assets/howitworks/front.jpg";
import middle from "/assets/howitworks/middle.jpg";
import back from "/assets/howitworks/back.jpg";
import { delay } from "../../utils";
import ArrowSvg from "../ui/ArrowSvg";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const featuresData = [
  {
    index: "3",
    image: back,
    title: "Generate Your Plan",
    description:
      "Receive an AI-crafted weekly meal plan with balanced recipes and an auto-generated shopping list. Review and swap meals to match your schedule and budget.",
  },
  {
    index: "2",
    image: middle,
    title: "Cook and Optimize",
    description:
      "Follow easy step-by-step recipes and mark favorites. Provide feedback so the AI adapts future plans to your taste and goals.",
  },
  {
    index: "1",
    image: front,
    title: "Personalize Your Profile",
    description:
      "Begin by creating your profile. Tell us about your dietary preferences, nutritional goals, and budget. Our AI technology tailors every meal plan to fit your unique needs.",
  },
];

export type HowItWorkFeaturesType = typeof featuresData;

const HowItWorksElements = () => {
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const [features, setFeatures] = useState(featuresData);
  const [isCarouselAnimating, setIsCarouselAnimating] = useState(false);

  const vars = ["--tx", "--sm-tx", "--rot", "--zi"];

  const getVars = (image: HTMLImageElement) => {
    const varsObj = {} as any;
    vars.forEach((v) => {
      varsObj[v] = image.style.getPropertyValue(v);
    });

    return varsObj;
  };

  const assignVars = (image: HTMLImageElement, varsObj: any) => {
    vars.forEach((v) => {
      image.style.setProperty(v, varsObj[v]);
    });
  };

  const assignStyles = (
    first: HTMLImageElement,
    second: HTMLImageElement,
    styles?: { varsObj?: any; secondClass?: string },
  ) => {
    let varsObj = styles?.varsObj;
    let secondClass = styles?.secondClass;

    if (!varsObj) varsObj = getVars(second);

    assignVars(first, varsObj);

    if (!secondClass) secondClass = second.className;

    first.className = secondClass;
  };

  // Animate one carousel step and reorder items
  const move = async (
    imageElements: HTMLImageElement[],
    callback: () => void, // Callback to update state after DOM transition
  ) => {
    if (isCarouselAnimating) return; // Prevent re-entry if an animation is already running

    setIsCarouselAnimating(true); // Lock during carousel animations

    const [back, middle, front] = imageElements; // Aliases for positional elements
    const frontImage = imageElements[2]; // Explicit reference to the front image
    const frontImageVarObj = getVars(frontImage); // Snapshot front image CSS custom properties

    frontImage.style.setProperty("--rot", "45deg"); // Rotate front image out
    frontImage.style.setProperty("--tx", "200%"); // Move it off to the right (large screens)
    frontImage.style.setProperty("--sm-tx", "200%"); // Move it off to the right (small screens)

    await delay(); // Wait for exit transition to complete

    assignStyles(frontImage, frontImage, { varsObj: frontImageVarObj }); // Restore original front vars for re-entry

    const backVarsObj = getVars(back); // Snapshot back image vars (to become new front)
    const backClassNames = back.className; // Snapshot back image classes

    assignStyles(back, middle); // Back takes middle's styles/classes
    assignStyles(middle, front); // Middle takes front's styles/classes
    assignStyles(front, back, {
      // Front takes back's saved styles/classes
      varsObj: backVarsObj, // Provide saved vars from back
      secondClass: backClassNames, // Provide saved classes from back
    }); // End of swap chain

    await delay(); // Wait for swap transition to complete

    callback(); // Apply logical reordering in React state

    setIsCarouselAnimating(false); // Unlock carousel animations
  };

  const backIndex = 0;
  const middleIndex = 1;
  const frontIndex = 2;

  const next = async () => {
    const imageElements = imagesRef.current as HTMLImageElement[];
    move(imageElements, () => {
      setFeatures((prev) => {
        return [prev[frontIndex], prev[backIndex], prev[middleIndex]];
      });
    });
  };

  const prev = async () => {
    const imageElements = (imagesRef.current as HTMLImageElement[]).reverse();
    move(imageElements, () => {
      setFeatures((prev) => {
        return [prev[middleIndex], prev[frontIndex], prev[backIndex]];
      });
    });
  };

  return (
    <div className="common-max-width common-x-padding mx-auto max-lg:pb-9">
      <SectionHeader
        title="How it works"
        description="Step into the world of hassle-free meal planning with our easy 3-step process"
        bgClassName="bg-primary"
        titleClassName="min-[530px]:text-nowrap"
      />
      {/*  md:grid-cols-2 */}
      <div className="mt-28 flex gap-x-[7%] max-lg:flex-col max-md:mt-18 lg:max-xl:gap-x-[4%]">
        {/* Left */}
        <LeftContent features={features} next={next} prev={prev} />
        {/* Right */}
        <RightContent features={features} imagesRef={imagesRef} />
      </div>
      <div className="flex w-full justify-center gap-x-4 lg:hidden">
        <Button
          onClick={prev}
          colorType="transparent"
          className="changeArrowColorOnHover py-4 md:py-4 xl:py-4"
        >
          <ArrowSvg className="rotate-180" />
        </Button>
        <Button
          onClick={next}
          colorType="light"
          className="changeArrowColorOnHover border-2"
        >
          <ArrowSvg />
        </Button>
      </div>
      <h3 className="text-h3 translate-y-13 text-center lg:hidden">
        0{features[2].index}/03
      </h3>
    </div>
  );
};
const HowItWorks = () => {
  return (
    <section className="overflow-hidden pb-6 lg:pb-[70px]">
      <NotchedSection notchPos="bc" className="pt-17 lg:hidden">
        <HowItWorksElements />
      </NotchedSection>
      <NotchedSection notchPos="bl" className="pt-17 max-lg:hidden">
        <HowItWorksElements />
      </NotchedSection>
    </section>
  );
};

export default HowItWorks;
