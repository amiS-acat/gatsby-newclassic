/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:`newclassic`,
    lang:`ja`,
    description:`新しいクラシックの聞き方を提供するサイト`,
    // siteUrl:"",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve:`gatsby-plugin-manifest`,
      option:{
        name:`newclassic`,
        start_url:`/`,
        background_color:'#ffffff',
        display:`standalone`,
        icon:`static/images/favicon.png`
      },
    },
    `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `backgrounds`,
    //     path: `${__dirname}/src/sliders`, // wherever background images are stored
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `pages`,
    //     path: `${__dirname}/src/pages/`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/src/data/`,
    //     ignore: [`**/\.*`], // ignore files starting with a dot
    //   },
    // },
  ],
}
