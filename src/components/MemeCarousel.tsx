import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import meme1 from '../assets/images/memes/meme1.jpg';
import meme2 from '../assets/images/memes/meme2.jpg';
import meme3 from '../assets/images/memes/meme3.jpg';
import meme4 from '../assets/images/memes/meme4.jpg';
import meme5 from '../assets/images/memes/meme5.jpg';
import meme6 from '../assets/images/memes/meme6.jpg';
import video1 from '../assets/images/memes/video1.webp';
import video2 from '../assets/images/memes/video2.webp';
import video3 from '../assets/images/memes/video3.webp';
import video4 from '../assets/images/memes/video4.webp';
import video5 from '../assets/images/memes/video5.webp';

interface MediaItem {
  type: 'image' | 'video';
  url: string;
  caption: string;
}

const memes: MediaItem[] = [
  {
    type: 'image',
    url: meme1,
    caption: "Soon.... 🚀🌙"
  },
  {
    type: 'video',
    url: video1,
    caption: "When the market pumps 📈💰"
  },
  {
    type: 'image',
    url: meme2,
    caption: "Eating the dip 🍯🐻"
  },
  {
    type: 'video',
    url: video2,
    caption: "The real alpha 🧠💎"
  },
  {
    type: 'image',
    url: meme3,
    caption: "Posing for profile pic 📸✨"
  },
  {
    type: 'video',
    url: video3,
    caption: "Junjun's Adventures! 🎈🌟"
  },
  {
    type: 'video',
    url: video4,
    caption: "Cutebomb 💝💫"
  },
  {
    type: 'video',
    url: video5,
    caption: "Watching jeets fade 👋😴"
  },
  {
    type: 'image',
    url: meme4,
    caption: "Smilebomb for hodlers 😊💖"
  },
  {
    type: 'image',
    url: meme5,
    caption: "Community Strong! 🤝💪"
  },
  {
    type: 'image',
    url: meme6,
    caption: "Solana's Cutest Token! 🐻✨"
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
    <section className="py-10 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-[rgb(255,255,143)]/30 rounded-full blur-sm"
            animate={{
              y: ['0vh', '40vh'],
              x: Math.sin(i) * 100,
            }}
            initial={{ x: Math.random() * window.innerWidth, y: -20 }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
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
                  <p className="text-sm md:text-base text-[rgb(255,255,143)] text-center">
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