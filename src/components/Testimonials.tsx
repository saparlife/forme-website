'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Testimonials() {
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

  const testimonials = [
    {
      name: 'Айгерим Н.',
      role: 'Предприниматель',
      image: '/images/Therapist-Testimonials-Image-1.webp',
      quote: 'Formé — именно то, что искала. Приватность, комфорт и результат. Никаких камер, никаких посторонних взглядов.',
    },
    {
      name: 'Дана С.',
      role: 'Врач',
      image: '/images/Therapist-Testimonials-Image-2.webp',
      quote: 'После родов за 3 месяца вернулась в форму. Тренер составил программу под мои задачи. TechnoGym — просто космос!',
    },
    {
      name: 'Асель Ж.',
      role: 'Телеведущая',
      image: '/images/Therapist-Testimonials-Image-3.webp',
      quote: 'Могу быть собой, без страха попасть в чьи-то сторис. Приватность на 100%. Премиум уровень во всём.',
    },
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="relative py-24 md:py-32 bg-[#1A1714] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#B59F7E] blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#B59F7E] blur-[100px]" />
      </div>

      <div className="relative z-10 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="reveal flex items-center justify-center gap-4 mb-6">
              <div className="line-accent" />
              <span className="text-elegant text-[#B59F7E]">Отзывы</span>
              <div className="line-accent" />
            </div>
            <h2 className="reveal heading-lg text-white">
              Наши клиенты
            </h2>
          </div>

          {/* Testimonials */}
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="reveal bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8"
              >
                <div className="flex items-start gap-5">
                  {/* Avatar */}
                  <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#B59F7E]/30">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-px bg-[#B59F7E]" />
                      <div>
                        <p className="text-white font-medium text-sm">{testimonial.name}</p>
                        <p className="text-white/40 text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
