import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "../../utils/cn";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const listVariants: Variants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

interface ISelect {
  className?: string;
  options: { label: string; value: string }[];
  value?: string;
  onChange?: (value: string) => void;
  placeholderText?: string;
}

export const Select: FC<ISelect> = ({
  className,
  options,
  value,
  placeholderText = "Select...",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);

  const vl = options.find(opt => opt.value === value)?.label || placeholderText

  const handleChange = (e: MouseEvent) => {
    const target = e.target as HTMLOptionElement;
    onChange && onChange(target.value);
    setIsOpen(false);
  };

  const checkClickArea = (e: any) => {
    if (!isOpen) return;
    if (listRef.current && !listRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (!listRef.current) return;

    document.addEventListener("click", checkClickArea);

    return () => {
      document.removeEventListener("click", checkClickArea);
    };
  }, [listRef]);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={cn("relative w-full", className)}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-4/5 bg-white items-center rounded-xl box-border p-3 border avenir_font text-gray-500 focus:border-purple-400 hover:outline focus:outline focus:border-1 outline-purple-300"
      >
        {vl}
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={listVariants}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className="absolute top-auto left-0 w-4/5 bg-white mt-2 border rounded-xl motionSelectList z-50 shadow-md"
        ref={listRef}
      >
        {options.map((opt) => (
          <motion.option
            key={opt.value}
            value={opt.value}
            onClick={handleChange}
            variants={itemVariants}
            className="py-2 px-4 hover:bg-gray-300 avenir_font"
          >
            {opt.label}
          </motion.option>
        ))}
      </motion.ul>
    </motion.nav>
  );
};
