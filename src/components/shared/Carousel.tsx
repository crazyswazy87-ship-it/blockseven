import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import tonka from "../../../public/assets/tonka.jpg";
import live from "../../../public/assets/liveshawa.png";
import stream from "../../../public/assets/shawa.jpg";


const slides = [
  {
    image: tonka,
    text: " Shawa {creator}",
  },
  {
    image: live,
    text: "Live stream {irl}",
  },
  {
    image: stream,
    text: "Tonka! Tonka!",
  }
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  // auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };



  return (
    <div className="relative w-inherit  h-[500px] overflow-hidden rounded-2xl">
      
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={slides[index].image}
          alt="carousel"
          initial={{ x: 300, opacity: 0, scale: 1 }}
          animate={{ x: 0, opacity: 1, scale: 1.08 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="absolute w-full h-full object-cover mandamano"
        />
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* ANIMATED TEXT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].text}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="absolute bottom-20 left-10 z-20"
        >
          <div className="lurk text-white text-3xl font-bold ">
            {slides[index].text}
          </div>
        </motion.div>
      </AnimatePresence>

    </div>
  );
};

export default Carousel;