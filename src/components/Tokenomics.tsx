import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Coins } from 'lucide-react';
import { useRef, useEffect } from 'react';

const Tokenomics = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 50;
      const increment = 1000000000 / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= 1000000000) {
          setCount(1000000000);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const tokenInfo = [
    { label: "TOTAL SUPPLY", value: formatNumber(count) },
    { label: "BUY/SELL TAX", value: "0%" },
    { label: "LIQUIDITY BURNED", value: "100%" },
    { label: "OWNERSHIP", value: "RENOUNCED" }
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <Coins size={48} className="mx-auto mb-6 bg-black text-white p-2 rounded-full" />
          <h2 className="text-5xl font-bold text-[rgb(255,255,143)] mb-8 drop-shadow-[0_0_10px_rgba(255,255,143,0.5)]">
            Tokenomics
          </h2>
          
          <motion.div
            className="bg-black/20 rounded-2xl border border-[rgb(255,255,143)]/20 shadow-[0_0_30px_rgba(255,255,143,0.2)] p-8"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="grid gap-8 text-[rgb(255,255,143)]">
              {tokenInfo.map((item, index) => (
                <div key={index} className="border-b-2 border-[rgb(255,255,143)]/10 last:border-0 pb-6 last:pb-0">
                  <div className="text-2xl font-bold mb-2">{item.label}</div>
                  <div className="text-4xl md:text-5xl font-bold">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;