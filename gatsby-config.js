module.exports = {
  siteMetadata: {
    title: `BurgBits`,
    description: `Web Developer, Designer, and Musician`,
    author: `Brian Hamburg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["JetBrainsMono", "Inter"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#e30613`,
        theme_color: `#e30613`,
        display: `minimal-ui`,
        icon: `src/images/burgbits-castle-w-bg.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-google-spreadsheets',
      options: {
        spreadsheetId: '1i--rVptrsSo5GxyNE1o4PW00GOYkOQgtgpgLhw4bXiA',
        apiKey: 'AIzaSyBE8sdV7oX8caUecILyrnsnX9Nptt2oKuY'
      }
    },
    //docs.google.com/spreadsheets/d/1kpEtomGI_xBJ9q-0I_2ym6z5vO_lKpb8Cp25mHf7L1I/edit?usp=sharing
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
