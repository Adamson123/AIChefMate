import { cn } from "../../lib/cn";

const QuoteSvg = ({ className }: { className?: string }) => {
  return (
    <svg
      width="29"
      height="22"
      viewBox="0 0 29 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M5.31366 0.602539H14.4099L5.76398 21.6025H0L5.31366 0.602539ZM19.9037 0.602539H29L20.354 21.6025H14.5L19.9037 0.602539Z"
        className="transition-colors duration-500"
        fill="#213D34"
      />
    </svg>
  );
};

export default QuoteSvg;
