module.exports = {
  siteMetadata: {
    title: `newclassic`,
    lang: `ja`,
    description: `澤井安海のポートフォリオサイトです`,
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
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
  ],
}