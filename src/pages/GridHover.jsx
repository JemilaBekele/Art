import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Tile from "../components/ui/Tile";
import happinessImage from "../assets/img.jpg"; // Adjust path as needed
import { Fragment } from "react";
import Enlarge from "../components/ui/Enlarge";
import { skills } from "../data/db";
import FlipDiv from "../components/ui/div/FlipDiv";

const quotes = [
  {
    id: 1,
    text: "Your limitation—it's only your imagination."
  },
  {
    id: 2,
    text: "Push yourself, because no one else is going to do it for you."
  },
  {
    id: 3,
    text: "Sometimes later becomes never. Do it now."
  },
  {
    id: 4,
    text: "Great things never come from comfort zones."
  },
  {
    id: 5,
    text: "Dream it. Wish it. Do it."
  },
  {
    id: 6,
    text: "Stay positive and happy. Work hard and don't give up hope."
  },
  {
    id: 7,
    text: "Keep going. Everything you need will come to you at the perfect time."
  },
  
];


// A helper to generate a random placeholder image URL
const getRandomImageUrl = (seed) => {
  // e.g., https://picsum.photos/seed/XYZ/800/600
  // You can tweak width/height as desired.
  return `https://picsum.photos/seed/${seed}/800/600`;
};

const HorizontalScrollCarousel = () => {
  
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[80vh] bg-neutral-900">
      {/* Sticky container that holds the horizontally-scrolling content */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 px-4">
          {quotes.map((item) => (
            <Card key={item.id} quote={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ quote }) => {
  const { id, text, bgUrl } = quote;

  // If the quote object does not have a bgUrl,
  // generate a random one based on the quote's id
  const backgroundImageUrl = bgUrl ?? getRandomImageUrl(id);

  return (
    <div
      className="group relative h-[300px] w-[300px] overflow-hidden rounded-xl bg-neutral-200 shadow-lg"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Hover Scale Effect on the background image */}
      <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110" />
  
      {/* Quote text overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 p-4 text-center">
        <p className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
          {text}
        </p>
      </div>
    </div>
  );
  
};

const GridHover = () => {
  const tiles = new Array(242).fill(1, 0, 239);
  const oneThirdLength = Math.floor(skills.length / 3);
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* 
        1) BACKGROUND TILES 
           Absolute positioning ensures it covers the entire background.
      */}
      <div className="absolute inset-0 z-0 flex h-dvh w-full flex-wrap justify-center overflow-y-clip">
        {tiles.map((tile, i) => (
          <Tile key={i} />
        ))}
      </div>

      {/* 
        2) MAIN CONTENT 
           "relative z-10" so it's above the background tiles.
           We'll stack sections vertically using flex-col.
      */}
      <div className="relative z-10 flex flex-col space-y-10 px-4 py-8">
        
        {/* 2a) Top Section: "Happiness" Text + Image */}
        <div className="flex w-full max-w-screen-xl flex-col-reverse items-center justify-between gap-8 mx-auto lg:flex-row">
  {/* Text Content */}
  <div className="flex flex-1 flex-col items-center gap-6 text-center lg:items-start lg:text-left">
    <motion.h1
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-6xl font-black uppercase tracking-tight text-neutral-100"
    >
      Happiness
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="text-xl leading-relaxed text-white lg:w-3/4"
    >
      "Happiness is the poetry of the soul, painted in the colors of
      moments lived fully - an ever-evolving masterpiece written in
      the language of the heart."
    </motion.p>
  </div>

  {/* Image */}
  <motion.img
    initial={{ opacity: 0, scale: 1.2 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.8 }}
    src={happinessImage}
    alt="Artistic representation of happiness"
    className="w-full max-w-xs rounded-xl border-4 border-primary-500 shadow-lg lg:max-w-sm xl:max-w-md"
    style={{ maxHeight: "400px", objectFit: "cover" }}
  />
</div>


        {/* 2b) Sticky Header */}
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="sticky top-0  z-10 flex min-h-[220px] w-full items-center justify-center "
        >
          <div className="max-w-2xl text-center px-4">
            <h1 className="text-4xl font-bold text-neutral-100 mb-4">
              The Art of Happiness
            </h1>
            <p className="text-neutral-400">
              "Happiness is not a destination, but a journey painted in moments"
            </p>
          </div>
        </motion.header>

        {/* 2c) Bottom Grid of Images (2 columns) */}
        <div className="w-full max-w-screen-xl mx-auto">
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
        </div>
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
      </div>
      <div className="bg-neutral-800">
    

      <HorizontalScrollCarousel />

      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          BY Jemila
        </span>
      </div>
    </div>
    </section>
  );
};

export default GridHover;
