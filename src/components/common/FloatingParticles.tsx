import { motion } from 'framer-motion';

const FloatingParticles = () => {
  return (
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
  );
};

export default FloatingParticles; 