import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

/**
 * FlipDiv for images only.
 * The same image is shown in two 'states' (top/bottom),
 * so it flips visually on hover.
 */
const FlipDiv = ({ imageUrl, className }) => {
  return (
    <div
      className={`relative w-40 h-40 rounded-lg border border-primary-500 bg-primary-500/5 hover:bg-primary-500 overflow-hidden ${className}`}
    >
      <motion.div
        initial="initial"
        whileHover="hovered"
        className="relative flex h-full w-full items-center justify-center"
      >
        {/* Top Image (initial state) */}
        <motion.img
          src={imageUrl}
          alt="icon top"
          className="absolute h-full w-full object-contain"
          variants={{
            initial: { y: "0%" },
            hovered: { y: "-100%" },
          }}
          transition={{
            duration: DURATION,
            ease: "easeInOut",
            delay: STAGGER,
          }}
        />

        {/* Bottom Image (on hover) */}
        <motion.img
          src={imageUrl}
          alt="icon flipped"
          className="absolute h-full w-full object-contain"
          variants={{
            initial: { y: "100%" },
            hovered: { y: "0%" },
          }}
          transition={{
            duration: DURATION,
            ease: "easeInOut",
            delay: STAGGER,
          }}
        />
      </motion.div>
    </div>
  );
};

export default FlipDiv;
