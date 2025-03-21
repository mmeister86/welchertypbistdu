"use client";

import { motion } from "framer-motion";

export function SideAd() {
  return (
    <div className="fixed right-0 top-1/3 transform -translate-y-1/2 z-10 hidden lg:block">
      <motion.div
        className="w-32 bg-gray-100 rounded-l-lg flex items-center justify-center text-gray-400 border border-gray-200 shadow-lg overflow-hidden"
        initial={{ width: "8rem" }}
        whileHover={{ width: "16rem" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="h-96 w-full flex items-center justify-center relative">
          <motion.div
            className="rotate-90 whitespace-nowrap absolute"
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            Werbung - Advertisement
          </motion.div>
          <motion.div
            className="p-4 text-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <p className="font-bold text-gray-600 mb-2">Sonderangebot!</p>
            <p className="text-sm text-gray-500 mb-4">
              Entdecke unsere Premium-Tests mit detaillierten Ergebnissen und
              exklusiven Inhalten.
            </p>
            <motion.button
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mehr erfahren
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
