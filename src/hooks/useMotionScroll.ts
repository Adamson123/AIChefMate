import {
  useMotionValueEvent,
  useScroll,
  type UseScrollOptions,
} from "motion/react";
import { useState } from "react";

const useMotionScroll = ({
  container,
  target,
  ...options
}: UseScrollOptions) => {
  const { scrollYProgress } = useScroll({
    container,
    target,
    ...options,
  });

  const [scrollProgress, setScrollProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });

  return { scrollProgress };
};

export default useMotionScroll;
