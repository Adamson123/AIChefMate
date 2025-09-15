import { cn } from "../../lib/cn";
import type { HowItWorkFeaturesType } from "./HowItWorks";

const RightContent = ({
  features,
  imagesRef,
}: {
  features: HowItWorkFeaturesType;
  imagesRef: React.RefObject<(HTMLImageElement | null)[]>;
}) => {
  return (
    <div className={cn("relative lg:w-[40%]")}>
      {features.map((feature, i) => (
        <img
          key={feature.image}
          ref={(el) => {
            imagesRef.current[i] = el;
          }}
          src={feature.image}
          style={{
            ["--tx" as any]: `${i * 80}px`,
            ["--sm-tx" as any]: `${i * 30}px`,
            ["--rot" as any]: `${i * 7}deg`,
            ["--zi" as any]: i,
          }}
          className={cn(
            "slidingImage absolute rounded-[50px] object-cover transition-[scale,filter,translate,rotate] duration-300",
            "z-[var(--zi)] rotate-[var(--rot)]",
            i === 0 && "-translate-y-5 scale-y-[0.75]",
            i < features.length - 1 && "contrast-[0.3]",
            "translate-x-[var(--tx)]",
            "max-lg:translate-y-9",
            "max-lg:left-[45%] max-lg:-translate-x-[calc(50%-var(--tx))]",
            "max-md:-translate-x-[calc(50%-var(--sm-tx))]",
            "aspect-[1/1.3] w-[65%] max-w-[330px]",
            "max-md:max-w-[300px]",
            "md:min-w-[275px]",
          )}
        />
      ))}

      <div
        className={cn(
          "w-[65%] max-w-[330px] max-lg:aspect-[1/1.6] xl:aspect-[1/1.3]",
          "max-md:max-w-[300px]",
          "md:min-w-[275px]",
        )}
      />
    </div>
  );
};

export default RightContent;
