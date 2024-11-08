import { useRef, useEffect, useState, FC, ReactNode } from "react";
import { motion, useMotionValue, useAnimation, HTMLMotionProps, MotionStyle } from "framer-motion";

interface ICard extends HTMLMotionProps<"div"> {
  onVote: any
  children: ReactNode
  style?: MotionStyle
  drag: boolean
  index: number
}

export const CardWrapper: FC<ICard> = ({ children, style, onVote, index, ...props }) => {
  // motion stuff
  const cardElem = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const controls = useAnimation();

  const [constrained, setConstrained] = useState(true);

  const [direction, setDirection] = useState<string>();

  const [velocity, setVelocity] = useState<number>(0);

  const getVote = (childNode: HTMLElement, parentNode: HTMLElement) => {
    const childRect = childNode.getBoundingClientRect();
    const parentRect = parentNode.getBoundingClientRect();
    let result =
      parentRect.left >= childRect.right
        ? false
        : parentRect.right <= childRect.left
        ? true
        : undefined;
    return result;
  };

  // determine direction of swipe based on velocity
  const getDirection = () => {
    return velocity >= 1 ? "right" : velocity <= -1 ? "left" : undefined;
  };

  const getTrajectory = () => {
    console.log(x);
    setVelocity(x.getVelocity());
    setDirection(getDirection());
  };

  const flyAway = (min: number) => {
    console.log(min);
    const flyAwayDistance = (direction: string) => {
      console.log(direction);
    if (!cardElem.current) return
      const parent = cardElem.current.parentNode as HTMLElement;
      const parentWidth = parent?.getBoundingClientRect()
        .width;
      const childWidth = cardElem.current.getBoundingClientRect().width;
      return direction === "left"
        ? -parentWidth / 2 - childWidth / 2
        : parentWidth / 2 + childWidth / 2;
    };

    if (direction && Math.abs(velocity) > min) {
      setConstrained(false);
      controls.start({
        x: flyAwayDistance(direction)
      });
    }
  };

  useEffect(() => {
    const unsubscribeX = x.on('change', () => {
      if (cardElem.current) {
        const childNode = cardElem.current;
        const parentNode = cardElem.current.parentNode as HTMLElement
        const result = getVote(childNode, parentNode);
        result !== undefined && onVote(result);
      }
    })

    return () => unsubscribeX();
  });

  console.log(props, index);

  return (
    <motion.div
      animate={controls}
      dragConstraints={constrained && { left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={1}
      ref={cardElem}
      style={{ x }}
      onDrag={getTrajectory}
      onDragEnd={() => flyAway(500)}
      // whileTap={{ scale: 1.1 }}
      className="absolute"
      {...props}
    >
      {children}
    </motion.div>
  );
};
