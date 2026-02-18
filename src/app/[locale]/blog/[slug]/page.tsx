import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getBlogPost, getAllBlogPosts } from '@/lib/blog';
import { getDictionary } from '@/i18n/get-dictionary';
import type { Locale } from '@/i18n/config';
import { locales } from '@/i18n/config';

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return locales.flatMap((locale) =>
    posts.map((post) => ({
      locale,
      slug: post.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: 'Not found' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug, locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const post = getBlogPost(slug);
  const dict = getDictionary(locale);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header variant="light" dict={dict} locale={locale} />
      <main className="pt-32 pb-24 bg-[#FAF8F5] min-h-screen">
        <article className="px-6 md:px-16 lg:px-24">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              href={`/${locale}#blog`}
              className="inline-flex items-center gap-2 text-[#B59F7E] hover:text-[#9A8668] transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              {locale === 'ru' ? 'На главную' : locale === 'kk' ? 'Басты бетке' : 'Back to Home'}
            </Link>

            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs text-white bg-[#B59F7E] px-3 py-1">
                  {post.category}
                </span>
                <span className="text-[#1A1714]/40 text-sm">{post.date}</span>
              </div>
              <h1 className="heading-lg text-[#1A1714] mb-6">
                {post.title}
              </h1>
              <p className="text-[#1A1714]/60 text-lg">
                {post.excerpt}
              </p>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[16/9] overflow-hidden mb-12 bg-[#B59F7E]/10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none prose-headings:text-[#1A1714] prose-headings:font-medium prose-p:text-[#1A1714]/70 prose-strong:text-[#1A1714] prose-a:text-[#B59F7E] prose-ul:text-[#1A1714]/70 prose-ol:text-[#1A1714]/70">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-medium text-[#1A1714] mt-10 mb-4">{paragraph.replace('## ', '')}</h2>;
                }
                if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-xl font-medium text-[#1A1714] mt-8 mb-3">{paragraph.replace('### ', '')}</h3>;
                }
                if (paragraph.startsWith('#### ')) {
                  return <h4 key={index} className="text-lg font-medium text-[#1A1714] mt-6 mb-2">{paragraph.replace('#### ', '')}</h4>;
                }
                if (paragraph.startsWith('- ')) {
                  return <li key={index} className="text-[#1A1714]/70 ml-4">{paragraph.replace('- ', '')}</li>;
                }
                if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ') || paragraph.startsWith('4. ')) {
                  return <li key={index} className="text-[#1A1714]/70 ml-4 list-decimal">{paragraph.replace(/^\d+\. /, '')}</li>;
                }
                if (paragraph.trim() === '') {
                  return null;
                }
                return <p key={index} className="text-[#1A1714]/70 mb-4 leading-relaxed">{paragraph}</p>;
              })}
            </div>

            {/* CTA */}
            <div className="mt-16 p-8 bg-[#1A1714] text-center">
              <h3 className="text-white text-xl font-medium mb-4">
                {locale === 'ru' ? 'Готовы начать тренироваться?' : locale === 'kk' ? 'Жаттығуды бастауға дайынсыз ба?' : 'Ready to start training?'}
              </h3>
              <p className="text-white/60 mb-6">
                {locale === 'ru' ? 'Запишитесь на пробную тренировку в FORMÉ' : locale === 'kk' ? 'FORMÉ-да сынақ жаттығуға жазылыңыз' : 'Book a trial training at FORMÉ'}
              </p>
              <a
                href="https://wa.me/77022222566"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium inline-flex"
              >
                {dict.nav.book}
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
