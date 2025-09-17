import { cn } from "../../lib/cn";

const Attribution = ({
  className,
  designerClassName,
}: {
  className?: string;
  designerClassName?: string;
}) => {
  return (
    <p className={cn("text-center text-sm text-white", className)}>
      Design by{" "}
      <a
        href="https://www.figma.com/@olgaaverchenko"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "text-secondary-light-green underline",
          designerClassName,
        )}
      >
        Olga
      </a>{" "}
      • Coded by{" "}
      <a
        href="https://github.com/Adamson123"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Adam Ajibade
      </a>
    </p>
  );
};

export default Attribution;
