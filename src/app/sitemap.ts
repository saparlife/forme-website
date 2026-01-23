import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { getAllBlogPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://forme.kz';
  const blogPosts = getAllBlogPosts();

  // Main pages for each locale with hreflang alternates
  const mainPages = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1,
    alternates: {
      languages: {
        ru: `${baseUrl}/ru`,
        kk: `${baseUrl}/kk`,
        en: `${baseUrl}/en`,
      },
    },
  }));

  // Blog pages for each locale
  const blogPages = locales.flatMap((locale) =>
    blogPosts.map((post) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          ru: `${baseUrl}/ru/blog/${post.slug}`,
          kk: `${baseUrl}/kk/blog/${post.slug}`,
          en: `${baseUrl}/en/blog/${post.slug}`,
        },
      },
    }))
  );

  return [...mainPages, ...blogPages];
}
