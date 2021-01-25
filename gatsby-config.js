module.exports = {
  siteMetadata: {
    title: `newclassic`,
    lang: `ja`,
    description: ``,
    siteUrl: "https://amis-acat.netlify.app",
    locale: `ja_JP`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-image`,
    `gatsby-transformer-sharp` , `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        path: `${__dirname}/frontmatter`,
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-netlify`
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   option: {
    //     name: `newclassic`,
    //     start_url: `/`,
    //     background_color: '#ffffff',
    //     thema_color: `#710000`,
    //     display: `standalone`,
    //     icon: `static/images/favicon.png`
    //   },
    // },
    // `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [`gatsby-remark-responsive-iframe`],
    //     commonmark: true,
    //     footnotes: true,
    //     pedantic: true,
    //     gfm: true,
    //     plugins: [],
    //   },
    // },
  ],
}