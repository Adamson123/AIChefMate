import { cn } from "../../lib/cn";

const CurvedBackground = ({
  otherLeftContent,
  otherRightContent,
  leftContentImage,
  rightContentText,
  rightContentClassName,
  scrollProgress,
}: {
  otherLeftContent?: React.ReactNode;
  otherRightContent?: React.ReactNode;
  leftContentImage: string;
  rightContentText: string[];
  rightContentClassName?: string;
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
          <div
            className={cn(
              "text-h2 flex flex-col text-center md:text-right [&>span]:transition-all [&>span]:duration-300",
              rightContentClassName,
            )}
          >
            <div>
              {rightContentText.map((char, i) => {
                const isRaised = scrollProgress * rightContentText.length <= i;
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
            {otherRightContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurvedBackground;
