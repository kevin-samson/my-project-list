import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'

import glob from 'fast-glob'

export async function generateStaticParams() {
  const files = await glob('content/**/*.mdx')

  return files
    .filter((f) => !f.includes('icon') && !f.includes('.png') && !f.includes('.svg'))
    .map((f) => {
      const path = f
        .replace(/^content\//, '')
        .replace(/\.mdx$/, '')
        .split('/')
      return { mdxPath: path }
    })
}

export const viewport = {
  width: 'device-width',
  initialScale: 1.0
}

export async function generateMetadata(props) {
    const { mdxPath } = await props.params
    const { metadata } = await importPage(mdxPath)
    const title = metadata.title || 'Projects by Kevin Samson';
    const description = metadata.description || 'A website showcasing and demonstrating the thought process behind the projects I\'ve worked on';
    const ogImage = `/api/og?title=${encodeURIComponent(title)}`;
    return {
        metadataBase: new URL('https://projects-by-kevin.vercel.app'),
        title,
        description,
        openGraph: {
          title,
          description,
          url: `https://projects-by-kevin.vercel.app/${mdxPath?.join('/') || ''}`,
          images: [{
            url: ogImage,
            width: 1200,
            height: 630,
            alt: title
          }]
        },
        twitter: {
          card: 'summary_large_image',
          title,
          description,
          site: '@Kevin_Samson_',
          images: [ogImage]
        },
        robots: {
          index: true,
          follow: true
        },
        alternates: {
          canonical: `https://projects-by-kevin.vercel.app/${mdxPath?.join('/') || ''}`
        },
        keywords: ['Kevin Samson', 'portfolio', 'software projects', 'developer', 'engineering showcase']
      };
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props) {
    const params = await props.params
    const result = await importPage(params.mdxPath)
    const { default: MDXContent, toc, metadata } = result
    return (
        <Wrapper toc={toc} metadata={metadata}>
            <MDXContent {...props} params={params} />
        </Wrapper>
    )
}