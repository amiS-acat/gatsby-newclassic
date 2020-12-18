module.exports = {
  siteMetadata: {
    title: `newclassic`,
    lang: `ja`,
    description: ``,
    // siteUrl: "https://amis-acat-newclassic.netlify.app",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-image`,
    `gatsby-transformer-sharp` , `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name:`images`,
        path:`${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-buzzsprout',
      options: {
        // You will need to generate an access token and get the podcast ID from your account
        // https://github.com/Buzzsprout/buzzsprout-api#authentication
        token: '1234567890',
        podcastId: '123456',
      },
    },
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