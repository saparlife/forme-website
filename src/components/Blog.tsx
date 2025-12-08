'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    slug: 'fitness-i-materinstvo',
    title: 'Как совмещать фитнес и материнство: опыт наших клиенток',
    excerpt: 'Многие мамы сталкиваются с вопросом: как найти время на себя, когда дома маленький ребёнок? Наши клиентки делятся своим опытом.',
    image: '/images/blog-materinstvo.jpg',
    date: '10 ноября, 2025',
    category: 'Fitness',
  },
  {
    id: 2,
    slug: 'silovye-trenirovki-dlya-zhenshhin',
    title: 'Почему женщинам важно тренировать силу, а не только кардио',
    excerpt: 'Силовые тренировки — это не про «накачаться». Это про здоровье костей, ускорение метаболизма и красивый рельеф тела.',
    image: '/images/blog-kardio.webp',
    date: '10 ноября, 2025',
    category: 'Fitness',
  },
  {
    id: 3,
    slug: 'kak-nachat-trenirovatsya-posle-pereryva',
    title: 'Как начать тренироваться после долгого перерыва: советы для женщин',
    excerpt: 'Вернуться в спорт после паузы бывает сложно. Рассказываем, как это сделать правильно и без травм.',
    image: '/images/blog-pereryv.jpg',
    date: '10 ноября, 2025',
    category: 'Fitness',
  },
];

export default function Blog() {
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
    <section id="blog" ref={sectionRef} className="relative py-24 md:py-32 bg-[#FAF8F5] overflow-hidden">
      <div className="px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <div className="reveal flex items-center gap-4 mb-6">
              <div className="line-accent" />
              <span className="text-elegant text-[#B59F7E]">Блог</span>
            </div>
            <h2 className="reveal heading-lg text-[#1A1714]">
              Наш <span className="gradient-text">блог</span>
            </h2>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="reveal group"
              >
                <article className="bg-white border border-[#1A1714]/5 hover:border-[#B59F7E]/30 transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#B59F7E]/10">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-[#B59F7E] text-xs mb-3">{post.date}</p>
                    <h3 className="text-[#1A1714] font-medium mb-3 group-hover:text-[#B59F7E] transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-[#1A1714]/50 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 pt-4 border-t border-[#1A1714]/5">
                      <span className="text-[#B59F7E] text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                        Читать
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
