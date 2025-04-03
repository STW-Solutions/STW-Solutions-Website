import { useEffect, useRef, useState } from "react";
import "./AnimateOnScroll.css";

type Props = {
  children: React.ReactNode;
  reappear?: boolean;
  threshold?: number;
};

type Options = {
  threshold: number;
  reappear?: boolean;
};

const useElementOnScreen = (
  options: Options
): [React.RefObject<HTMLDivElement>, boolean] => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const makeAppear = (entries: any) => {
    const [entry] = entries;
    if (entry.isIntersecting) setIsVisible(true);
  };

  const makeAppearRepeating = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const callBack = options.reappear ? makeAppearRepeating : makeAppear;

  useEffect(() => {
    const containerRefCurrent = containerRef.current;
    const observer = new IntersectionObserver(callBack, options);
    if (containerRefCurrent) observer.observe(containerRefCurrent);

    return () => {
      if (containerRefCurrent) observer.unobserve(containerRefCurrent);
    };
  }, [containerRef, options, callBack]);

  return [containerRef, isVisible];
};

const AnimateOnScroll = ({ children, reappear, threshold = 0.5 }: Props) => {
  const [containerRef, isVisible] = useElementOnScreen({
    threshold: threshold,
    reappear: reappear,
  });
  return (
    <div
      ref={containerRef}
      className={`transition-box ${
        isVisible
          ? "isVisible"
          : "isNotVisible"
      } stw-transition-none`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
