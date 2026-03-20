'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 px-6 md:px-12 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-primary leading-tight">
            Sobre o Quintal Secreto
          </h2>
          
          <div className="space-y-6 text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-xl">
            <p>
              O Quintal Secreto é um espaço exclusivo para day use, perfeito para momentos de lazer com família e amigos. 
            </p>
            <p>
              Um cantinho pensado para quem busca privacidade, conforto e tranquilidade sem precisar sair da cidade.
            </p>
          </div>

          <div className="border-l-4 border-outline-variant pl-8 py-2">
            <p className="font-serif italic text-2xl md:text-3xl text-primary leading-snug">
              &quot;Alguns momentos pedem mais do que um espaço. Pedem atmosfera, cuidado e exclusividade.&quot;
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-primary-container/10 rounded-2xl -rotate-2" />
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqXHNyyUjfDURnkBUlkPkfnqTF_2VnyYzbYmsVPJ-EuWfDh07N6z60DiR09VlNA14AJP6NBLJZRWKcw_5AiJvrNyWcfXQuMRbrDVpi9MK4hJQamfSTgDO_StO36u8-xpeJQSM2UIA487rzre3op4HhzVIDC1AeD46PFEa9VgLNHka_T7LbfRGx7Svkg7fChP6K57AHMhvZdcLV30j2-QgQr_sauaKdH-hc4V8Zri51598PDOGorwJAAYD5OSdGyGXZSuli5c7JQi52"
              alt="Jardim do Quintal Secreto"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
