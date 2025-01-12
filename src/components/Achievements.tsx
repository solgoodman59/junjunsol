import { motion } from 'framer-motion';
import achievement1 from '../assets/images/achievements/achievement1.jpg';
import achievement2 from '../assets/images/achievements/achievement2.jpg';

const Achievements = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-xl md:text-2xl font-bold text-[rgb(255,255,143)] text-center mb-8 drop-shadow-[0_0_10px_rgba(255,255,143,0.5)]">
            Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-black/20 rounded-2xl border border-[rgb(255,255,143)]/20 shadow-[0_0_30px_rgba(255,255,143,0.2)] overflow-hidden"
            >
              <img 
                src={achievement1} 
                alt="Achievement 1" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-black/20 rounded-2xl border border-[rgb(255,255,143)]/20 shadow-[0_0_30px_rgba(255,255,143,0.2)] overflow-hidden"
            >
              <img 
                src={achievement2} 
                alt="Achievement 2" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements; 