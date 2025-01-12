import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet, DollarSign, ArrowRightLeft, PartyPopper, Copy, Check } from 'lucide-react';
import raydiumLogo from '../assets/images/icons/raydium.png';

const HowToBuy = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "2hM8gVaKdz3Eokx2QZY1a9oZDPx9J3zWP4gxzsZqpump";
  const raydiumUrl = "https://raydium.io/swap/?inputMint=sol&outputMint=2hM8gVaKdz3Eokx2QZY1a9oZDPx9J3zWP4gxzsZqpump";

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleContainerClick = (url: string | undefined) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  const steps = [
    {
      icon: <Wallet size={32} />,
      title: "Create a wallet",
      description: (
        <>
          Download and set up a Solana-compatible wallet like{' '}
          <span className="underline decoration-[rgb(255,255,143)] hover:text-white transition-colors">
            Phantom.app
          </span>
        </>
      ),
      url: "https://phantom.app"
    },
    {
      icon: <DollarSign size={32} />,
      title: "Buy SOL",
      description: "Purchase SOL directly through Phantom or your preferred cryptocurrency exchange, then deposit it into your Phantom wallet."
    },
    {
      icon: <ArrowRightLeft size={32} />,
      title: "Swap $SOL for $JUNJUN",
      description: "Use Phantom to swap $SOL for $JUNJUN by copying the contract address below and pasting into the Swap tab in Phantom.",
      extra: (
        <>
          <div className="mt-4 bg-black/20 p-3 rounded-lg flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
            <div className="text-sm text-[rgb(255,255,143)]/80 flex items-center overflow-hidden">
              <span className="font-bold whitespace-nowrap">CA:</span>
              <span className="ml-2 font-mono truncate">
                {contractAddress}
              </span>
            </div>
            <button
              onClick={handleCopy}
              className="ml-2 p-2 hover:bg-black/40 rounded-lg transition-colors flex-shrink-0"
            >
              {copied ? 
                <Check size={20} className="text-green-400" /> : 
                <Copy size={20} className="text-[rgb(255,255,143)]" />
              }
            </button>
          </div>
        </>
      )
    },
    {
      icon: <PartyPopper size={32} />,
      title: "Done!",
      description: "Congratulations! You're now part of the Junjun community! 🐻"
    }
  ];

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-xl md:text-2xl font-bold text-[rgb(255,255,143)] text-center mb-12 drop-shadow-[0_0_10px_rgba(255,255,143,0.5)]">
            How to Buy JUNJUN
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-black/20 rounded-xl border border-[rgb(255,255,143)]/20 shadow-[0_0_30px_rgba(255,255,143,0.2)] p-6 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => handleContainerClick(step.url)}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-black rounded-full text-white">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[rgb(255,255,143)]">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[rgb(255,255,143)] mt-1">
                      {typeof step.description === 'string' ? step.description : step.description}
                    </p>
                  </div>
                </div>
                {step.extra}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-black/20 rounded-xl border border-[rgb(255,255,143)]/20 shadow-[0_0_30px_rgba(255,255,143,0.2)] p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-[rgb(255,255,143)] text-center mb-4">
              Alternatively, you can swap your $SOL for $JUNJUN using a direct link to Raydium
            </p>
            <motion.a
              href={raydiumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src={raydiumLogo} 
                alt="Raydium" 
                className="h-10 mx-auto hover:opacity-80 transition-opacity"
              />
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HowToBuy;