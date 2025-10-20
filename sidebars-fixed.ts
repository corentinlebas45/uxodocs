import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Configuration des sidebars avec IDs de documents corrects
 */
const sidebars: SidebarsConfig = {
    // Documentation principale
    mainSidebar: [
        'index',
        'intro',
    ],

    // ARender documentation  
    arenderSidebar: [
        'arender/index',
        {
            type: 'category',
            label: 'APIs',
            collapsed: false,
            items: [
                'arender/apis/index',
            ],
        },
        {
            type: 'category',
            label: 'Configuration',
            collapsed: false,
            items: [
                'arender/configuration/index',
            ],
        },
        {
            type: 'category',
            label: 'Installation',
            collapsed: false,
            items: [
                'arender/installation/index',
            ],
        },
        {
            type: 'category',
            label: 'Deployment',
            collapsed: true,
            items: [
                'arender/deployment/index',
            ],
        },
        {
            type: 'category',
            label: 'Integration',
            collapsed: true,
            items: [
                'arender/integration/index',
            ],
        },
    ],

    // Fast2 documentation
    fast2Sidebar: [
        {
            type: 'category',
            label: 'Getting Started',
            collapsed: false,
            items: [
                'fast2/getting-started/index',
                'fast2/getting-started/installation',
                'fast2/getting-started/overall-concepts',
                'fast2/getting-started/authentication',
                'fast2/getting-started/create-workflow',
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
        {
            type: 'category',
            label: 'Components',
            collapsed: true,
            items: [
                'fast2/components/index',
                'fast2/components/broker',
                'fast2/components/database',
                'fast2/components/worker',
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
                'fast2/catalog/converter',
                'fast2/catalog/tool',
                'fast2/catalog/transformer',
                'fast2/catalog/credentials',
                'fast2/catalog/helper',
                'fast2/catalog/uploadjar',
            ],
        },
        {
            type: 'category',
            label: 'Cookbooks',
            collapsed: true,
            items: [
                'fast2/cookbooks/index',
                'fast2/cookbooks/content_basics',
                'fast2/cookbooks/document_basics',
                'fast2/cookbooks/dataset_basics',
                'fast2/cookbooks/punnet_basics',
                'fast2/cookbooks/folders_basics',
                'fast2/cookbooks/data_from_filename',
                'fast2/cookbooks/content-metadata-from-s3',
                'fast2/cookbooks/upload-content-and-metadata-in-s3',
                'fast2/cookbooks/from-zip-to-punnet',
                'fast2/cookbooks/js-sort-documents',
                'fast2/cookbooks/jdbc-for-sql',
                'fast2/cookbooks/csvsource_further',
            ],
        },
        {
            type: 'category',
            label: 'Advanced',
            collapsed: true,
            items: [
                'fast2/advanced/index',
                'fast2/advanced/custom-module',
                'fast2/advanced/drools',
                'fast2/advanced/javascript',
                'fast2/advanced/optimization',
                'fast2/advanced/patterns',
                'fast2/advanced/scheduler',
                'fast2/advanced/shared-objects',
                'fast2/advanced/ui-as-https',
            ],
        },
    ],

    // Flower documentation
    flowerSidebar: [
        'flower/index',
        {
            type: 'category',
            label: 'APIs',
            collapsed: false,
            items: [
                'flower/apis/index',
                'flower/apis/jsapi',
            ],
        },
        {
            type: 'category',
            label: 'Concepts',
            collapsed: false,
            items: [
                'flower/concepts/index',
                'flower/concepts/getting-started',
                'flower/concepts/cas-application',
                'flower/concepts/scope',
                'flower/concepts/operation',
                'flower/concepts/historique',
                'flower/concepts/reservations',
                {
                    type: 'category',
                    label: 'Classes',
                    collapsed: true,
                    items: [
                        'flower/concepts/classes/index',
                        'flower/concepts/classes/overview',
                        'flower/concepts/classes/dossier',
                        'flower/concepts/classes/dossiers-virtuels',
                        'flower/concepts/classes/taches',
                        'flower/concepts/classes/references-tag',
                    ],
                },
                {
                    type: 'category',
                    label: 'Components',
                    collapsed: true,
                    items: [
                        'flower/concepts/components/overview',
                        'flower/concepts/components/documents',
                        'flower/concepts/components/dossiers',
                        'flower/concepts/components/dossiers-virtuels',
                        'flower/concepts/components/taches',
                    ],
                },
                {
                    type: 'category',
                    label: 'Tags',
                    collapsed: true,
                    items: [
                        'flower/concepts/tags/index',
                        'flower/concepts/tags/overview',
                        'flower/concepts/tags/textuel',
                        'flower/concepts/tags/numerique',
                        'flower/concepts/tags/date',
                        'flower/concepts/tags/liste',
                        'flower/concepts/tags/categories',
                        'flower/concepts/tags/conditionnel',
                    ],
                },
                {
                    type: 'category',
                    label: 'Sécurité',
                    collapsed: true,
                    items: [
                        'flower/concepts/securite/index',
                        'flower/concepts/securite/authentification',
                        'flower/concepts/securite/autorisation',
                        'flower/concepts/securite/identites',
                    ],
                },
                {
                    type: 'category',
                    label: 'Recherche',
                    collapsed: true,
                    items: [
                        'flower/concepts/search/recherches',
                        'flower/concepts/search/recherches-sauvegardees',
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'Configuration',
            collapsed: true,
            items: [
                'flower/configuration/index',
            ],
        },
        {
            type: 'category',
            label: 'Connecteurs',
            collapsed: true,
            items: [
                'flower/connecteurs/index',
            ],
        },
        {
            type: 'category',
            label: 'Installation',
            collapsed: true,
            items: [
                'flower/installation/index',
                'flower/installation/avant-de-commencer',
                'flower/installation/prerequisites',
                'flower/installation/install-process',
                'flower/installation/docker',
                'flower/installation/lancement',
                {
                    type: 'category',
                    label: 'Configuration',
                    collapsed: true,
                    items: [
                        'flower/installation/configuration/configuration-core',
                        'flower/installation/configuration/configuration-gui',
                        'flower/installation/configuration/configuration-arender-hmi',
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'Tutoriels',
            collapsed: true,
            items: [
                'flower/tutoriels/index',
            ],
        },
    ],

    // Uxopian AI documentation
    'uxopian-ai': [
        'uxopian-ai/index',
        {
            type: 'category',
            label: 'Getting Started',
            collapsed: false,
            items: [
                'uxopian-ai/getting-started/installation-guide',
            ],
        },
        {
            type: 'category',
            label: 'Architecture',
            collapsed: true,
            items: [
                'uxopian-ai/architecture/overview',
            ],
        },
        {
            type: 'category',
            label: 'Concepts',
            collapsed: true,
            items: [
                'uxopian-ai/concepts/overview',
            ],
        },
        {
            type: 'category',
            label: 'Configuration',
            collapsed: true,
            items: [
                'uxopian-ai/configuration/api-reference',
            ],
        },
        {
            type: 'category',
            label: 'Administration',
            collapsed: true,
            items: [
                'uxopian-ai/administration/backup-recovery',
            ],
        },
        {
            type: 'category',
            label: 'How-to Guides',
            collapsed: true,
            items: [
                'uxopian-ai/how-to-guides/contributing',
                'uxopian-ai/how-to-guides/new-provider',
            ],
        },
    ],
};

export default sidebars;