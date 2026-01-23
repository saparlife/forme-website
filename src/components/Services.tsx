'use client';

import { useEffect, useRef } from 'react';
import type { Dictionary } from '@/i18n/get-dictionary';

interface ServicesProps {
  dict: Dictionary;
}

export default function Services({ dict }: ServicesProps) {
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

  const services = [
    {
      number: '01',
      title: dict.services.service1.title,
      description: dict.services.service1.description,
      features: [dict.services.service1.feature1, dict.services.service1.feature2, dict.services.service1.feature3],
    },
    {
      number: '02',
      title: dict.services.service2.title,
      description: dict.services.service2.description,
      features: [dict.services.service2.feature1, dict.services.service2.feature2, dict.services.service2.feature3],
    },
    {
      number: '03',
      title: dict.services.service3.title,
      description: dict.services.service3.description,
      features: [dict.services.service3.feature1, dict.services.service3.feature2, dict.services.service3.feature3],
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="relative py-32 md:py-40 bg-[#1A1714]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B59F7E]/20 to-transparent" />

      <div className="relative z-10 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="reveal flex items-center justify-center gap-4 mb-8">
              <div className="line-accent" />
              <span className="text-elegant text-[#B59F7E]">{dict.services.label}</span>
              <div className="line-accent" />
            </div>
            <h2 className="reveal heading-lg text-white">
              {dict.services.title}
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#B59F7E]/10">
            {services.map((service) => (
              <div
                key={service.number}
                className="reveal bg-[#1A1714] p-10 md:p-12 group hover:bg-[#B59F7E]/5 transition-all duration-500"
              >
                <span className="block text-5xl font-extralight text-[#B59F7E]/30 mb-8 group-hover:text-[#B59F7E]/50 transition-colors">
                  {service.number}
                </span>
                <h3 className="text-xl text-white font-medium mb-4">
                  {service.title}
                </h3>
                <p className="text-white/50 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-white/40">
                      <span className="w-1 h-1 bg-[#B59F7E] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
