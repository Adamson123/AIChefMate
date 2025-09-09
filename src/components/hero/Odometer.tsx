import { useInView } from "motion/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { cn } from "../../lib/cn";

const NumCols = ({
  rowIndex,
  colIndex,
  className,
  finished,
  count,
}: {
  rowIndex: number;
  colIndex: number;
  className?: string;
  finished: boolean;
  count: string;
}) => {
  const colRef = useRef<HTMLDivElement>(null);
  const rowIndexToString = rowIndex.toString();

  useEffect(() => {
    const updateColPosition = () => {
      if (colRef.current) {
        const element = colRef.current as HTMLDivElement;
        //  console.log(element, `#${rowIndexToString + colIndex}`);
        const target = element.querySelector(
          `#${"id_" + rowIndexToString + colIndex + ""}`,
        ) as HTMLElement;

        element.style.transform = `translateY(-${target?.offsetTop}px)`;
        element.style.transition =
          "transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)";
      }
    };

    updateColPosition();

    if (!finished) return;

    window.addEventListener("resize", updateColPosition);

    return () => window.removeEventListener("resize", updateColPosition);
  }, [finished, colIndex, rowIndexToString, count]);

  return (
    <div
      className={cn(
        "h-[50px] overflow-y-hidden md:h-[60px] lg:h-[70px] xl:h-[80px]",
        className,
      )}
    >
      <div ref={colRef} className="flex flex-col overflow-y-auto">
        {Array.from({ length: 10 }).map((_, i) => (
          <span id={"id_" + rowIndexToString + i} key={rowIndex + i}>
            {i}
          </span>
        ))}
      </div>
    </div>
  );
};

const Space = ({ amount = 1 }: { amount?: number }) => {
  return (
    <span>
      {Array.from({ length: amount }).map((_, i) => (
        <Fragment key={i}>&nbsp;</Fragment>
      ))}
    </span>
  );
};

const Odometer = ({
  min,
  max,
  className,
  numColsClassName,
  space,
}: {
  min: number;
  max: number;
  className?: string;
  numColsClassName?: string;
  space?: number;
}) => {
  const [count, setCount] = useState(min.toString());
  const [finished, setFinished] = useState(false);
  const odometerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(odometerRef);

  useEffect(() => {
    if (!isInView) return;
    if (Number(count) >= max) {
      setFinished(true);
      return;
    }
    const updateCount = () => {
      let countToNum = Number(count);
      countToNum++;
      setCount(countToNum.toString());
    };

    let intervalId = setInterval(updateCount, 200);

    return () => clearInterval(intervalId);
  }, [count, isInView]);

  const numsWithSpace = () => {
    if (count.length <= 4) {
      return count.split("");
    }

    const remainder = (count.length - 1) % 3;

    const nums: string[] = [];

    count.split("").forEach((num, i) => {
      nums.push(num);
      if (i === remainder || (i - remainder) % 3 === 0) {
        nums.push(" ");
      }
    });

    if (nums[nums.length - 1] === " ") nums.pop();

    return nums;
  };

  return (
    <div
      ref={odometerRef}
      className={cn("text-h1 flex items-center", className)}
    >
      {numsWithSpace().map((num, i) =>
        num === " " ? (
          <Space key={i} amount={space} />
        ) : (
          <NumCols
            key={i}
            rowIndex={i}
            colIndex={Number(num)}
            className={numColsClassName}
            finished={finished}
            count={count}
          />
        ),
      )}
    </div>
  );
};

export default Odometer;
