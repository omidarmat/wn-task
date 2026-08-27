"use client";

import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useState } from "react";

export function Animation() {
  const [hide, setHide] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
        <AnimatePresence>
          {!hide && (
            <motion.div
              className="h-150 w-100 border border-neutral-400 rounded-2xl p-3"
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
            >
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                ورود به زرافزا
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          onClick={() => setHide((h) => !h)}
          className="border borer-neutral-400 rounded-lg px-3 py-1"
          transition={{ duration: 0.15 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Button
        </motion.button>
      </MotionConfig>
    </div>
  );
}
