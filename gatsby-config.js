module.exports = {
  siteMetadata: {
    title: 'Emotion Icons - a Emotion icon library',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/emotion.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Emotion Icons',
        short_name: 'Emotion Icons',
        start_url: '/',
        background_color: '#46C9E5',
        theme_color: '#db7093',
        display: 'minimal-ui',
        icon: 'src/images/emotion.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
