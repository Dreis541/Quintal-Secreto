'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1ue0-VHjP_xYTPK_3GuuSlZwyDn3FSanCQRJtMvuZdbZ25xD3JqEgIuAh4F4sNsGQQQ-R8p9AH4RUAF4ZUSG2w2GSdoH408S4FMpLSZCDpPBYE1uRFhKjOzZ7_CqNmlNvEL1RQcNKfszLnpM1mMK2bLs-S56NoWvpXnJYs4CHUWjwyZM93HFlqy_fGt1Dxa0RQ8uwRIcVkC76IWBivmbXA17ZtfdDGMcDOm2W-LztdsYftjbcrIk09sNWzejIO1qAhSCldEdmj-lA"
          alt="Piscina do Quintal Secreto"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/20 via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-block bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20"
        >
          <span className="font-serif italic text-white text-xl">Lazer e Diversão</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-7xl md:text-9xl text-white mb-8 leading-tight"
        >
          Ali
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif italic text-2xl md:text-3xl text-white/90 max-w-2xl mx-auto leading-relaxed"
        >
          Um lugar escondido no meio da cidade... onde você esquece do mundo lá fora.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/80"
        >
          <ChevronDown size={40} strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
}
