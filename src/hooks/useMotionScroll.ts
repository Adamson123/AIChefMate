import {
  useMotionValueEvent,
  useScroll,
  type UseScrollOptions,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

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
  const frameRef = useRef<number | null>(null);
  const latestRef = useRef(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    latestRef.current = latest;
    if (frameRef.current === null) {
      frameRef.current = requestAnimationFrame(() => {
        setScrollProgress(latestRef.current);
        frameRef.current = null;
      });
    }
  });

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return { scrollProgress };
};

export default useMotionScroll;
