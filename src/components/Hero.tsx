'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1A1714]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/VIEW-0130000.jpg"
          alt="FORME Premium Fitness"
          fill
          className="object-cover opacity-60"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1714]/60 via-transparent to-[#1A1714]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1714]/70 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B59F7E]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B59F7E]/30 to-transparent" />

      {/* Vertical Lines */}
      <div className="absolute left-[10%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#B59F7E]/10 to-transparent" />
      <div className="absolute right-[10%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#B59F7E]/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl">
          {/* Label */}
          <div className={`flex items-center gap-4 mb-8 ${loaded ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="w-12 h-px bg-[#B59F7E]" />
            <span className="text-elegant text-[#B59F7E] uppercase tracking-widest text-sm">Premium Women&apos;s Fitness</span>
          </div>

          {/* Main Title */}
          <h1 className={`mb-2 ${loaded ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
            <span className="font-logo text-[clamp(4rem,12vw,10rem)] text-white tracking-wide lowercase leading-[1.1] block pt-2">formē</span>
          </h1>

          {/* Tagline */}
          <p className={`heading-md text-white/80 font-light mb-4 ${loaded ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
            Результат. Комфорт. Приватность.
          </p>

          {/* Description */}
          <p className={`text-white/50 text-lg max-w-xl mb-12 ${loaded ? 'animate-fade-up delay-300' : 'opacity-0'}`}>
            Приватные персональные тренировки в премиальном пространстве на Аль-Фараби
          </p>

          {/* CTA */}
          <div className={`flex flex-col sm:flex-row gap-4 ${loaded ? 'animate-fade-up delay-400' : 'opacity-0'}`}>
            <a
              href="https://wa.me/77002502222"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium"
            >
              <span>Записаться</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#about"
              className="btn-outline-premium text-white border-white/30 hover:bg-white hover:text-[#1A1714]"
            >
              Узнать больше
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="flex justify-between items-end px-6 md:px-16 lg:px-24 pb-8">
          {/* Location */}
          <div className={`hidden md:block ${loaded ? 'animate-fade-up delay-500' : 'opacity-0'}`}>
            <p className="text-elegant text-white/40 mb-2">Локация</p>
            <p className="text-white/70 text-sm">ЖК Metropole, Аль-Фараби 41/7</p>
          </div>

          {/* Scroll Indicator */}
          <div className={`flex flex-col items-center gap-3 ${loaded ? 'animate-fade-up delay-600' : 'opacity-0'}`}>
            <span className="text-elegant text-white/40">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-[#B59F7E] to-transparent" />
          </div>

          {/* Social */}
          <div className={`hidden md:flex gap-6 ${loaded ? 'animate-fade-up delay-500' : 'opacity-0'}`}>
            <a href="https://instagram.com/forme.kz" target="_blank" rel="noopener noreferrer"
              className="text-white/40 hover:text-[#B59F7E] transition-colors text-elegant">
              Instagram
            </a>
            <a href="https://wa.me/77002502222" target="_blank" rel="noopener noreferrer"
              className="text-white/40 hover:text-[#B59F7E] transition-colors text-elegant">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
