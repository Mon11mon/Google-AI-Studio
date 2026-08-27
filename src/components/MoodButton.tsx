import { Key } from 'react';
import { motion } from 'motion/react';
import { MoodItem } from '../types';

interface MoodButtonProps {
  key?: Key;
  mood: MoodItem;
  index: number;
  onSelect: (mood: MoodItem) => void;
  soundEnabled: boolean;
}

export function MoodButton({ mood, index, onSelect }: MoodButtonProps) {
  return (
    <motion.button
      id={`mood-btn-${mood.id}`}
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: index * 0.03,
        type: 'spring',
        stiffness: 280,
        damping: 22,
      }}
      whileHover={{
        y: -5,
        scale: 1.03,
        transition: { duration: 0.15 },
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={() => onSelect(mood)}
      className={`group relative flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-[24px] ${mood.colorScheme.buttonBg} ${mood.colorScheme.buttonHover} border-2 border-white/60 shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_18px_rgba(0,0,0,0.1)] transition-all duration-200 cursor-pointer min-h-[130px] sm:min-h-[150px] w-full text-center focus:outline-none focus:ring-3 focus:ring-[#FF6F61]/40`}
      aria-label={`Select mood ${mood.name}`}
    >
      {/* Large animated emoji */}
      <motion.span
        className="text-4xl sm:text-5xl md:text-6xl mb-1.5 drop-shadow-xs select-none"
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.2 + (index % 3) * 0.4,
          ease: 'easeInOut',
        }}
      >
        {mood.emoji}
      </motion.span>

      {/* Mood Name - Uppercase letter-spaced */}
      <span className="font-extrabold text-sm sm:text-[15px] uppercase tracking-wider text-[#37474F]">
        {mood.name}
      </span>
    </motion.button>
  );
}
