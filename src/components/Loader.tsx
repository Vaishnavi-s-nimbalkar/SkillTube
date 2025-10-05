import React from "react";
import { motion } from "framer-motion";

const FuturisticLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        {/* Glowing rings */}
        <motion.div
          className="absolute w-32 h-32 rounded-full border-4 border-cyan-400"
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full border-4 border-purple-500"
          animate={{ scale: [1, 1.6, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />

        {/* Play button */}
        <motion.div
          className="z-10 w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg shadow-cyan-500/50"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        >
          <motion.div
            className="w-0 h-0 border-t-[15px] border-t-transparent 
                       border-l-[25px] border-l-white 
                       border-b-[15px] border-b-transparent"
            animate={{ scale: [0.9, 1.1, 0.9] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FuturisticLoader;
