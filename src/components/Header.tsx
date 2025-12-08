'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  variant?: 'dark' | 'light';
}

export default function Header({ variant = 'dark' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // На светлых страницах сразу показываем тёмный текст
  const isLight = variant === 'light' || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'О клубе' },
    { href: '#services', label: 'Услуги' },
    { href: '#benefits', label: 'Преимущества' },
    { href: '#testimonials', label: 'Отзывы' },
    { href: '#location', label: 'Контакты' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
          : variant === 'light' ? 'bg-white/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="px-6 md:px-16 lg:px-24">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src="/images/logo.png"
              alt="FORME"
              width={100}
              height={32}
              className={`h-6 md:h-7 w-auto transition-all duration-500 ${
                isLight ? '' : 'brightness-0 invert'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-elegant transition-all duration-300 hover:text-[#B59F7E] ${
                  isLight ? 'text-[#1A1714]/70' : 'text-white/70'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="https://app.forme.kz"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-elegant transition-all duration-300 hover:text-[#B59F7E] ${
                isLight ? 'text-[#1A1714]/70' : 'text-white/70'
              }`}
            >
              Войти
            </a>
            <a
              href="https://wa.me/77002502222"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2.5 text-elegant transition-all duration-300 ${
                isLight
                  ? 'bg-[#B59F7E] text-white hover:bg-[#9A8668]'
                  : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white hover:text-[#1A1714]'
              }`}
            >
              Записаться
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          >
            <span className={`w-6 h-px transition-all duration-300 ${
              isMobileMenuOpen
                ? 'bg-[#1A1714] rotate-45 translate-y-1'
                : isLight ? 'bg-[#1A1714]' : 'bg-white'
            }`} />
            <span className={`w-6 h-px transition-all duration-300 ${
              isMobileMenuOpen
                ? 'opacity-0'
                : isLight ? 'bg-[#1A1714]' : 'bg-white'
            }`} />
            <span className={`w-6 h-px transition-all duration-300 ${
              isMobileMenuOpen
                ? 'bg-[#1A1714] -rotate-45 -translate-y-1.5'
                : isLight ? 'bg-[#1A1714]' : 'bg-white'
            }`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-[#FAF8F5] transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <nav className="h-full flex flex-col items-center justify-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="heading-md text-[#1A1714] hover:text-[#B59F7E] transition-colors"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-6 mt-8">
              <a
                href="https://instagram.com/forme.kz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-elegant text-[#B59F7E]"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/77002502222"
                target="_blank"
                rel="noopener noreferrer"
                className="text-elegant text-[#B59F7E]"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
