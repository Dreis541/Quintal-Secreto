'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const images = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ-gsY3M1K_qYJkzvJZzWN0amgmgezedEO1WxZKRvOBXj8RQePGzUxq4maLv0jJUHNr4lzDluu5yPTk-E07DBQo6yFbbYHTLsUOeNw3TknynHQ8SAmTiO8M3xHjnJOlFgd4DN1c02ppNMDT-cQzzZZay-pFpjMwYkamx4IRb3Hd_c_mcT0DdYO2zFfE4whFhV-GyMYr8jwlevxBWb6LEmsaStYbxL3ZAAoGa8TEROqynjDpYAFGiOA7MQ59navijzmQSO7RjlgtA3L',
    alt: 'Deck da piscina',
    className: 'col-span-2 row-span-2 aspect-square md:aspect-auto',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1J7eCb1mdxJIfk7k0-BsResuGlgU6ZairGM9OIvKgXHk9YDNv7b8Hnpy1ey40hzdXSFDc-Z6-U_b1plwaqVqDlHr64uxS1Tq2DNCjS1ujRy8TzAu16LJOhOk7Gj0BU5E_GFfxq5wkIWDQZA3IDk6UgNDgUDC24DA1T2m6u5LlQ4hD2BGp4RHvWPUFISHptsQUbvgSfv3rR3HqrTfgMsdDn0mSrGM49QAdzcI3jQxh9tTh0twe5-zTt2G7kvwsDbitA-qp0422mfB5',
    alt: 'Área de jantar externa',
    className: 'col-span-2 aspect-video',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_hVSJ8dVXSGNROZs9wr-tXl5Q5Y28upG9DXv6pC4pz7S1om6vnISJnSEEk1JIp9APfOGnHQnNAEW37uI_4DV_crG0uxTuC-3_Nriw_XsSfoEcIsl-EYgkWOfajzAZop9xfsIVvvPewg7PVNqGyJXp9wOsHmvtDZ5eNUKYkrJjy7ogIS4_3hJfbxGH0bCuN9q6n1-9wj__sKrYPpsnMGaXWcKM3DR1PpEML6hlkhbj-o4gLKmSzoI4qV_snJNSSXCQMlrrCVdeSoXp',
    alt: 'Plantas tropicais',
    className: 'hidden md:block aspect-[3/4]',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAn09MlDB28rutpOZht-xGC-P1q47rXtNAppYHeQ5RNOlO5GN06kyfe5OIWu0WsETwGNWVx1FZu_xHr_DTajOoN3SXzLZMW0M3hDF6XcNuI1xfynNartXWVplUvyxIcvErsna74e2anWIVLoXAeJ18Bh4rhYuaaZzFPZTo7Lq8WTZcAbqJfPUyqVVQyLTZVSdZHjRlxJWNeYUh0QFnP5yOrnQ7EvaaLNo6U5bNMq2JuheehK-yFda3TJxKqzzJTYoNi95NXI_n-eman',
    alt: 'Detalhe da água',
    className: 'hidden md:block aspect-[3/4]',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 md:py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl text-primary"
          >
            Nossa Atmosfera
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-on-surface-variant text-lg max-w-sm"
          >
            Um mosaico de tranquilidade e design orgânico, capturando a essência do refúgio.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 group ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
