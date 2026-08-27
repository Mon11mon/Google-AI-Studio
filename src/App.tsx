/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MOODS } from './moodsData';
import { MoodItem } from './types';
import { Header } from './components/Header';
import { MoodButton } from './components/MoodButton';
import { MoodDetailCard } from './components/MoodDetailCard';
import { BackgroundDecorations } from './components/BackgroundDecorations';
import { playCheerChime, playPopSound } from './utils/audio';

export default function App() {
  const [selectedMood, setSelectedMood] = useState<MoodItem | null>(null);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const handleSelectMood = (mood: MoodItem) => {
    if (soundEnabled) {
      playCheerChime();
    }
    setSelectedMood(mood);
  };

  const handleReset = () => {
    setSelectedMood(null);
  };

  const toggleSound = () => {
    if (!soundEnabled) {
      playPopSound();
    }
    setSoundEnabled(!soundEnabled);
  };

  return (
    <div className="min-h-screen bg-[#E0F7FA] flex flex-col justify-between items-center py-3 sm:py-6 px-3 sm:px-4 relative overflow-x-hidden">
      <BackgroundDecorations />

      {/* Top Header */}
      <Header
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        onHomeClick={handleReset}
      />

      {/* Main App Container Card */}
      <div className="w-full max-w-4xl my-auto bg-white rounded-[32px] sm:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border-4 sm:border-8 border-white p-5 sm:p-8 md:p-10 relative overflow-hidden flex flex-col items-center justify-center min-h-[540px]">
        {/* Subtle interior decorative corner stars */}
        <div
          className="absolute top-4 left-5 w-6 h-6 bg-[#FFD54F] opacity-40 pointer-events-none hidden sm:block"
          style={{
            clipPath:
              'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          }}
        />
        <div
          className="absolute top-5 right-6 w-5 h-5 bg-[#FFD54F] opacity-40 pointer-events-none hidden sm:block"
          style={{
            clipPath:
              'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          }}
        />

        <AnimatePresence mode="wait">
          {!selectedMood ? (
            <motion.div
              key="mood-selection-view"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full flex flex-col items-center"
            >
              {/* Question Heading */}
              <div className="text-center mb-6 sm:mb-8" id="main-header">
                <h2
                  id="main-question-title"
                  className="text-3xl sm:text-4xl md:text-5xl font-black font-['Fredoka',sans-serif] text-[#FF6F61] tracking-tight leading-tight"
                >
                  How are you feeling today?
                </h2>
                <p className="mt-1.5 text-base sm:text-xl font-medium text-[#78909C]">
                  Tap any mood below to explore your positive feeling!
                </p>
              </div>

              {/* 10 Large Mood Cards in 5-Column Grid */}
              <div
                id="mood-choices-grid"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 w-full"
              >
                {MOODS.map((mood, index) => (
                  <MoodButton
                    key={mood.id}
                    mood={mood}
                    index={index}
                    onSelect={handleSelectMood}
                    soundEnabled={soundEnabled}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="mood-detail-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full flex justify-center"
            >
              <MoodDetailCard
                mood={selectedMood}
                onReset={handleReset}
                soundEnabled={soundEnabled}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-4xl mx-auto pt-3 pb-1 text-center select-none">
        <p className="text-xs sm:text-sm font-bold text-[#78909C] inline-flex items-center gap-1.5">
          <span>💖</span>
          <span>Remember: All your feelings are special and important!</span>
          <span>🌟</span>
        </p>
      </footer>
    </div>
  );
}
