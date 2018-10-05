module.exports = {
  siteMetadata: {
    title: '',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-json`,
    {
     resolve: `gatsby-plugin-google-fonts`,
     options: {
       fonts: [
         `roboto`, // You can update this with any of the fonts you find on google
         `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
       ]
     }
   }
  ],
}
