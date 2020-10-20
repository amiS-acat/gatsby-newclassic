/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `newclassic`,
    lang: `ja`,
    description: `新しいクラシックの聞き方を提供するサイト`,
    siteUrl: "https://amis-acat-newclassic.netlify.app",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      option: {
        name: `newclassic`,
        start_url: `/`,
        background_color: '#ffffff',
        thema_color: `#710000`,
        display: `standalone`,
        icon: `static/images/favicon.png`
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins:[`gatsby-remark-responsive-iframe`],
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            },
          },
        ],
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [],
      },
    },
    `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`images`,
        path:`${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
  ],
}



//CONTENTFUL_SPACE_ID=ef6v7qy1egqz CONTENTFUL_ACCESS_TOKEN=LnNGEHhC6YxqcQ8NHiHFJlApcpRaiCzRoyGr-3QhKGo CONTENTFUL_HOST=cdn.contentful.com gatsby develop -H 0.0.0.0