'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, index) => {
              setTimeout(() => el.classList.add('visible'), index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative bg-[#FAF8F5] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Image - Full height */}
        <div className="relative h-[50vh] lg:h-auto order-1 lg:order-2 bg-[#B59F7E]/20">
          <Image
            src="/images/index-pic_004.jpg"
            alt="FORME Interior"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-transparent to-transparent lg:opacity-100 opacity-0" />
        </div>

        {/* Content */}
        <div className="order-2 lg:order-1 flex items-center py-20 lg:py-32 px-6 md:px-16 lg:px-24">
          <div className="max-w-xl">
            <div className="reveal flex items-center gap-4 mb-8">
              <div className="line-accent" />
              <span className="text-elegant text-[#B59F7E]">О клубе</span>
            </div>

            <h2 className="reveal heading-lg text-[#1A1714] mb-8">
              Пространство, где вы можете{' '}
              <span className="gradient-text">быть собой</span>
            </h2>

            <p className="reveal text-[#1A1714]/60 text-lg leading-relaxed mb-6">
              FORME — это больше, чем фитнес-студия. Это приватное премиальное
              пространство для женщин, где каждая деталь продумана для вашего
              комфорта и результата.
            </p>

            <p className="reveal text-[#1A1714]/60 leading-relaxed mb-12">
              Никаких камер. Никаких посторонних взглядов. Только вы, ваши цели
              и профессиональный тренер рядом.
            </p>

            {/* Stats */}
            <div className="reveal grid grid-cols-3 gap-6 pt-8 border-t border-[#1A1714]/10">
              {[
                { number: '01', label: 'Приватность' },
                { number: '02', label: 'Комфорт' },
                { number: '03', label: 'Результат' },
              ].map((stat) => (
                <div key={stat.number}>
                  <span className="block text-3xl font-light text-[#B59F7E] mb-2">
                    {stat.number}
                  </span>
                  <span className="text-elegant text-[#1A1714]/50 text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
