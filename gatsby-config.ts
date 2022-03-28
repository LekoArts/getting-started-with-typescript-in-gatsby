import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Getting Started with TypeScript in Gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [`gatsby-plugin-vanilla-extract`]
};

export default config;
