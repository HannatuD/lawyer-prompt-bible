// docusaurus.config.js
// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  // ——————————————————  basic site metadata  ——————————————————
  title: 'UK Legal Prompt Bible',
  url: 'https://HannatuD.github.io',
  baseUrl: '/lawyer-prompt-bible/',
  
  trailingSlash: false,
  
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'HannatuD',
  projectName: 'lawyer-prompt-bible',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // ————————————————  preset: docs only, no blog  ————————————————
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs/prompts',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',  // ✅ Changed from require.resolve()
          showLastUpdateTime: true,
        },
        blog: false,
      },
    ],
  ],

  // ————————————————  theme (navbar & footer) ————————————————
  themeConfig: {
    navbar: {
      title: 'UK Legal Prompt Bible',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} HannatuD`,
    },
  },
};

export default config;
