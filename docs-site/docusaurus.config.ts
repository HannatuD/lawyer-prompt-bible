

// docusaurus.config.js
// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UK Legal Prompt Bible',
  url: 'https://HannatuD.github.io',
  baseUrl: '/lawyer-prompt-bible/',

  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'HannatuD',
  projectName: 'lawyer-prompt-bible',

  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs/prompts',
          routeBasePath: '/',               // docs served at site root
          sidebarPath: './sidebars.js',     // sidebar autogeneration file
          showLastUpdateTime: true,
        },
        blog: false,
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'UK Legal Prompt Bible',
      logo: { alt: 'Logo', src: 'img/logo.svg' },   // optional, add file later
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} HannatuD`,
    },
  },
};

export default config;
