import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'UXO Docs',
  tagline: 'Documentation produits',
  favicon: 'img/favicon.ico',

  url: 'https://corentinlebas45.github.io',
  baseUrl: '/uxodocs/',
  organizationName: 'corentinlebas45',
  projectName: 'uxodocs',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  onBrokenMarkdownLinks: 'warn',

  // i18n: {
  //   defaultLocale: 'fr',
  //   locales: ['fr'],
  // },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          editCurrentVersion: false,
        } satisfies Preset.Options['docs'],
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        } satisfies Preset.Options['theme'],
      } satisfies Preset.Options,
    ],
  ],


  themeConfig: {
    navbar: {
      title: 'UXO Docs',
      logo: { alt: 'UXO', src: 'img/logo.svg' },
      items: [
        { type: 'doc', docId: 'intro', label: 'Introduction' },
        { type: 'doc', docId: 'fast2/index', label: 'Fast2' },
        { type: 'doc', docId: 'arender/index', label: 'Arender' },
        { type: 'doc', docId: 'flowerdocs/index', label: 'Flowerdocs' },
        { href: 'https://github.com/corentinlebas45/uxodocs', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} UXO Docs`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
