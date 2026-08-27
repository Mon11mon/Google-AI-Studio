import { motion } from 'motion/react';

export function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none">
      {/* Decorative Star 1 - Top Left */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: 'easeInOut',
        }}
        className="absolute top-6 left-8 w-8 h-8 bg-[#FFD54F] opacity-70"
        style={{
          clipPath:
            'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
        }}
      />

      {/* Decorative Star 2 - Top Right */}
      <motion.div
        animate={{
          scale: [0.8, 1.1, 0.8],
          rotate: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-12 right-12 w-9 h-9 bg-[#FFD54F] opacity-60"
        style={{
          clipPath:
            'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
        }}
      />

      {/* Decorative Star 3 - Center Left */}
      <motion.div
        animate={{
          scale: [0.9, 1.25, 0.9],
          rotate: [10, -15, 10],
        }}
        transition={{
          repeat: Infinity,
          duration: 4.5,
          ease: 'easeInOut',
          delay: 0.5,
        }}
        className="absolute top-1/2 left-6 w-6 h-6 bg-[#FFD54F] opacity-50 hidden sm:block"
        style={{
          clipPath:
            'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
        }}
      />

      {/* Decorative Cloud 1 - Bottom Left */}
      <motion.div
        animate={{
          x: [-12, 12, -12],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: 'easeInOut',
        }}
        className="absolute bottom-12 left-10 w-20 h-10 bg-[#B2EBF2] rounded-full opacity-60 relative"
      >
        <div className="absolute w-9 h-9 bg-[#B2EBF2] rounded-full -top-4 left-3" />
        <div className="absolute w-8 h-8 bg-[#B2EBF2] rounded-full -top-3 left-8" />
      </motion.div>

      {/* Decorative Cloud 2 - Bottom Right */}
      <motion.div
        animate={{
          x: [10, -10, 10],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: 'easeInOut',
          delay: 1.5,
        }}
        className="absolute bottom-16 right-12 w-24 h-12 bg-[#B2EBF2] rounded-full opacity-60 relative hidden sm:block"
      >
        <div className="absolute w-11 h-11 bg-[#B2EBF2] rounded-full -top-5 left-4" />
        <div className="absolute w-10 h-10 bg-[#B2EBF2] rounded-full -top-4 left-10" />
      </motion.div>

      {/* Subtle Coral / Teal floating orbs for vibrant ambient depth */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#FF6F61]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#4DB6AC]/15 blur-3xl pointer-events-none" />
    </div>
  );
}
