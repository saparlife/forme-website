'use client';

import { useEffect, useRef } from 'react';

export default function Location() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="location" ref={sectionRef} className="relative py-32 md:py-40 bg-[#FAF8F5]">
      <div className="px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Content */}
            <div>
              <div className="reveal flex items-center gap-4 mb-8">
                <div className="line-accent" />
                <span className="text-elegant text-[#B59F7E]">Контакты</span>
              </div>

              <h2 className="reveal heading-lg text-[#1A1714] mb-8">
                Начните свой путь<br />
                <span className="gradient-text">к результату</span>
              </h2>

              <div className="reveal space-y-8 mb-12">
                <div>
                  <p className="text-elegant text-[#B59F7E] mb-2">Адрес</p>
                  <p className="text-[#1A1714] text-lg">ЖК Metropole</p>
                  <p className="text-[#1A1714]/60">Аль-Фараби, 41/7, блок 7<br />Алматы, Казахстан</p>
                </div>
                <div>
                  <p className="text-elegant text-[#B59F7E] mb-2">Связаться</p>
                  <a href="tel:+77022222566" className="text-[#1A1714] text-lg hover:text-[#B59F7E] transition-colors block">
                    +7 702 222 25 66
                  </a>
                  <a href="mailto:Forme.gym@list.ru" className="text-[#1A1714]/60 hover:text-[#B59F7E] transition-colors">
                    Forme.gym@list.ru
                  </a>
                </div>
              </div>

              <div className="reveal flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/77022222566"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium"
                >
                  Записаться на тренировку
                </a>
              </div>
            </div>

            {/* Map / Contact Card */}
            <div className="reveal">
              <div className="bg-[#1A1714] p-10 md:p-16">
                <div className="mb-12">
                  <p className="text-elegant text-[#B59F7E] mb-6">Социальные сети</p>
                  <div className="flex gap-6">
                    <a
                      href="https://www.instagram.com/forme.women"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 hover:text-[#B59F7E] transition-colors text-elegant"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://wa.me/77022222566"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 hover:text-[#B59F7E] transition-colors text-elegant"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                <div className="mb-12">
                  <p className="text-elegant text-[#B59F7E] mb-6">Часы работы</p>
                  <div className="space-y-2 text-white/50">
                    <p>Пн — Пт: 07:00 — 22:00</p>
                    <p>Сб — Вс: 09:00 — 20:00</p>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=ЖК+Metropole+Аль-Фараби+41/7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-premium text-white border-white/20 hover:bg-white hover:text-[#1A1714] w-full justify-center"
                >
                  Открыть карту
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
