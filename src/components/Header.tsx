import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  onHomeClick: () => void;
}

export function Header({ soundEnabled, onToggleSound, onHomeClick }: HeaderProps) {
  return (
    <header className="w-full max-w-5xl mx-auto pt-3 pb-1 px-4 sm:px-6 flex items-center justify-between">
      {/* Brand logo / mascot */}
      <button
        id="btn-brand-home"
        onClick={onHomeClick}
        className="flex items-center gap-2 sm:gap-3 group text-left cursor-pointer focus:outline-none"
        aria-label="My Mood Buddy Home"
      >
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FF6F61] shadow-md shadow-[#FF6F61]/30 flex items-center justify-center border-2 border-white"
        >
          <span className="text-xl sm:text-2xl select-none">🎈</span>
        </motion.div>
        <div>
          <div className="flex items-center gap-1.5">
            <h1 className="text-2xl sm:text-3xl font-black font-['Fredoka',sans-serif] text-[#FF6F61] tracking-tight group-hover:opacity-90 transition-opacity">
              My Mood Buddy
            </h1>
            <span className="text-base text-[#FFD54F]">✨</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-[#78909C] hidden sm:block">
            Choose how you feel & get a positive boost!
          </p>
        </div>
      </button>

      {/* Header controls: Sound FX Toggle */}
      <div className="flex items-center gap-2">
        <button
          id="btn-toggle-sound"
          onClick={onToggleSound}
          className={`px-3 py-1.5 rounded-full border-2 text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs ${
            soundEnabled
              ? 'bg-[#E0F2F1] border-[#4DB6AC] text-[#00796B] hover:bg-[#B2DFDB]'
              : 'bg-white/80 border-[#90A4AE] text-[#78909C] hover:bg-white'
          }`}
          title={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
          aria-label="Toggle sound effects"
        >
          {soundEnabled ? (
            <>
              <Volume2 className="w-4 h-4 text-[#4DB6AC]" />
              <span className="hidden sm:inline">Sound ON</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-[#78909C]" />
              <span className="hidden sm:inline">Sound OFF</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}
