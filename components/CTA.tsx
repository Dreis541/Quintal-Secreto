'use client';

import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section id="reservar" className="py-32 md:py-48 px-6 bg-surface-container-low relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-100/30 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-orange-100/30 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-serif italic text-4xl md:text-6xl text-primary mb-16 leading-tight"
        >
          &quot;Tem lugares que a gente não escolhe. A gente sente.&quot;
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="w-full md:w-auto bg-primary text-on-primary px-12 py-5 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
          >
            Quero Reservar
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#galeria"
            className="w-full md:w-auto bg-secondary text-on-primary px-12 py-5 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
          >
            Ver Fotos
          </motion.a>
        </div>
      </div>
    </section>
  );
}
