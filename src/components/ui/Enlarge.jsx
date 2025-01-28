import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Enlarge = ({ imgSrc }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Adjust these values to tweak the effect for smaller images
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <motion.div
      ref={ref}
      className="relative h-64 w-full overflow-hidden" // smaller fixed height
    >
      <motion.div
        style={{
          scale,
          opacity,
          y,
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <img
          src={imgSrc}
          alt="Artistic expression"
          className="h-full w-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default Enlarge;
