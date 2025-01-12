import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-xl md:text-2xl font-bold text-[rgb(255,255,143)] mb-8 drop-shadow-[0_0_10px_rgba(255,255,143,0.5)]">
            About JunjunSol
          </h2>
          <div className="bg-black/20 rounded-2xl border border-[rgb(255,255,143)]/20 shadow-[0_0_30px_rgba(255,255,143,0.2)] p-8">
            <div className="space-y-8 text-sm md:text-base text-[rgb(255,255,143)]">
              <p>
                JunjunSol emerged from the vibrant Solana community as more than just another meme coin. 
                We're a movement that combines the fun and excitement of meme culture with the innovative 
                spirit of the Solana ecosystem.
              </p>
              <p>
                Born on Pumpfun and driven by our passionate community, JunjunSol represents the perfect 
                blend of humor and serious potential. We believe that crypto doesn't always have to be 
                serious to be valuable - sometimes the best opportunities come wrapped in a bit of fun!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;