import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

const NotchedSection = (
  props: HTMLAttributes<HTMLElement> & {
    notchPos?: "left" | "right";
    sectionClassName?: string;
  },
) => {
  const {
    className,
    sectionClassName,
    children,
    notchPos = "right",
    ...others
  } = props;
  return (
    <section className={cn("pb-12", sectionClassName)} {...others}>
      <div className={cn("bg-primary relative", className)}>
        {children}
        {notchPos === "left" ? (
          <div className="bg-primary absolute -bottom-12 -z-1 h-16 w-[30%] rounded-br-[50px]" />
        ) : (
          <div className="bg-primary absolute right-0 -bottom-12 -z-1 h-16 w-[30%] min-w-[300px] rounded-bl-[50px]" />
        )}
      </div>
    </section>
  );
};

export default NotchedSection;
