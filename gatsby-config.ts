import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Olha o que ele fez`,
    siteUrl: `https://625b195c196b7744c9bcecf7--gentle-cucurucho-f2c97b.netlify.app/`
  },
  plugins: [{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "123123123123123123123123"
    }
  }, "gatsby-plugin-sitemap", "gatsby-transformer-remark", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "categories",
      "path": "./src/content/categories"
    },
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "cards",
      "path": "./src/content/cards"
    },
  }, "gatsby-plugin-mdx"]
};

export default config;
