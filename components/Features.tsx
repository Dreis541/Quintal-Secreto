'use client';

import { motion } from 'motion/react';
import { Waves, Utensils, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Waves,
    title: 'Piscina Exclusiva',
    description: 'Piscina privativa de 7x3x1,4m com área rasa para maior conforto e segurança.',
    color: 'bg-emerald-50 text-emerald-700',
  },
  {
    icon: Utensils,
    title: 'Churrasqueira Coberta',
    description: 'Espaço coberto de 5x3m com pia, geladeira e freezer. Ambiente integrado ao ar livre.',
    color: 'bg-orange-50 text-orange-700',
  },
  {
    icon: ShieldCheck,
    title: 'Privacidade Total',
    description: 'Espaço exclusivo para até 30 pessoas. Day use das 10h às 20h para seu grupo.',
    color: 'bg-stone-100 text-stone-700',
  },
];

export default function Features() {
  return (
    <section className="py-24 md:py-32 bg-surface-container-low rounded-t-[3rem] md:rounded-t-[5rem]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl text-primary mb-6"
          >
            Por que escolher o Quintal Secreto?
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto rounded-full" 
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <feature.icon size={32} />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
