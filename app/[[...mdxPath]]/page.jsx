import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props) {
    const { mdxPath } = await props.params
    const { metadata } = await importPage(mdxPath)
    return {
        title: metadata.title || 'Projects By Kevin',
        description: metadata.description || "A website showcasing and demonstrating the thought process behind the projects I've worked on'"
    }
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