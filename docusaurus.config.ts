import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'UXO Docs',
  tagline: 'Documentation produits',
  favicon: 'img/favicon.ico',

  // URL de base pour ton déploiement GitHub Pages
  url: 'https://corentinlebas45.github.io',
  baseUrl: '/uxodocs/',
  organizationName: 'corentinlebas45',
  projectName: 'uxodocs',
  deploymentBranch: 'gh-pages',

  // Gestion des liens cassés
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // === Plugins de documentation pour chaque produit ===
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'fast2',
        path: 'docs/fast2',
        routeBasePath: 'docs/fast2',
        sidebarPath: require.resolve('./sidebars_fast2.ts'),
        lastVersion: 'current',
        versions: {
          current: { label: 'current' },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'arender',
        path: 'docs/arender',
        routeBasePath: 'docs/arender',
        sidebarPath: require.resolve('./sidebars_arender.ts'),
        lastVersion: 'current',
        versions: {
          current: { label: 'current' },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'flowerdocs',
        path: 'docs/flowerdocs',
        routeBasePath: 'docs/flowerdocs',
        sidebarPath: require.resolve('./sidebars_flowerdocs.ts'),
        lastVersion: 'current',
        versions: {
          current: { label: 'current' },
        },
      },
    ],
  ],

  // === Thème et configuration visuelle ===
  themeConfig: {
    navbar: {
      title: 'UXO Docs',
      logo: { alt: 'UXO', src: 'img/logo.svg' },
      items: [
        // Dropdowns de version pour chaque produit
        { type: 'docsVersionDropdown', docsPluginId: 'fast2', position: 'left', label: 'Fast2' },
        { type: 'docsVersionDropdown', docsPluginId: 'arender', position: 'left', label: 'Arender' },
        { type: 'docsVersionDropdown', docsPluginId: 'flowerdocs', position: 'left', label: 'Flowerdocs' },

        // Liens directs (facultatif)
        { type: 'doc', docsPluginId: 'fast2', docId: 'index', label: 'Docs Fast2' },
        { type: 'doc', docsPluginId: 'arender', docId: 'index', label: 'Docs Arender' },
        { type: 'doc', docsPluginId: 'flowerdocs', docId: 'index', label: 'Docs Flowerdocs' },

        // Lien GitHub
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