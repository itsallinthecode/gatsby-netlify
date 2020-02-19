/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Gatsby-Bootstrap",
    description: "This is the description of our website",
    keywords: "gatsby, gatsbyjs project, gatsby bootstrap",
    image: "/staic/gatsby.jpg",
    url: "https://www.gatsbyjs.org",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `itsallinthecode.com`,
        protocol: `http`,
        hostingWPCOM: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Bootstrap Tutorial`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f8f9fa`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
