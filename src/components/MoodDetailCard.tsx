import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, RefreshCw } from 'lucide-react';
import { MoodItem } from '../types';
import { speakText, stopSpeaking, playPopSound } from '../utils/audio';

interface MoodDetailCardProps {
  mood: MoodItem;
  onReset: () => void;
  soundEnabled: boolean;
}

export function MoodDetailCard({ mood, onReset, soundEnabled }: MoodDetailCardProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [hasSparkled, setHasSparkled] = useState(false);

  const handleReadAloud = () => {
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
      return;
    }

    if (soundEnabled) playPopSound();
    setIsSpeaking(true);
    const speechScript = `You are feeling ${mood.name}! ${mood.quote}. ${mood.message}`;
    speakText(speechScript, () => {
      setIsSpeaking(false);
    });
  };

  const handleSparkleClick = () => {
    if (soundEnabled) playPopSound();
    setHasSparkled(true);
    setTimeout(() => setHasSparkled(false), 1200);
  };

  return (
    <motion.div
      id="mood-detail-container"
      initial={{ opacity: 0, scale: 0.94, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: -15 }}
      transition={{ type: 'spring', stiffness: 280, damping: 24 }}
      className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center p-4 sm:p-6 relative"
    >
      {/* Top Read-Aloud Action */}
      <div className="absolute top-0 right-0 sm:right-2">
        <button
          id="btn-read-aloud"
          onClick={handleReadAloud}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-xs border ${
            isSpeaking
              ? 'bg-[#FF6F61] text-white border-[#FF6F61] animate-pulse ring-2 ring-[#FF6F61]/30'
              : 'bg-[#E0F2F1] text-[#00796B] border-[#4DB6AC] hover:bg-[#B2DFDB]'
          }`}
          title="Listen to this aloud"
          aria-label="Read quote and message out loud"
        >
          {isSpeaking ? (
            <>
              <VolumeX className="w-4 h-4 text-white" />
              <span>Stop</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-[#4DB6AC]" />
              <span>Read to Me</span>
            </>
          )}
        </button>
      </div>

      {/* Main Big Emoji Display */}
      <div className="relative mt-4 mb-2">
        <motion.div
          id="detail-big-emoji"
          className="text-8xl sm:text-9xl md:text-[130px] filter drop-shadow-sm select-none cursor-pointer leading-none"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.8,
            ease: 'easeInOut',
          }}
          whileHover={{ scale: 1.12, rotate: 6 }}
          whileTap={{ scale: 0.92 }}
          onClick={handleSparkleClick}
          title="Tap the emoji for a fun sparkle!"
        >
          {mood.emoji}
        </motion.div>

        {/* Sparkle burst on click */}
        <AnimatePresence>
          {hasSparkled && (
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1.4 }}
              exit={{ opacity: 0, scale: 1.8 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none text-4xl"
            >
              ✨💖⭐
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Result Title */}
      <h2
        id="detail-mood-name"
        className="text-3xl sm:text-5xl font-black font-['Fredoka',sans-serif] text-[#37474F] tracking-tight mb-3"
      >
        {mood.name}
      </h2>

      {/* Result Quote */}
      <p
        id="detail-quote-text"
        className="text-lg sm:text-2xl italic font-semibold text-[#546E7A] max-w-xl leading-relaxed mb-3"
      >
        “{mood.quote}”
      </p>

      {/* Result Message */}
      <p
        id="detail-message-text"
        className="text-base sm:text-xl font-bold text-[#FF6F61] mb-5 max-w-md"
      >
        {mood.message}
      </p>

      {/* Fun Kid Tip Pill */}
      <div
        id="detail-kid-tip"
        className="bg-[#E0F7FA] rounded-2xl px-4 py-2.5 border border-[#4DB6AC]/40 text-[#00695C] text-sm sm:text-base font-semibold max-w-lg mb-8 shadow-xs flex items-center gap-2"
      >
        <span className="text-xl">💡</span>
        <span>
          <strong>Buddy Tip:</strong> {mood.kidTip}
        </span>
      </div>

      {/* Back / Choose Another Mood Button */}
      <motion.button
        id="btn-choose-another-mood"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          stopSpeaking();
          if (soundEnabled) playPopSound();
          onReset();
        }}
        className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#FF6F61] hover:bg-[#FF5745] text-white font-bold text-base sm:text-lg shadow-[0_10px_20px_rgba(255,111,97,0.3)] hover:shadow-[0_12px_24px_rgba(255,111,97,0.4)] flex items-center justify-center gap-2.5 cursor-pointer transition-all duration-150 border-none"
      >
        <RefreshCw className="w-5 h-5 animate-spin-slow" />
        <span>Choose Another Mood</span>
      </motion.button>
    </motion.div>
  );
}
