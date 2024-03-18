import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const YEAR = new Date().getFullYear();
const config: DocsThemeConfig = {
  logo: <span>Kevin Samson</span>,
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
      <span>
        {YEAR} ©{"Kevin Samson "}
      </span>
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
