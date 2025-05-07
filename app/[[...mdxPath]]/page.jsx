import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props) {
    const { mdxPath } = await props.params
    const { metadata } = await importPage(mdxPath)
    const title = metadata.title || 'Kevin Samson';
    const ogImage = `/api/og?title=${title}`;
    return {
        metadataBase: new URL('https://projects-by-kevin.vercel.app'),
        title: {
          template: '%s - Kevin\'s Projects',
          default: 'Kevin\'s Projects'
        },
        description: 'A website showcasing and demonstrating the thought process behind the projects I\'ve worked on',
        viewport: 'width=device-width, initial-scale=1.0',
        openGraph: {
          title: {
            template: '%s - Kevin\'s Projects',
            default: 'Kevin\'s Projects'
          },
          description: 'A website showcasing and demonstrating the thought process behind the projects I\'ve worked on',
          url: 'https://projects-by-kevin.vercel.app/',
          images: [{
            url: ogImage,
            width: 1200,
            height: 630,
            alt: 'Kevin\'s Projects'
          }]
        },
        twitter: {
          card: 'summary_large_image',
          title: {
            template: '%s - Kevin\'s Projects',
            default: 'Kevin\'s Projects'
          },
          description: 'A website showcasing and demonstrating the thought process behind the projects I\'ve worked on',
          site: 'projects-by-kevin.vercel.app',
          images: [ogImage]
        }
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