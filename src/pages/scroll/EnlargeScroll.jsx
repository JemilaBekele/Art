import { Fragment } from "react";
import Enlarge from "../../components/ui/Enlarge";
import { motion } from "framer-motion";

const EnlargeScroll = () => {
  return (
    <section className="flex flex-col gap-4 pb-40">
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="sticky top-0 z-10 flex min-h-[220px] items-center justify-center bg-zinc-950"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral-100 mb-4">
            The Art of Happiness
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            "Happiness is not a destination, but a journey painted in moments"
          </p>
        </div>
      </motion.header>

      {/* Use a grid with 2 columns to place images side-by-side */}
      <div className="grid grid-cols-2 gap-4">
        {[
          "/images/ima3.jpg",
          "/images/image2.jpg",
          "/images/img5.jpg",
          "/images/imm4.jpg",
        ].map((imgSrc, index) => (
          <Fragment key={index}>
            <Enlarge imgSrc={imgSrc} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default EnlargeScroll;
