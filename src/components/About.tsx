import { motion } from 'framer-motion';
import FloatingParticles from './common/FloatingParticles';

const About = () => {
  return (
    <section className="py-10 relative overflow-hidden">
      <FloatingParticles />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-xl md:text-2xl font-bold text-[rgb(255,255,143)] mb-8 drop-shadow-[0_0_10px_rgba(255,255,143,0.5)]">
            About Junjun
          </h2>
          <div className="bg-black/20 rounded-2xl border border-[rgb(255,255,143)]/20 shadow-[0_0_30px_rgba(255,255,143,0.2)] p-8">
            <div className="space-y-8 text-sm md:text-base text-[rgb(255,255,143)]">
              <p>
                Junjun, a brown bear cub born on January 4, 2024, at the Shanghai Zoo, has quickly become an internet sensation.
              </p>
              <p>
                Abandoned by his mother at birth, he was hand-reared by zookeepers who provided him with toys and his favorite foods.
              </p>
              <p>
                His playful antics, adorable demeanor, and fluffy appearance—often compared to Duffy the Disney character—have captivated visitors and social media users worldwide, contributing to a surge in the zoo's popularity.
              </p>
              <p>
                Junjun is now a part of the Solana community, bringing joy and excitement through meme culture.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;