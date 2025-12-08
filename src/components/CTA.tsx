'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-animate').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Therapist-Services-Image-2.webp"
          alt="FORME"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D2A26]/80 to-[#2D2A26]/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-5 md:px-10 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="scroll-animate text-3xl md:text-4xl lg:text-5xl font-light mb-8">
            Начните свой путь к гармонии вместе с нами
          </h2>

          <div className="scroll-animate">
            <a
              href="https://wa.me/77002502222"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#B59F7E] text-white px-8 py-4 rounded font-medium text-base hover:bg-[#9A8668] transition-all hover:transform hover:-translate-y-1 shadow-lg"
            >
              Записаться на пробное занятие
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
