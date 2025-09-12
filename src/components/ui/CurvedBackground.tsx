import { cn } from "../../lib/cn";

const CurvedBackground = ({
  otherLeftContent,
  otherRightContent,
  leftContentImage,
  rightContentText,
  scrollProgress,
}: {
  otherLeftContent: React.ReactNode;
  otherRightContent: React.ReactNode;
  leftContentImage: string;
  rightContentText: string;
  scrollProgress: number;
}) => {
  return (
    <div className="flex justify-end">
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
              src={leftContentImage}
              alt="Left image"
              className="w-full rounded-full object-cover max-[511px]:aspect-square max-[511px]:max-w-[400px] min-[922px]:h-105 md:max-[921px]:aspect-square"
            />
            {otherLeftContent}
          </div>
          {/* Text */}
          <div className="text-h2 md: text-center leading-9 md:text-right md:leading-12 xl:leading-14 [&>span]:transition-all [&>span]:duration-300">
            {rightContentText.split("").map((char, i) => {
              const isRaised = scrollProgress * rightContentText.length <= i;
              console.log(char);

              return (
                <span
                  key={i}
                  style={{
                    transform: isRaised ? "translateY(15px)" : "translateY(0)",
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
            {otherRightContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurvedBackground;
