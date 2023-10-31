import { motion, useCycle } from "framer-motion";
import { useState } from "react";

const images = [
  {
    id: 1,
    src: "src/assets/image1.jpeg",
    description: "Mundo de fantacia 1",
  },
  {
    id: 2,
    src: "src/assets/image2.jpeg",
    description: "Mundo de fantacia 2",
  },
  {
    id: 3,
    src: "src/assets/image3.jpeg",
    description: "Mundo de fantacia 3",
  },
];

const ImageCarrousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, cycleDirection] = useCycle(0, 1);

  const handleNext = () => {
    cycleDirection();
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const handlePrev = () => {
    cycleDirection();
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <div className="relative flex items-center justify-center">
      <motion.button
        onClick={handlePrev}
        className="absolute left-0 ml-10"
        whileHover={{
          scale: 1.1,
          backgroundColor: "black",
          boxShadow: "0 0 10px white",
        }}
        whileTap={{ scale: 0.9 }}
        style={{
          border: "2px solid black",
          transition: "border 1.5s",
        }}
      >
        Preview
      </motion.button>
      <motion.button
        onClick={handleNext}
        className="absolute right-0 mr-10"
        whileHover={{
          scale: 1.1,
          backgroundColor: "black",
          boxShadow: "0 0 10px white",
        }}
        whileTap={{ scale: 0.9 }}
        style={{
          border: "2px solid black",
          transition: "border 1.5s",
        }}
      >
        Next
      </motion.button>
      <motion.div
        key={current}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        className="w-[80vw] h-[64vh] flex flex-col items-center justify-center"
      >
        <img
          src={images[current].src}
          alt=""
          className="object-cover w-full h-3/4"
        />
        <motion.p
          className="text-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {images[current].description}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ImageCarrousel;
