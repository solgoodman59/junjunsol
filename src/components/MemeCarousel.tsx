import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import meme1 from '../assets/images/memes/meme1.jpg';
import meme2 from '../assets/images/memes/meme2.jpg';
import meme3 from '../assets/images/memes/meme3.jpg';
import meme4 from '../assets/images/memes/meme4.jpg';
import meme5 from '../assets/images/memes/meme5.jpg';
import meme6 from '../assets/images/memes/meme6.jpg';

const memes = [
  {
    url: meme1,
    caption: "To The Moon! 🚀"
  },
  {
    url: meme2,
    caption: "HODL Strong! 💎"
  },
  {
    url: meme3,
    caption: "Crypto Life! 🌟"
  },
  {
    url: meme4,
    caption: "JunJun Power! 🐻"
  },
  {
    url: meme5,
    caption: "Community Strong! 💪"
  },
  {
    url: meme6,
    caption: "Solana's Cutest Token! 🎯"
  }
];

const MemeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % memes.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="relative h-[300px] max-w-2xl mx-auto overflow-hidden rounded-2xl">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full h-full"
            >
              <div className="relative w-full h-full bg-black/20 border border-[rgb(255,255,143)]/20 shadow-[0_0_30px_rgba(255,255,143,0.2)]">
                <img
                  src={memes[currentIndex].url}
                  alt={memes[currentIndex].caption}
                  className="w-full h-full object-contain p-4"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-2xl text-[rgb(255,255,143)] text-center">
                    {memes[currentIndex].caption}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MemeCarousel;