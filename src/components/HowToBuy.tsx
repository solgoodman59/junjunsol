import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet, DollarSign, ArrowRightLeft, PartyPopper, Copy, Check } from 'lucide-react';

const HowToBuy = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "2hM8gVaKdz3Eokx2QZY1a9oZDPx9J3zWP4gxzsZqpump";
  const raydiumUrl = "https://raydium.io/swap/?inputMint=sol&outputMint=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R";

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
      title: "Create a Wallet",
      description: "Download and set up a Solana-compatible wallet like Phantom"
    },
    {
      icon: <DollarSign size={32} />,
      title: "Buy SOL",
      description: "Purchase SOL from your preferred cryptocurrency exchange"
    },
    {
      icon: <ArrowRightLeft size={32} />,
      title: "Swap Your SOL for $JUNJUN on Raydium!",
      description: "Click here to swap your SOL for $JUNJUN tokens on Raydium",
      url: raydiumUrl,
      extra: (
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
      )
    },
    {
      icon: <PartyPopper size={32} />,
      title: "Done!",
      description: "Congratulations! You're now part of the JunjunSol community!"
    }
  ];

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
          <h2 className="text-5xl font-bold text-[rgb(255,255,143)] text-center mb-12 drop-shadow-[0_0_10px_rgba(255,255,143,0.5)]">
            How to Buy $JUNJUN
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <h3 className="text-xl font-semibold text-[rgb(255,255,143)]">
                      {step.title}
                    </h3>
                    <p className="text-[rgb(255,255,143)] mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
                {step.extra}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToBuy;