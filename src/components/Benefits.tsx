'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import type { Dictionary } from '@/i18n/get-dictionary';

interface BenefitsProps {
  dict: Dictionary;
}

export default function Benefits({ dict }: BenefitsProps) {
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

  const benefits = [
    {
      title: dict.benefits.benefit1.title,
      description: dict.benefits.benefit1.description,
    },
    {
      title: dict.benefits.benefit2.title,
      description: dict.benefits.benefit2.description,
    },
    {
      title: dict.benefits.benefit3.title,
      description: dict.benefits.benefit3.description,
    },
    {
      title: dict.benefits.benefit4.title,
      description: dict.benefits.benefit4.description,
    },
    {
      title: dict.benefits.benefit5.title,
      description: dict.benefits.benefit5.description,
    },
  ];

  return (
    <section id="benefits" ref={sectionRef} className="relative bg-[#FAF8F5] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left - Image - Full height */}
        <div className="relative h-[50vh] lg:h-auto bg-[#B59F7E]/20">
          <Image
            src="/images/technogym.jpg"
            alt="TechnoGym equipment at FORME"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/60 via-transparent to-transparent" />
          {/* Floating Badge */}
          <div className="absolute bottom-8 left-8 right-8 glass p-6">
            <p className="text-white text-elegant mb-2">{dict.benefits.premiumEquipment}</p>
            <p className="text-white/70 text-sm">{dict.benefits.technoGymDesc}</p>
          </div>
        </div>

        {/* Right - Content */}
        <div className="flex items-center py-20 lg:py-32 px-6 md:px-16 lg:px-24">
          <div className="w-full max-w-xl">
            <div className="reveal flex items-center gap-4 mb-8">
              <div className="line-accent" />
              <span className="text-elegant text-[#B59F7E]">{dict.benefits.label}</span>
            </div>

            <h2 className="reveal heading-lg text-[#1A1714] mb-12">
              {dict.benefits.title} <span className="gradient-text">{dict.benefits.titleAccent}</span>
            </h2>

            <div className="space-y-0">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="reveal group border-t border-[#1A1714]/10 py-6 hover:bg-[#B59F7E]/5 -mx-4 px-4 transition-all cursor-default"
                >
                  <div className="flex items-start gap-5">
                    <span className="text-elegant text-[#B59F7E]/50 group-hover:text-[#B59F7E] transition-colors pt-1">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-medium text-[#1A1714] mb-1 group-hover:text-[#B59F7E] transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-[#1A1714]/50 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
