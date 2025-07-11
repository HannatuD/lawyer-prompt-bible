import type {Config} from '@docusaurus/types';

const config: Config = {
  // ——————————————————  basic site metadata  ——————————————————
  title: 'UK Legal Prompt Bible',
  url: 'https://HannatuD.github.io',        // ← change to custom domain later
  baseUrl: '/lawyer-prompt-bible/',         // ← repo name, keep leading & trailing /

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'HannatuD',             // GitHub org/user
  projectName: 'lawyer-prompt-bible',       // repo name

  i18n: {                                   // one-language site
    defaultLocale: 'en',
    locales: ['en'],
  },

  // ————————————————  preset: docs only, no blog  ————————————————
  presets: [
    [
      'classic',
      ({
        docs: {
          path: 'docs/prompts',              // ← points to your prompt library
          routeBasePath: '/',                // serve at root URL
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
        },
        blog: false,                         // disable blog
      }),
    ],
  ],

  // ————————————————  theme (navbar & footer) ————————————————
  themeConfig: {
    navbar: {
      title: 'UK Legal Prompt Bible',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',                 // optional—add later
      },
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} HannatuD`,
    },
  },
};

export default config;
