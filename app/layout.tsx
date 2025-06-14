import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import { Analytics } from "@vercel/analytics/next";

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kevin Samson",
              url: "https://projects-by-kevin.vercel.app",
              sameAs: [
                "https://github.com/kevin-samson",
                "https://www.linkedin.com/in/kevin-samson--/",
              ],
              jobTitle: "Software Developer",
            }),
          }}
        />
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
