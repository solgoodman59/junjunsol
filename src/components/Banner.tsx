import { motion } from 'framer-motion';
import twitterIcon from '../assets/images/icons/twitter.png';
import telegramIcon from '../assets/images/icons/telegram.png';
import dexscreenerIcon from '../assets/images/icons/dexscreener.png';
import junjunAvatar from '../assets/images/avatar/junjunsol_ava.jpg';

const Banner = () => {
  const socialLinks = [
    { 
      icon: <img src={twitterIcon} alt="Twitter" width={25} height={25} />, 
      url: 'https://x.com/JunjunCTOsol', 
      label: 'Twitter' 
    },
    { 
      icon: <img src={telegramIcon} alt="Telegram" width={25} height={25} />, 
      url: 'https://t.me/JunjunCTOsol', 
      label: 'Telegram' 
    },
    { 
      icon: <img src={dexscreenerIcon} alt="Dexscreener" width={25} height={25} />, 
      url: 'https://dexscreener.com/solana/93bmv7c5ydrnsw19mlsvabr6hvyuzlhpybjcqhbmskbk', 
      label: 'Dexscreener' 
    }
  ];

  return (
    <section className="relative min-h-[45vh] md:min-h-[60vh] overflow-hidden pb-5">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-[rgb(255,255,143)]/30 rounded-full blur-sm"
            animate={{
              y: ['0vh', '60vh'],
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
      
      <div className="relative container mx-auto px-4 pt-6 md:pt-10 pb-2 md:pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="banner-title text-[rgb(255,255,143)] mb-2 md:mb-4 drop-shadow-[0_0_10px_rgba(255,255,143,0.5)]">
            JUNJUN
          </h1>
          <p className="banner-subtitle text-[rgb(255,255,143)] mb-3 md:mb-4">
            The lucky orphan on Solana🐻
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 md:p-4 bg-black rounded-full hover:bg-black/80 transition-colors text-white hover:text-[rgb(255,255,143)] shadow-[0_0_10px_rgba(255,255,143,0.3)] hover:shadow-[0_0_15px_rgba(255,255,143,0.5)]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <motion.img
            src={junjunAvatar}
            alt="Junjun Mascot"
            className="w-40 h-40 md:w-40 md:h-40 mx-auto rounded-full shadow-[0_0_30px_rgba(255,255,143,0.5)]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;