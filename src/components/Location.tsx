'use client';

import { useEffect, useRef } from 'react';
import type { Dictionary } from '@/i18n/get-dictionary';

interface LocationProps {
  dict: Dictionary;
}

export default function Location({ dict }: LocationProps) {
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
                <span className="text-elegant text-[#B59F7E]">{dict.location.label}</span>
              </div>

              <h2 className="reveal heading-lg text-[#1A1714] mb-8">
                {dict.location.title}<br />
                <span className="gradient-text">{dict.location.titleAccent}</span>
              </h2>

              <div className="reveal space-y-8 mb-12">
                <div>
                  <p className="text-elegant text-[#B59F7E] mb-2">{dict.location.addressLabel}</p>
                  <p className="text-[#1A1714] text-lg">{dict.location.addressName}</p>
                  <p className="text-[#1A1714]/60 whitespace-pre-line">{dict.location.addressFull}</p>
                </div>
                <div>
                  <p className="text-elegant text-[#B59F7E] mb-2">{dict.location.contactLabel}</p>
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
                  {dict.location.bookTraining}
                </a>
              </div>
            </div>

            {/* Map / Contact Card */}
            <div className="reveal">
              <div className="bg-[#1A1714] p-10 md:p-16">
                <div className="mb-12">
                  <p className="text-elegant text-[#B59F7E] mb-6">{dict.location.socialLabel}</p>
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
                  <p className="text-elegant text-[#B59F7E] mb-6">{dict.location.hoursLabel}</p>
                  <div className="space-y-2 text-white/50">
                    <p>{dict.location.weekdays}</p>
                    <p>{dict.location.saturday}</p>
                    <p>{dict.location.sunday}</p>
                  </div>
                </div>

                <a
                  href="https://go.2gis.com/0oeQS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-premium text-white border-white/20 hover:bg-white hover:text-[#1A1714] w-full justify-center"
                >
                  {dict.location.openMap}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
