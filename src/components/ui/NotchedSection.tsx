import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

const Notch = ({ notchPos }: { notchPos: "br" | "bl" | "tr" | "tl" }) => {
  const globalClasses = "h-16 w-[30%] min-w-[300px] -z-1 absolute bg-primary";

  switch (notchPos) {
    case "br":
      return (
        <div
          className={cn(
            globalClasses,
            "right-0 -bottom-12 rounded-bl-[50px] max-md:-bottom-9",
          )}
        />
      );
    case "bl":
      return (
        <div
          className={cn(
            globalClasses,
            "-bottom-12 left-0 rounded-br-[50px] max-md:-bottom-9",
          )}
        />
      );
    case "tr":
      return (
        <div
          className={cn(
            globalClasses,
            "-top-12 right-0 rounded-tl-[50px] max-md:-top-9",
          )}
        />
      );
    case "tl":
      return (
        <div
          className={cn(
            globalClasses,
            "-top-12 left-0 rounded-tr-[50px] max-md:-top-9",
          )}
        />
      );
    default:
      return null;
  }
};

const NotchedSection = (
  props: HTMLAttributes<HTMLElement> & {
    notchPos?: "br" | "bl" | "tr" | "tl";
    sectionClassName?: string;
  },
) => {
  const {
    className,
    sectionClassName,
    children,
    notchPos = "br",
    ...others
  } = props;

  return (
    <section className={cn("pb-12 md:pb-18", sectionClassName)} {...others}>
      <div className={cn("bg-primary relative", className)}>
        {children}
        <Notch notchPos={notchPos} />
      </div>
    </section>
  );
};

export default NotchedSection;
