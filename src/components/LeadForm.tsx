'use client';

import { useState, useEffect, useRef } from 'react';
import type { Dictionary } from '@/i18n/get-dictionary';

interface LeadFormProps {
  dict: Dictionary;
  variant: 'tour' | 'start' | 'trial';
}

export default function LeadForm({ dict, variant }: LeadFormProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, index) => {
              setTimeout(() => el.classList.add('visible'), index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const variantDict = dict.cta[variant];

  function formatPhone(value: string): string {
    const digits = value.replace(/\D/g, '');
    // Normalize: treat 8 or 7 at start as country code
    const normalized = digits.startsWith('8') ? '7' + digits.slice(1) : digits.startsWith('7') ? digits : '7' + digits;
    const d = normalized;
    if (d.length <= 1) return '+7';
    if (d.length <= 4) return `+7 (${d.slice(1)}`;
    if (d.length <= 7) return `+7 (${d.slice(1, 4)}) ${d.slice(4)}`;
    if (d.length <= 9) return `+7 (${d.slice(1, 4)}) ${d.slice(4, 7)}-${d.slice(7)}`;
    return `+7 (${d.slice(1, 4)}) ${d.slice(4, 7)}-${d.slice(7, 9)}-${d.slice(9, 11)}`;
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value;
    if (raw === '' || raw === '+') {
      setPhone('');
      return;
    }
    const digits = raw.replace(/\D/g, '');
    if (digits.length > 11) return;
    setPhone(formatPhone(raw));
  }

  function handlePhoneFocus() {
    if (!phone) setPhone('+7');
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setStatus('sending');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          source: variantDict.title,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setName('');
        setPhone('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-[#1A1714] overflow-hidden">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B59F7E]/30 to-transparent" />

      <div className="relative z-10 px-6 md:px-16 lg:px-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="reveal heading-md text-white mb-4">
            {variantDict.title}
          </h2>
          <p className="reveal text-white/50 mb-10 text-lg">
            {variantDict.subtitle}
          </p>

          {status === 'success' ? (
            <div className="reveal visible bg-[#B59F7E]/10 border border-[#B59F7E]/30 p-8">
              <svg className="w-12 h-12 text-[#B59F7E] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-white text-lg">{dict.cta.form.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="reveal space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={dict.cta.form.name}
                  required
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#B59F7E] focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                  onFocus={handlePhoneFocus}
                  placeholder="+7 (___) ___-__-__"
                  required
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#B59F7E] focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-premium w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none"
              >
                {status === 'sending' ? dict.cta.form.sending : variantDict.button}
              </button>
              {status === 'error' && (
                <p className="text-red-400 text-sm">{dict.cta.form.error}</p>
              )}
            </form>
          )}
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B59F7E]/30 to-transparent" />
    </section>
  );
}
