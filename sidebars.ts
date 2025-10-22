import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Primary sidebar (point to Fast2 start)
  mainSidebar: [
    'fast2/index',
  ],

  // Fast2 v2025 documentation sidebar
  fast2v2025Sidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'fast2/getting-started/index',
        'fast2/getting-started/installation',
        'fast2/getting-started/authentication',
        'fast2/getting-started/create-workflow',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      collapsed: true,
      items: [
        'fast2/components/index',
        'fast2/components/broker',
        'fast2/components/worker',
        'fast2/components/database',
        'fast2/components/dashboards',
      ],
    },
    {
      type: 'category',
      label: 'Catalog',
      collapsed: true,
      items: [
        'fast2/catalog/index',
        'fast2/catalog/source',
        'fast2/catalog/contentsource',
        'fast2/catalog/loader',
        'fast2/catalog/transformer',
        'fast2/catalog/converter',
        'fast2/catalog/tool',
        'fast2/catalog/helper',
        'fast2/catalog/credentials',
        'fast2/catalog/uploadjar',
      ],
    },
    {
      type: 'category',
      label: 'Cookbooks',
      collapsed: true,
      items: [
        'fast2/cookbooks/index',
        'fast2/cookbooks/document_basics',
        'fast2/cookbooks/content_basics',
        'fast2/cookbooks/dataset_basics',
        'fast2/cookbooks/folders_basics',
        'fast2/cookbooks/punnet_basics',
        'fast2/cookbooks/data_from_filename',
        'fast2/cookbooks/from-zip-to-punnet',
        'fast2/cookbooks/content-metadata-from-s3',
        'fast2/cookbooks/upload-content-and-metadata-in-s3',
        'fast2/cookbooks/jdbc-for-sql',
        'fast2/cookbooks/csvsource_further',
        'fast2/cookbooks/js-sort-documents',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      collapsed: true,
      items: [
        'fast2/advanced/index',
        'fast2/advanced/patterns',
        'fast2/advanced/optimization',
        'fast2/advanced/javascript',
        'fast2/advanced/drools',
        'fast2/advanced/scheduler',
        'fast2/advanced/ui-as-https',
        'fast2/advanced/shared-objects',
        'fast2/advanced/custom-module',
      ],
    },
    {
      type: 'category',
      label: 'API',
      collapsed: true,
      items: [
        'fast2/API/index',
      ],
    },
  ],
  // Fast2 v2x documentation sidebar
  fast2v2xSidebar: [
    'fast2/index',
  ],

};

export default sidebars;
