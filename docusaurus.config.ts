import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'UXO Docs',
  tagline: 'Documentation complète pour vos solutions documentaires',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://corentinlebas45.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/uxodocs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'corentinlebas45', // Usually your GitHub org/user name.
  projectName: 'uxodocs', // Usually your repo name.

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'fr',
  //   locales: ['fr', 'en'],
  //   localeConfigs: {
  //     en: {
  //       label: 'English',
  //       direction: 'ltr',
  //       htmlLang: 'en-US',
  //     },
  //     fr: {
  //       label: 'Français',
  //       direction: 'ltr',
  //       htmlLang: 'fr-FR',
  //     },
  //   },
  // },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'arender',
        path: 'docs/arender',          // current docs for ARender (branch "test")
        routeBasePath: 'arender',      // URL: /arender/*
        sidebarPath: require.resolve('./sidebars.ts'),
        lastVersion: 'current',        // "docs/arender" is the current version
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'fast2',
        path: 'docs/fast2',
        routeBasePath: 'fast2',
        sidebarPath: require.resolve('./sidebars.ts'),
        lastVersion: 'current',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'flower',
        path: 'docs/flower',
        routeBasePath: 'flower',
        sidebarPath: require.resolve('./sidebars.ts'),
        lastVersion: 'current',
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    navbar: {
      title: 'UXO Docs',
      logo: {
        alt: 'UXO Docs Logo',
        src: 'img/favicon-192.png', // adapte si besoin
      },
      items: [
        // Un dropdown de versions par produit (branché sur l'id du plugin)
        { type: 'docsVersionDropdown', docsPluginId: 'arender', position: 'left', label: 'ARender' },
        { type: 'docsVersionDropdown', docsPluginId: 'fast2', position: 'left', label: 'Fast2' },
        { type: 'docsVersionDropdown', docsPluginId: 'flower', position: 'left', label: 'Flower' },

        // Liens éventuels (ex: repo GitHub)
        {
          href: 'https://github.com/YOUR_GH_USERNAME_OR_ORG/YOUR_REPO_NAME',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Produits',
          items: [
            { label: 'ARender', to: '/arender' },
            { label: 'Fast2', to: '/fast2' },
            { label: 'Flower', to: '/flower' },
          ],
        },
        {
          title: 'Communauté',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/YOUR_GH_USERNAME_OR_ORG/YOUR_REPO_NAME',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UXO. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
