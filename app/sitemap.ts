import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const BASE_URL = 'https://projects-by-kevin.vercel.app'

function getMdxFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return getMdxFiles(full)
    if (entry.isFile() && entry.name.endsWith('.mdx')) return [full]
    return []
  })
}

export default function sitemap(): MetadataRoute.Sitemap {
  const contentDir = path.join(process.cwd(), 'content')
  const files = getMdxFiles(contentDir)

  const mdxRoutes = files
    .filter((f) => !f.endsWith('index.mdx'))
    .map((f) => {
      const relative = f
        .replace(contentDir + path.sep, '')
        .replace(/\.mdx$/, '')
        .replace(/\\/g, '/')
      return {
        url: `${BASE_URL}/${relative}`,
        lastModified: fs.statSync(f).mtime,
        changeFrequency: 'yearly' as const,
        priority: relative.startsWith('projects/') ? 0.8 : 0.9,
      }
    })

  const projectsIndex = path.join(contentDir, 'projects', 'index.mdx')

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: fs.statSync(projectsIndex).mtime,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...mdxRoutes,
  ]
}
