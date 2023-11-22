// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'So you want to buy a cask?',
  tagline: 'Buying scotch whisky by the cask',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://elliottback.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/SoYouWantToBuyACask/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'elliottback', // Usually your GitHub org/user name.
  projectName: 'elliottback/SoYouWantToBuyACask', // Usually your repo name.

  // GitHub Pages adds a trailing slash to Docusaurus URLs by default. It is recommended to set a trailingSlash config (true or false, not undefined).
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Your project's social card
      image: 'img/social-card.jpg',
      navbar: {
        title: 'So You Want To Buy A Cask?',
        logo: {
          alt: 'So You Want To Buy A Cask',
          src: 'img/logo.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'sidebar',
            position: 'left',
            label: 'Home',
          },
            {
                to: 'Distilleries/distilleries/',
                position: 'left',
                label: 'Established Distilleries'
            },
            {
                to: 'Distilleries/startups/',
                position: 'left',
                label: 'New Distilleries'
            },
      ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;