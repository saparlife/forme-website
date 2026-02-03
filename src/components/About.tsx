'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import type { Dictionary } from '@/i18n/get-dictionary';

interface AboutProps {
  dict: Dictionary;
}

export default function About({ dict }: AboutProps) {
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
            src="/images/about-interior.jpg"
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
              <span className="text-elegant text-[#B59F7E]">{dict.about.label}</span>
            </div>

            <h2 className="reveal heading-lg text-[#1A1714] mb-8">
              {dict.about.title}{' '}
              <span className="gradient-text">{dict.about.titleAccent}</span>
            </h2>

            <p className="reveal text-[#1A1714]/60 text-lg leading-relaxed mb-6">
              {dict.about.description1}
            </p>

            <p className="reveal text-[#1A1714]/60 leading-relaxed mb-6">
              {dict.about.description2}
            </p>

            <p className="reveal text-[#1A1714]/60 leading-relaxed mb-12">
              {dict.about.description3}
            </p>

            {/* Stats */}
            <div className="reveal grid grid-cols-3 gap-6 pt-8 border-t border-[#1A1714]/10">
              {[
                { number: '01', label: dict.about.stat1 },
                { number: '02', label: dict.about.stat2 },
                { number: '03', label: dict.about.stat3 },
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
