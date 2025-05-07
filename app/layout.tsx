import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import { Analytics } from "@vercel/analytics/next";
// import { useThemeConfig } from 'nextra-theme-docs'

/* export function generateMetadata({ params, searchParams }, parent) {
  const title = searchParams?.title;
  const ogImage = title ? `/api/og?title=${title}` : '/api/og?title=Kevin Samson';

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
} */

const navbar = (
  <Navbar
    logo={<span>Kevin Samson</span>}
    projectLink="https://github.com/kevin-samson"
  />
);

const footer = (
  <Footer
    style={{
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    }}
  >
    <div>
      <time>{new Date().getFullYear()}</time> © Kevin Samson.
    </div>
    <div style={{ display: "flex", gap: "10px", textDecoration: "underline" }}>
      <a href="https://twitter.com/Kevin_Samson_" target="_blank">
        Twitter
      </a>
      <a href="https://www.linkedin.com/in/kevin-samson--/" target="_blank">
        Linkedin
      </a>
      <a href="https://github.com/kevin-samson" target="_blank">
        GitHub
      </a>
      <a href="/kevin-samson-cv.pdf" target="_blank">
        CV
      </a>
    </div>
  </Footer>
);
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        <link rel="shortcut icon" href="/images/general/icon.svg" />
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          feedback={{ content: "Question? Give me feedback" }}
          navbar={navbar}
          search={<Search placeholder="Search" />}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/kevin-samson/my-project-list/tree/main"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
          <Analytics />
        </Layout>
      </body>
    </html>
  );
}
