import { useRef, useState } from "react";
import { cn } from "../lib/cn";
import Button from "./ui/Button";
import NotchedSection from "./ui/NotchedSection";
import SectionHeader from "./ui/SectionHeader";
import arrow from "/assets/howitworks/arrow.svg";
import front from "/assets/howitworks/front.jpg";
import middle from "/assets/howitworks/middle.jpg";
import back from "/assets/howitworks/back.jpg";
import { delay } from "../utils";

//const images = [third, second, first];

const HowItWorksElements = () => {
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const [images, setImages] = useState([back, middle, front]);
  const [current, setCurrent] = useState(2);
  const [isSliding, setIsSliding] = useState(false);

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

  const move = async (
    imageElements: HTMLImageElement[],
    callback: () => void,
  ) => {
    if (isSliding) return;

    setIsSliding(true);

    const [back, middle, front] = imageElements;

    const frontImage = imageElements[2];
    const frontImageVarObj = getVars(frontImage);

    frontImage.style.setProperty("--rot", "45deg");
    frontImage.style.setProperty("--tx", "200%");
    frontImage.style.setProperty("--sm-tx", "200%");

    await delay();

    assignStyles(frontImage, frontImage, { varsObj: frontImageVarObj });

    const backVarsObj = getVars(back);
    const backClassNames = back.className;

    assignStyles(back, middle);
    assignStyles(middle, front);
    assignStyles(front, back, {
      varsObj: backVarsObj,
      secondClass: backClassNames,
    });

    await delay();

    callback();

    setIsSliding(false);
  };

  const next = async () => {
    const imageElements = imagesRef.current as HTMLImageElement[];
    move(imageElements, () => {
      setImages((prev) => {
        const backIndex = 0;
        const middleIndex = 1;
        const frontIndex = 2;

        return [prev[frontIndex], prev[backIndex], prev[middleIndex]];
      });
    });
  };

  const prev = async () => {
    const imageElements = (imagesRef.current as HTMLImageElement[]).reverse();
    move(imageElements, () => {
      setImages((prev) => {
        const backIndex = 0;
        const middleIndex = 1;
        const frontIndex = 2;
        return [prev[middleIndex], prev[frontIndex], prev[backIndex]];
      });
    });
  };

  return (
    <div className="common-max-width common-x-padding mx-auto max-md:pb-17">
      <SectionHeader
        title="How it works"
        description="Step into the world of hassle-free meal planning with our easy 3-step process"
        bgClassName="bg-primary"
        titleClassName="min-[530px]:text-nowrap"
      />
      {/*  md:grid-cols-2 */}
      <div className="mt-7 flex gap-x-[7%] max-lg:mt-25 max-lg:flex-col lg:max-xl:gap-x-[4%]">
        {/* Left */}
        <div className="flex flex-col max-lg:items-center max-lg:text-center lg:w-[50%]">
          <div className="mb-5">
            <h2 className="text-h2">01</h2>
            <h3 className="text-h3">Personalize Your Profile</h3>
          </div>
          <p className="mb-15 max-w-150">
            Begin by creating your profile. Tell us about your dietary
            preferences, nutritional goals, and budget. Our AI technology
            tailors every meal plan to fit your unique needs.
          </p>
          <div className="mb-10 flex gap-x-4">
            <Button
              onClick={prev}
              colorType="transparent"
              className="py-4 md:py-4 xl:py-4"
            >
              <img src={arrow} alt="Arrow" className="rotate-180" />
            </Button>
            <Button onClick={next} colorType="light" className="border-2">
              <img src={arrow} alt="Arrow" />
            </Button>
          </div>
          <h3 className="text-h3 translate-y-[30%] max-xl:translate-y-10 max-lg:hidden">
            01/03
          </h3>
        </div>
        {/* Right */}
        {/* This will affect the section container's height */}
        <div
          className={cn(
            "relative lg:w-[40%]",
            "min-[593px]:max-lg:h-[500px]", //
            "lg:max-xl:h-[430px]",
            "max-[593px]:h-[400px]",
            //  "h-[500px]",
          )}
        >
          {images.map((image, i) => (
            <img
              key={image}
              ref={(el) => {
                imagesRef.current[i] = el;
              }}
              src={image}
              style={{
                ["--tx" as any]: `${i * 80}px`,
                ["--sm-tx" as any]: `${i * 30}px`,
                ["--rot" as any]: `${i * 7}deg`,
                ["--zi" as any]: i,
              }}
              className={cn(
                "absolute rounded-[50px] object-cover transition-[scale,filter,translate,rotate] duration-300",
                "z-[var(--zi)] rotate-[var(--rot)]",
                i === 0 && "-translate-y-5 scale-y-[0.75]",
                i < images.length - 1 && "contrast-[0.3]",
                //    i === images.length - 1 && "-translate-y-10",
                /* Default size */ "h-[420px] w-[330px]",
                /* Small devices size and position  */ "max-[593px]:h-[330px] max-[593px]:max-w-[230px]",
                /* Lg devices */ "lg:max-xl:h-[370px] lg:max-xl:w-[260px]",
                /* Default Pos */ "translate-x-[var(--tx)]",
                "max-lg:translate-y-9",
                "max-lg:left-[45%] max-lg:-translate-x-[calc(50%-var(--tx))]",
                "max-md:-translate-x-[calc(50%-var(--sm-tx))]",
              )}
            />
          ))}
        </div>
      </div>
      <h3 className="text-h3 translate-y-16 text-center md:translate-y-0 lg:hidden">
        01/03
      </h3>
    </div>
  );
};
const HowItWorks = () => {
  return (
    <section className="overflow-hidden">
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
