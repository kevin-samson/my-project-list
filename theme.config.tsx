import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const YEAR = new Date().getFullYear();
const config: DocsThemeConfig = {
  logo: <span>Kevin Samson</span>,
  head: (
    <>
      <meta property="og:title" content="Kevin's Project List" />
      <meta
        property="og:description"
        content="A website that shows all the projects that I have built and also some info about me :)"
      />
      <meta
        property="og:image"
        content="https://kevin-samson.github.io/og-image.png"
      />
      <meta property="og:url" content="https://kevin-samson.github.io" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Kevin_Samson_" />
      <meta name="twitter:creator" content="@Kevin_Samson_" />
      <meta name="twitter:title" content="Kevin's Project List" />
      <meta
        name="twitter:description"
        content="A website that shows all the projects that I have built and also some info about me :)"
      />
    </>
  ),
  editLink: {
    component: () => null,
  },
  feedback: {
    content: () => null,
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
};

export default config;
