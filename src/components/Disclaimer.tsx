import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const Disclaimer = () => {
  return (
    <section className="py-12 border-t border-[rgb(255,255,143)]/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <AlertTriangle size={32} className="mx-auto mb-4 bg-black text-white p-1 rounded-full" />
          <h2 className="text-2xl font-bold mb-4 text-[rgb(255,255,143)]">Disclaimer</h2>
          <p className="text-[rgb(255,255,143)] text-sm leading-relaxed">
            This is not financial advice. Cryptocurrencies are highly volatile and 
            speculative assets. The content provided on this website is for 
            informational purposes only. Do your own research and consult with a 
            qualified financial advisor before making any investment decisions. 
            Never invest more than you can afford to lose.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Disclaimer;