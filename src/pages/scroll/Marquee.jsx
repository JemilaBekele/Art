import { motion } from "framer-motion";
import { skills } from "../../data/db";
import FlipDiv from "../../components/ui/div/FlipDiv";

const Marquee = () => {
  // Divide skills array into three roughly equal parts
  const oneThirdLength = Math.floor(skills.length / 3);

  return (
    <div className="mx-auto space-y-6">
      {/* 1st Row */}
      <div className="flex overflow-hidden x-gradient">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {skills.slice(0, oneThirdLength).map(({ id, icon }) => (
            <FlipDiv key={id} imageUrl={icon} className="mr-6" />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {skills.slice(0, oneThirdLength).map(({ id, icon }) => (
            <FlipDiv key={id} imageUrl={icon} className="mr-6" />
          ))}
        </motion.div>
      </div>

      {/* 2nd Row */}
      <div className="flex overflow-hidden x-gradient">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {skills.slice(oneThirdLength, oneThirdLength * 2).map(({ id, icon }) => (
            <FlipDiv key={id} imageUrl={icon} className="mr-6" />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {skills.slice(oneThirdLength, oneThirdLength * 2).map(({ id, icon }) => (
            <FlipDiv key={id} imageUrl={icon} className="mr-6" />
          ))}
        </motion.div>
      </div>

      {/* 3rd Row */}
      <div className="flex overflow-hidden x-gradient">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {skills.slice(oneThirdLength * 2).map(({ id, icon }) => (
            <FlipDiv key={id} imageUrl={icon} className="mr-6" />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {skills.slice(oneThirdLength * 2).map(({ id, icon }) => (
            <FlipDiv key={id} imageUrl={icon} className="mr-6" />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
