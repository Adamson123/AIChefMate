import { useInView } from "motion/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { cn } from "../../lib/cn";

const NumCols = ({
  rowIndex,
  colIndex,
  className,
}: {
  rowIndex: number;
  colIndex: number;
  className?: string;
}) => {
  const colRef = useRef<HTMLDivElement>(null);
  const rowIndexToString = rowIndex.toString();

  useEffect(() => {
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
  });

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
  const odometerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(odometerRef);

  useEffect(() => {
    if (Number(count) >= max || !isInView) return;
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
    let acc = "";

    count.split("").forEach((num, i) => {
      acc += num;
      if (i === remainder || (i - remainder) % 3 === 0) {
        acc += " ";
      }
    });

    //console.log(acc.split(""));

    return acc.split("");
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
          />
        ),
      )}
    </div>
  );
};

export default Odometer;
