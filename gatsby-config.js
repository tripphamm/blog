module.exports = {
  siteMetadata: {
    title: `Ayhota`,
    author: `EJ Hammond`,
    description: `Dev stuff`,
    siteUrl: `https://ayhota.com/`,
    social: {
      twitter: `ejhammond`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
          {
            resolve: 'gatsby-remark-embedded-codesandbox',
            options: {
              directory: `${__dirname}/content/codesandbox`,
              protocol: 'local-codesandbox://',
              getIframe: url =>
                `<iframe src="${url}" width="2" height="1" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>`,
              // Customise CodeSandbox embedding options:
              // https://codesandbox.io/docs/embedding#embed-options
              embedOptions: {
                view: 'split',
                hidenavigation: 1,
              },
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // don't highlight inline code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: true,
            },
          },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-smartypants` },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ayhota`,
        short_name: `Ayhota`,
        start_url: `/`,
        background_color: `#ececec`,
        theme_color: `#385170`,
        display: `minimal-ui`,
        icon: `content/assets/ayhota-logo.png`,
        icon_options: { purpose: `any maskable` },
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
