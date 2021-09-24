/**
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */



module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-postcss',
    `gatsby-plugin-fontawesome-css`,
    "gatsby-plugin-react-helmet",
    // `gatsby-plugin-recaptcha`,
    {
    resolve: 'gatsby-source-storyblok',
    options: {
      accessToken: 'RCOV1nCjMKbDcFGeymr2oQtt',
      homeSlug: 'home',
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
    }
  },
  {
    resolve: `gatsby-plugin-recaptcha`,
    options: {
       async: false,
       defer: false,
       args: `?onload=onloadCallback&render=explicit`,
    },
 },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Karla`,
        // `karla`,
        // `Roboto:300,400,400i,700` // you can also specify font weights and styles
      ],
      display: 'swap'
    }
  },
  {
    resolve: `gatsby-plugin-i18n`,
    options: {
      langKeyDefault: 'en',
      langKeyForNull: 'en',
      prefixDefault: false,
      useLangKeyLayout: false,
    },
  },
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        // as your choice
      },
  },
],
}
