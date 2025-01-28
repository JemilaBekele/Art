import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

// Example array of quotes (no bgUrl provided)
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

const HorizontalScroll = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Horizontal Scroll Quotes
        </span>
      </div>

      <HorizontalScrollCarousel />

      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up when done
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
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

export default HorizontalScroll;
