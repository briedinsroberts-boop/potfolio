import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playAttempted = useRef(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.6; // Increased volume to ensure it's heard
    }

    const handleFirstInteraction = async () => {
      if (playAttempted.current) return;
      
      try {
        if (audioRef.current && !isPlaying) {
          playAttempted.current = true;
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (err) {
        console.log("Audio playback failed or blocked. User needs to tap play directly.");
      }
    };
    
    document.addEventListener('click', handleFirstInteraction, { once: true });
    
    return () => {
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, [isPlaying]);

  const togglePlay = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error("Audio playback failed:", err);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex items-center gap-4">
      <audio ref={audioRef} loop>
        <source src="https://www.mfiles.co.uk/mp3-downloads/gymnopedie1.mp3" type="audio/mpeg" />
        <source src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Gymnop%C3%A9die_No._1.ogg" type="audio/ogg" />
      </audio>
      
      <AnimatePresence>
        {!isPlaying && (
          <motion.span 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-[10px] md:text-xs uppercase tracking-widest font-medium text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hidden md:block bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10"
          >
            Play Music
          </motion.span>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={togglePlay}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 bg-dark/60 backdrop-blur-md flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/40 transition-all duration-500 group relative shadow-lg"
        aria-label="Toggle background music"
      >
        <div className={`absolute inset-0 rounded-full border transition-all duration-1000 ${isPlaying ? 'border-gold/20 scale-110' : 'border-gold/0 group-hover:border-gold/20 group-hover:scale-110'} ${!isPlaying ? 'animate-pulse border-gold/30' : ''}`} />
        
        {isPlaying ? (
          <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-gold scale-110 transition-transform duration-300" />
        ) : (
          <Music className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
        )}
      </motion.button>
    </div>
  );
}
