'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Dictionary } from '@/i18n/get-dictionary';
import type { Locale } from '@/i18n/config';
import { locales, localeNames } from '@/i18n/config';

interface HeaderProps {
  variant?: 'dark' | 'light';
  dict: Dictionary;
  locale: Locale;
}

export default function Header({ variant = 'dark', dict, locale }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const isLight = variant === 'light' || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: dict.nav.about },
    { href: '#services', label: dict.nav.services },
    { href: '#benefits', label: dict.nav.benefits },
    { href: '#location', label: dict.nav.contacts },
  ];

  return (
    <>
      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-[100] bg-[#FAF8F5] transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
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

          {/* Language Switcher in Mobile Menu */}
          <div className="flex gap-4 mt-4">
            {locales.map((loc) => (
              <Link
                key={loc}
                href={`/${loc}`}
                className={`text-elegant transition-colors ${
                  loc === locale ? 'text-[#B59F7E]' : 'text-[#1A1714]/50 hover:text-[#B59F7E]'
                }`}
              >
                {localeNames[loc]}
              </Link>
            ))}
          </div>

          <div className="flex gap-6 mt-8">
            <a
              href="https://www.instagram.com/forme.women"
              target="_blank"
              rel="noopener noreferrer"
              className="text-elegant text-[#B59F7E]"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/77022222566"
              target="_blank"
              rel="noopener noreferrer"
              className="text-elegant text-[#B59F7E]"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-[101] transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
            : variant === 'light' ? 'bg-white/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
        } ${isMobileMenuOpen ? 'bg-transparent shadow-none backdrop-blur-none' : ''}`}
      >
        <div className="px-6 md:px-16 lg:px-24">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={`/${locale}`} className="relative z-10">
              <Image
                src="/images/logo.png"
                alt="FORMÉ"
                width={100}
                height={32}
                className={`h-6 md:h-7 w-auto transition-all duration-500 ${
                  isMobileMenuOpen ? '' : (isLight ? '' : 'brightness-0 invert')
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

            {/* Desktop CTA + Language */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className={`text-elegant transition-all duration-300 hover:text-[#B59F7E] flex items-center gap-1 cursor-pointer ${
                    isLight ? 'text-[#1A1714]/70' : 'text-white/70'
                  }`}
                >
                  {locale.toUpperCase()}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isLangMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white shadow-lg py-2 min-w-[120px]">
                    {locales.map((loc) => (
                      <Link
                        key={loc}
                        href={`/${loc}`}
                        onClick={() => setIsLangMenuOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          loc === locale ? 'text-[#B59F7E]' : 'text-[#1A1714]/70 hover:text-[#B59F7E] hover:bg-[#FAF8F5]'
                        }`}
                      >
                        {localeNames[loc]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="https://app.forme.kz"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-elegant transition-all duration-300 hover:text-[#B59F7E] ${
                  isLight ? 'text-[#1A1714]/70' : 'text-white/70'
                }`}
              >
                {dict.nav.login}
              </a>
              <a
                href="https://wa.me/77022222566"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-5 py-2.5 text-elegant transition-all duration-300 ${
                  isLight
                    ? 'bg-[#B59F7E] text-white hover:bg-[#9A8668]'
                    : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white hover:text-[#1A1714]'
                }`}
              >
                {dict.nav.book}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 cursor-pointer"
            >
              <span className={`w-6 h-px transition-all duration-300 ${
                isMobileMenuOpen
                  ? 'bg-[#1A1714] rotate-45 translate-y-[7px]'
                  : isLight ? 'bg-[#1A1714]' : 'bg-white'
              }`} />
              <span className={`w-6 h-px transition-all duration-300 ${
                isMobileMenuOpen
                  ? 'opacity-0'
                  : isLight ? 'bg-[#1A1714]' : 'bg-white'
              }`} />
              <span className={`w-6 h-px transition-all duration-300 ${
                isMobileMenuOpen
                  ? 'bg-[#1A1714] -rotate-45 -translate-y-[7px]'
                  : isLight ? 'bg-[#1A1714]' : 'bg-white'
              }`} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
