import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { Analytics } from "@vercel/analytics/react";

const YEAR = new Date().getFullYear();
const config: DocsThemeConfig = {
  logo: <span>Kevin Samson</span>,
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s - Kevin's Projects",
      };
    }
  },
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    const socialCard =
      route === "/" || !title
        ? "https://projects-by-kevin.vercel.app/api/og"
        : `https://projects-by-kevin.vercel.app/api/og?title=${title}`;

    return (
      <>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta httpEquiv="Content-Language" content="en"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:image" content={socialCard} />
        <meta name="og:image" content={socialCard} />
        <meta
          name="twitter:site:domain"
          content="projects-by-kevin.vercel.app"
        ></meta>
        <meta
          name="twitter:url"
          content="https://projects-by-kevin.vercel.app/"
        ></meta>
        <meta
          name="og:title"
          content={title ? title + " - Kevin's Projects" : "Kevin's Projects"}
        />
        <meta name="title" content="Projects By Kevin"></meta>
        <meta
          name="description"
          content="A website showcasing and demonstrating the thought process behind the projects I've worked on"
        ></meta>
        <meta
          name="og:description"
          content="A website showcasing and demonstrating the thought process behind the projects I've worked on"
        ></meta>
      </>
    );
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give me feedback →",
    labels: "feedback",
  },
  search: {
    placeholder: "Search",
  },
  footer: {
    text: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Analytics />
        <div>
          <time>{YEAR}</time> © Kevin Samson.
        </div>
        <div
          style={{ display: "flex", gap: "10px", textDecoration: "underline" }}
        >
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
      </div>
    ),
  },
  sidebar: {
    toggleButton: true,
  },
  project: {
    link: "https://github.com/kevin-samson",
  },
  docsRepositoryBase:
    "https://github.com/kevin-samson/my-project-list/tree/main",
};

export default config;
