import { MetadataRoute } from 'next'
import glob from 'fast-glob'

const BASE_URL = 'https://projects-by-kevin.vercel.app'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const files = await glob('content/**/*.mdx')

  const mdxRoutes = files
    .filter((f) => !f.includes('index.mdx'))
    .map((f) => {
      const path = f
        .replace(/^content\//, '')
        .replace(/\.mdx$/, '')
      return {
        url: `${BASE_URL}/${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: path.startsWith('projects/') ? 0.8 : 0.9,
      }
    })

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...mdxRoutes,
  ]
}
